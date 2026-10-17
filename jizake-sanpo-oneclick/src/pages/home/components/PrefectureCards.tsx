import { prefectures } from "@/mocks/prefectures";

const colorMap = {
  primary: {
    chip: "bg-primary-100 text-primary-800",
    badge: "bg-primary-500 text-background-50",
    link: "text-primary-600 hover:text-primary-700",
  },
  accent: {
    chip: "bg-accent-100 text-accent-900",
    badge: "bg-accent-500 text-foreground-950",
    link: "text-accent-700 hover:text-accent-800",
  },
  secondary: {
    chip: "bg-secondary-100 text-secondary-900",
    badge: "bg-secondary-500 text-background-50",
    link: "text-secondary-700 hover:text-secondary-800",
  },
};

export default function PrefectureCards() {
  return (
    <section id="prefectures" className="py-16 md:py-24 bg-background-100/60">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-12">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-200 text-secondary-900 text-xs font-label font-bold mb-3">
              <i className="ri-bookmark-line"></i>
              ピックアップ5県
            </span>
            <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-foreground-950 leading-tight">
              スマホで見るなら、
              <br className="md:hidden" />
              こっちのカードもどうぞ。
            </h2>
            <p className="mt-3 text-sm md:text-base text-foreground-700">
              まずは入門にぴったりの5県から。気になるカードをのぞいてみて。
            </p>
          </div>
          <a
            href="#guide"
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500 text-background-50 text-sm font-label font-bold hover:bg-primary-600 transition-colors cursor-pointer whitespace-nowrap"
          >
            飲み方ガイドへ
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {prefectures.map((p) => {
            const c = colorMap[p.color];
            return (
              <article
                key={p.id}
                className="group bg-background-50 rounded-2xl overflow-hidden border border-background-200/70 shadow-soft hover:shadow-pop transition-shadow"
              >
                <a
                  href={`/prefecture/${p.id}`}
                  className="relative block w-full h-44 md:h-48 overflow-hidden cursor-pointer"
                >
                  <img
                    src={p.imageUrl}
                    alt={`${p.name}の初心者向け地酒を紹介するカード`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-label font-bold ${c.badge} whitespace-nowrap`}
                  >
                    {p.name}
                  </span>
                </a>

                <div className="p-5 md:p-6">
                  <p className="text-xs font-label text-foreground-600 mb-1">
                    おすすめの一杯
                  </p>
                  <h3 className="font-heading text-lg font-bold text-foreground-950 mb-1">
                    {p.sake}
                  </h3>
                  <p className="text-xs text-foreground-600 mb-3">
                    {p.brewery}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tasteTags.map((t) => (
                      <span
                        key={t}
                        className={`px-2.5 py-0.5 rounded-full text-xs font-label font-bold ${c.chip} whitespace-nowrap`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-foreground-800 leading-relaxed mb-3">
                    {p.intro}
                  </p>

                  <div className="space-y-2 text-sm text-foreground-700 border-t border-background-200 pt-3">
                    <p className="flex items-start gap-2">
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-accent-100 text-accent-800 mt-0.5 shrink-0">
                        <i className="ri-restaurant-line text-xs"></i>
                      </span>
                      <span>合わせたい食べ物：{p.food}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-secondary-100 text-secondary-900 mt-0.5 shrink-0">
                        <i className="ri-map-pin-line text-xs"></i>
                      </span>
                      <span>地域の魅力：{p.charm}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary-100 text-primary-800 mt-0.5 shrink-0">
                        <i className="ri-suitcase-line text-xs"></i>
                      </span>
                      <span>旅のヒント：{p.travelTip}</span>
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-background-200">
                    <a
                      href={`/prefecture/${p.id}`}
                      className={`inline-flex items-center gap-1.5 text-xs font-label font-bold ${c.link} cursor-pointer whitespace-nowrap transition-all hover:gap-2`}
                    >
                      もっと詳しく見る
                      <i className="ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}

          {/* "もっと見たい" Filler card */}
          <div className="rounded-2xl border-2 border-dashed border-primary-300 bg-primary-50/60 p-6 flex flex-col items-center justify-center text-center min-h-[280px]">
            <span className="w-14 h-14 flex items-center justify-center rounded-full bg-primary-100 text-primary-700 text-2xl mb-3">
              <i className="ri-map-pin-add-line"></i>
            </span>
            <h3 className="font-heading text-base font-bold text-foreground-900 mb-1">
              もっと色んな県を見たい?
            </h3>
            <p className="text-xs text-foreground-700 mb-4 leading-relaxed">
              これからもポップに県を増やしていく予定。
              <br />
              新着のお知らせ、待っててね。
            </p>
            <a
              href="#map"
              className="px-4 py-1.5 rounded-full bg-primary-500 text-background-50 text-xs font-label font-bold hover:bg-primary-600 cursor-pointer whitespace-nowrap"
            >
              地図に戻る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}