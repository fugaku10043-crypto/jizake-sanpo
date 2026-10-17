import { useParams } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { prefectureDetails, type PrefectureDetail } from "@/mocks/prefectureDetail";

export default function PrefectureDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [copyDone, setCopyDone] = useState(false);
  const [pref, setPref] = useState<PrefectureDetail | null>(null);

  useEffect(() => {
    const found = prefectureDetails.find((p) => p.id === id) ?? null;
    setPref(found);
    if (found) {
      document.title = `${found.name}の地酒と魅力 | 地酒さんぽ`;
    }
    window.scrollTo(0, 0);
  }, [id]);

  const buildShareText = useCallback((p: PrefectureDetail) => {
    const sakeFirst = p.recommendedSakes[0]?.name ?? "";
    return `【地酒さんぽ】${p.name}の地酒が気になる！おすすめは「${sakeFirst}」。${p.catchCopy} #地酒さんぽ`;
  }, []);

  const handleXShare = useCallback(
    (p: PrefectureDetail) => {
      const text = buildShareText(p) + " #地酒さんぽ #日本酒初心者";
      const url = window.location.origin + window.location.pathname;
      window.open(
        `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
        "_blank",
        "noopener,noreferrer",
      );
    },
    [buildShareText],
  );

  const handleLineShare = useCallback(
    (p: PrefectureDetail) => {
      const text = buildShareText(p) + "\nあなたも見てみて→";
      const url = window.location.origin + window.location.pathname;
      window.open(
        `https://line.me/R/msg/text/?${encodeURIComponent(text + " " + url)}`,
        "_blank",
        "noopener,noreferrer",
      );
    },
    [buildShareText],
  );

  const handleCopyUrl = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(
        window.location.origin + window.location.pathname,
      );
      setCopyDone(true);
      setTimeout(() => setCopyDone(false), 2000);
    } catch {
      // fallback silently
    }
  }, []);

  // Related prefectures: same region, excluding current
  const related = prefectureDetails.filter(
    (p) => pref && p.regionId === pref.regionId && p.id !== pref.id,
  ).slice(0, 3);

  const colorChip = {
    primary: "bg-primary-500 text-background-50",
    accent: "bg-accent-500 text-foreground-950",
    secondary: "bg-secondary-500 text-background-50",
  };
  const colorChipLight = {
    primary: "bg-primary-100 text-primary-800",
    accent: "bg-accent-100 text-accent-900",
    secondary: "bg-secondary-100 text-secondary-900",
  };

  // Not found state
  if (!pref) {
    return (
      <div className="min-h-screen bg-background-50 flex items-center justify-center">
        <div className="text-center p-8">
          <span className="w-20 h-20 flex items-center justify-center mx-auto rounded-full bg-accent-200 text-3xl mb-4">
            🗾
          </span>
          <h1 className="font-heading text-2xl font-extrabold text-foreground-950 mb-2">
            ごめん、まだこの県の詳細はないんだ
          </h1>
          <p className="text-sm text-foreground-700 mb-6">
            これから少しずつ増やしていくから、気長に待っててね。
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary-500 text-background-50 text-sm font-label font-bold hover:bg-primary-600 cursor-pointer whitespace-nowrap transition-colors"
          >
            <i className="ri-arrow-left-line"></i>
            トップにもどる
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-50">
      {/* --- Hero --- */}
      <section className="relative overflow-hidden">
        <div className="relative w-full h-[320px] md:h-[480px] overflow-hidden">
          <img
            src={pref.heroImageUrl}
            alt={`${pref.name}の地酒と地域の魅力を紹介する地酒さんぽのページ`}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-background-50"></div>
        </div>

        {/* Back button absolute */}
        <a
          href="/#map"
          className="absolute top-6 left-4 md:left-10 z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-50/90 backdrop-blur text-foreground-800 text-sm font-label font-bold hover:bg-background-50 cursor-pointer whitespace-nowrap transition-colors shadow-soft"
        >
          <i className="ri-arrow-left-line"></i>
          地図にもどる
        </a>

        {/* Hero text overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-4 md:px-10 pb-8 md:pb-12">
          <div className="w-full max-w-[1024px] mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full bg-background-50/90 backdrop-blur text-xs font-label font-bold text-foreground-800 whitespace-nowrap">
                {pref.regionName}
              </span>
              <span className="px-3 py-1 rounded-full bg-primary-500/90 backdrop-blur text-xs font-label font-bold text-background-50 whitespace-nowrap">
                {pref.name}
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-background-50 leading-tight drop-shadow-lg">
              {pref.catchCopy}
            </h1>
          </div>
        </div>
      </section>

      {/* --- Intro + Description --- */}
      <section className="pt-10 pb-6">
        <div className="w-full max-w-[1024px] mx-auto px-4 md:px-10">
          <div className="max-w-3xl">
            <p className="font-heading text-xl md:text-2xl font-bold text-primary-600 mb-4">
              {pref.intro}
            </p>
            <p className="text-sm md:text-base text-foreground-700 leading-relaxed">
              {pref.description}
            </p>
          </div>
        </div>
      </section>

      {/* --- Recommended Sakes --- */}
      <section className="py-10 md:py-14 bg-background-100/60">
        <div className="w-full max-w-[1024px] mx-auto px-4 md:px-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-500 text-background-50">
              <i className="ri-goblet-line text-sm"></i>
            </span>
            <h2 className="font-heading text-xl md:text-2xl font-extrabold text-foreground-950">
              初心者におすすめの一杯
            </h2>
          </div>
          <p className="text-sm text-foreground-600 mb-6 pl-11">
            {pref.name}で最初に試してほしい銘柄をピックアップしたよ。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {pref.recommendedSakes.map((s) => (
              <div
                key={s.name}
                className="bg-background-50 rounded-2xl border border-background-200/70 p-5 md:p-6 shadow-soft hover:shadow-pop transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 flex items-center justify-center rounded-full bg-accent-200">
                    <i className="ri-cup-line text-xs text-accent-800"></i>
                  </span>
                  <h3 className="font-heading text-lg font-bold text-foreground-950">
                    {s.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {s.tasteTags.map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-0.5 rounded-full text-xs font-label font-bold ${colorChipLight[pref.color]} whitespace-nowrap`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-foreground-700 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Food Pairings --- */}
      <section className="py-10 md:py-14">
        <div className="w-full max-w-[1024px] mx-auto px-4 md:px-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-500 text-foreground-950">
              <i className="ri-restaurant-2-line text-sm"></i>
            </span>
            <h2 className="font-heading text-xl md:text-2xl font-extrabold text-foreground-950">
              合わせたい食べもの
            </h2>
          </div>
          <p className="text-sm text-foreground-600 mb-6 pl-11">
            {pref.name}の地酒がもっと美味しくなる、地元の味を集めたよ。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pref.foodPairings.map((f) => (
              <div
                key={f.name}
                className="bg-background-100 rounded-2xl p-5 text-center hover:bg-accent-100 transition-colors"
              >
                <span className="w-12 h-12 flex items-center justify-center mx-auto rounded-full bg-background-50 text-2xl mb-3 shadow-soft">
                  🍽️
                </span>
                <h3 className="font-heading text-base font-bold text-foreground-950 mb-2">
                  {f.name}
                </h3>
                <p className="text-xs md:text-sm text-foreground-700 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Culture + Breweries --- */}
      <section className="py-10 md:py-14 bg-background-100/60">
        <div className="w-full max-w-[1024px] mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Culture */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary-500 text-background-50">
                  <i className="ri-sparkling-line text-sm"></i>
                </span>
                <h2 className="font-heading text-xl font-extrabold text-foreground-950">
                  酒どころの話
                </h2>
              </div>
              <p className="text-sm md:text-base text-foreground-700 leading-relaxed">
                {pref.cultureInfo}
              </p>
            </div>

            {/* Breweries */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-500 text-background-50">
                  <i className="ri-building-line text-sm"></i>
                </span>
                <h2 className="font-heading text-xl font-extrabold text-foreground-950">
                  代表的な蔵元
                </h2>
              </div>
              <div className="space-y-3">
                {pref.breweries.map((b) => (
                  <div
                    key={b.name}
                    className="bg-background-50 rounded-xl border border-background-200/70 p-4 shadow-soft"
                  >
                    <h3 className="font-heading text-sm font-bold text-foreground-950 mb-1">
                      {b.name}
                    </h3>
                    <p className="text-xs md:text-sm text-foreground-700 leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Travel Tips --- */}
      <section className="py-10 md:py-14">
        <div className="w-full max-w-[1024px] mx-auto px-4 md:px-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-500 text-background-50">
              <i className="ri-suitcase-line text-sm"></i>
            </span>
            <h2 className="font-heading text-xl md:text-2xl font-extrabold text-foreground-950">
              旅のひとこと
            </h2>
          </div>
          <p className="text-sm text-foreground-600 mb-6 pl-11">
            {pref.name}に行ったら、こんなふうに楽しんでみて。
          </p>

          <div className="space-y-3 max-w-2xl">
            {pref.travelTips.map((tip, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 bg-background-100 rounded-2xl hover:bg-accent-100 transition-colors"
              >
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-accent-500 text-foreground-950 shrink-0 mt-0.5">
                  <i className="ri-map-pin-line text-sm"></i>
                </span>
                <p className="text-sm md:text-base text-foreground-800 leading-relaxed pt-0.5">
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Share --- */}
      <section className="py-8 md:py-10 bg-background-100/60">
        <div className="w-full max-w-[1024px] mx-auto px-4 md:px-10 text-center">
          <p className="text-xs font-label text-foreground-600 mb-3">
            {pref.name}の地酒、気になったらシェアしてみよう
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <button
              onClick={() => handleXShare(pref)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground-950 text-background-50 text-sm font-label font-bold hover:bg-foreground-800 cursor-pointer whitespace-nowrap transition-colors"
            >
              <i className="ri-twitter-x-line"></i>
              Xでシェア
            </button>
            <button
              onClick={() => handleLineShare(pref)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#06C755] text-background-50 text-sm font-label font-bold hover:bg-[#05a84b] cursor-pointer whitespace-nowrap transition-colors"
            >
              <i className="ri-line-line"></i>
              LINEで送る
            </button>
            <button
              onClick={handleCopyUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-background-50 text-foreground-700 text-sm font-label font-bold hover:bg-background-200 border border-background-200 cursor-pointer whitespace-nowrap transition-colors"
            >
              {copyDone ? (
                <>
                  <i className="ri-check-line"></i>
                  コピーしたよ
                </>
              ) : (
                <>
                  <i className="ri-link"></i>
                  URLをコピー
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* --- Related Prefectures --- */}
      {related.length > 0 && (
        <section className="py-10 md:py-14">
          <div className="w-full max-w-[1024px] mx-auto px-4 md:px-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary-500 text-background-50">
                <i className="ri-compass-3-line text-sm"></i>
              </span>
              <h2 className="font-heading text-xl md:text-2xl font-extrabold text-foreground-950">
                同じ{pref.regionName}の地酒も見てみる?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((r) => (
                <a
                  key={r.id}
                  href={`/prefecture/${r.id}`}
                  className="group bg-background-50 rounded-2xl border border-background-200/70 p-5 text-left hover:shadow-pop cursor-pointer transition-all hover:border-accent-300 block"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-label font-bold ${colorChip[r.color]} whitespace-nowrap`}
                    >
                      {r.name}
                    </span>
                  </div>
                  <p className="text-sm font-label font-bold text-foreground-900 mb-1 group-hover:text-primary-600 transition-colors">
                    {r.catchCopy}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {r.recommendedSakes.slice(0, 2).map((s) => (
                      <span
                        key={s.name}
                        className="text-xs text-foreground-600 whitespace-nowrap"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 text-xs font-label text-primary-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    詳しく見る
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- Back to top --- */}
      <div className="text-center pb-14">
        <a
          href="/#map"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-background-50 text-sm font-label font-bold hover:bg-primary-600 cursor-pointer whitespace-nowrap transition-colors shadow-soft"
        >
          <i className="ri-map-2-line"></i>
          地図から別の県を探す
        </a>
      </div>

      {/* --- Footer simple --- */}
      <footer className="bg-secondary-100 py-6">
        <div className="w-full max-w-[1024px] mx-auto px-4 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-500 text-background-50 text-sm">
              <i className="ri-cup-line"></i>
            </span>
            <span className="font-heading text-base font-bold text-foreground-900">
              地酒さんぽ
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-label text-foreground-600">
            <a href="/" className="hover:text-primary-600 cursor-pointer">
              トップページ
            </a>
            <span>© 2026 地酒さんぽ</span>
          </div>
        </div>
      </footer>
    </div>
  );
}