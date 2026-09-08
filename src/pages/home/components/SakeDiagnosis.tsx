import { useState, useCallback } from "react";
import { quizQuestions, quizResults, type QuizResult } from "@/mocks/diagnosis";

type Step = "start" | "q1" | "q2" | "q3" | "result";

const colorSet = {
  primary: {
    chip: "bg-primary-500 text-background-50",
  },
  accent: {
    chip: "bg-accent-500 text-foreground-950",
  },
  secondary: {
    chip: "bg-secondary-500 text-background-50",
  },
};

export default function SakeDiagnosis() {
  const [step, setStep] = useState<Step>("start");
  const [points, setPoints] = useState<Record<string, number>>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [animKey, setAnimKey] = useState(0);
  const [copyDone, setCopyDone] = useState(false);

  const startQuiz = useCallback(() => {
    setAnimKey((k) => k + 1);
    setPoints({ sukkiri: 0, balance: 0, kaori: 0, amame: 0 });
    setStep("q1");
    setResult(null);
  }, []);

  const handleChoice = useCallback(
    (qId: string, choicePoints: Record<string, number>) => {
      setAnimKey((k) => k + 1);
      const next = { ...points };
      Object.entries(choicePoints).forEach(([k, v]) => {
        next[k] = (next[k] || 0) + v;
      });
      setPoints(next);

      const stepMap: Record<string, Step> = { q1: "q2", q2: "q3" };
      if (qId in stepMap) {
        setStep(stepMap[qId]);
      } else {
        // Determine result
        let best = "sukkiri";
        let bestScore = 0;
        Object.entries(next).forEach(([k, v]) => {
          if (v > bestScore) {
            best = k;
            bestScore = v;
          }
        });
        setResult(quizResults[best]);
        setStep("result");
      }
    },
    [points],
  );

  const buildShareText = useCallback((r: QuizResult) => {
    const sakeFirst = r.sakeExample.split(" / ")[0];
    return `【地酒さんぽ診断】私は「${r.title}」でした！${r.regionName}の${sakeFirst}がおすすめだって。${r.headline}`;
  }, []);

  const handleXShare = useCallback(
    (r: QuizResult) => {
      const text = buildShareText(r) + " #地酒さんぽ #日本酒初心者";
      window.open(
        `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.origin + window.location.pathname + "#diagnosis")}`,
        "_blank",
        "noopener,noreferrer",
      );
    },
    [buildShareText],
  );

  const handleLineShare = useCallback(
    (r: QuizResult) => {
      const text = buildShareText(r) + "\nあなたも診断してみて→";
      window.open(
        `https://line.me/R/msg/text/?${encodeURIComponent(text + " " + (window.location.origin + window.location.pathname + "#diagnosis"))}`,
        "_blank",
        "noopener,noreferrer",
      );
    },
    [buildShareText],
  );

  const handleCopyUrl = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(
        window.location.origin + window.location.pathname + "#diagnosis",
      );
      setCopyDone(true);
      setTimeout(() => setCopyDone(false), 2000);
    } catch {
      // fallback silently
    }
  }, []);

  const currentQuestion =
    step === "q1" || step === "q2" || step === "q3"
      ? quizQuestions[step === "q1" ? 0 : step === "q2" ? 1 : 2]
      : null;

  const progress =
    step === "q1" ? 0 : step === "q2" ? 1 : step === "q3" ? 2 : 3;

  return (
    <section id="diagnosis" className="py-16 md:py-24 bg-background-100/60 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent-100/60 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-secondary-100/70 blur-3xl pointer-events-none"></div>

      <div className="relative w-full max-w-[1024px] mx-auto px-4 md:px-10">
        {/* Section header */}
        {step === "start" && (
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-200 text-accent-900 text-xs font-label font-bold mb-3">
              <i className="ri-shining-line"></i>
              気分で選ぶ
            </span>
            <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-foreground-950 leading-tight">
              3つの質問で見つける、
              <br />
              <span className="text-primary-600">あなたにぴったりの一杯。</span>
            </h2>
            <p className="mt-3 text-sm md:text-base text-foreground-700">
              知識ゼロでも大丈夫。気分と直感でポチポチ答えるだけ。
            </p>
          </div>
        )}

        {/* START screen */}
        {step === "start" && (
          <div key={`start-${animKey}`} className="max-w-lg mx-auto anim-pop-in">
            <div className="bg-background-50 rounded-3xl border border-background-200/70 shadow-soft p-8 md:p-10 text-center">
              <div className="relative mx-auto w-40 h-40 md:w-52 md:h-52 mb-6 rounded-full overflow-hidden border-4 border-background-50 shadow-soft">
                <img
                  src="/images/readdy/readdy-02.jpg"
                  alt="地酒さんぽの日本酒診断：あなたに合う地酒を見つけるイメージイラスト"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <h3 className="font-heading text-xl md:text-2xl font-extrabold text-foreground-950 mb-2">
                あなたに合う地酒、診断します。
              </h3>
              <p className="text-sm text-foreground-700 mb-6 leading-relaxed">
                3つの質問に答えると、今の気分にぴったりの
                <br />
                地域とお酒が出てくるよ。
                <br className="hidden sm:block" />
                友達にシェアするのも楽しいかも。
              </p>

              <button
                onClick={startQuiz}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary-500 text-background-50 text-base font-label font-bold hover:bg-primary-600 cursor-pointer whitespace-nowrap shadow-soft transition-all hover:scale-105"
              >
                診断スタート!
                <i className="ri-arrow-right-line"></i>
              </button>

              <p className="mt-3 text-xs text-foreground-500">
                30秒で終わるよ。
              </p>
            </div>
          </div>
        )}

        {/* Quiz questions */}
        {currentQuestion && (
          <div key={`q-${step}-${animKey}`} className="max-w-2xl mx-auto anim-pop-in">
            {/* Progress bar */}
            <div className="flex items-center gap-2 mb-6 justify-center">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i <= progress ? "bg-primary-500" : "bg-background-200"
                  }`}
                ></div>
              ))}
              <span className="text-xs font-label text-foreground-600 ml-2">
                Q{progress + 1}/3
              </span>
            </div>

            <div className="bg-background-50 rounded-3xl border border-background-200/70 shadow-soft p-6 md:p-10">
              <h3 className="font-heading text-xl md:text-3xl font-extrabold text-foreground-950 mb-2">
                {currentQuestion.question}
              </h3>
              <p className="text-sm text-foreground-600 mb-6">
                {currentQuestion.subtext}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {currentQuestion.choices.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleChoice(currentQuestion.id, c.points)}
                    className="group flex items-center gap-4 p-4 md:p-5 rounded-2xl border-2 border-background-200 bg-background-50 hover:border-primary-400 hover:bg-primary-50/60 cursor-pointer transition-all text-left"
                  >
                    <span className="w-12 h-12 flex items-center justify-center text-2xl rounded-full bg-accent-100 shrink-0 group-hover:scale-110 transition-transform">
                      {c.emoji}
                    </span>
                    <span className="text-sm md:text-base font-label font-bold text-foreground-900 group-hover:text-primary-700 transition-colors">
                      {c.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Result */}
        {step === "result" && result && (
          <div key={`result-${animKey}`} className="max-w-2xl mx-auto anim-pop-in">
            <div className="text-center mb-4">
              <span className="text-xs font-label text-foreground-600">
                結果
              </span>
            </div>

            <div className="bg-background-50 rounded-3xl border border-background-200/70 shadow-soft overflow-hidden">
              {/* Result header image */}
              <div className="relative w-full h-44 md:h-56 overflow-hidden">
                <img
                  src={result.imageUrl}
                  alt={`${result.title}のイメージイラスト`}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-background-50/10 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{result.regionEmoji}</span>
                    <span className="text-xs font-label text-foreground-500">
                      {result.regionName}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground-950">
                    {result.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-10">
                <p className="text-base md:text-lg font-heading font-bold text-primary-600 mb-4">
                  {result.headline}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {result.tasteTags.map((t) => (
                    <span
                      key={t}
                      className={`px-3 py-1 rounded-full text-xs font-label font-bold ${colorSet[result.color].chip} whitespace-nowrap`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-sm md:text-base text-foreground-800 leading-relaxed mb-6">
                  {result.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="bg-accent-100 rounded-2xl p-4 text-center">
                    <span className="w-10 h-10 flex items-center justify-center mx-auto rounded-full bg-accent-500 text-foreground-950 mb-2">
                      <i className="ri-goblet-line"></i>
                    </span>
                    <p className="text-xs font-label text-foreground-600 mb-1">
                      おすすめ銘柄
                    </p>
                    <p className="text-sm font-label font-bold text-foreground-950">
                      {result.sakeExample}
                    </p>
                  </div>
                  <div className="bg-secondary-100 rounded-2xl p-4 text-center">
                    <span className="w-10 h-10 flex items-center justify-center mx-auto rounded-full bg-secondary-500 text-background-50 mb-2">
                      <i className="ri-restaurant-line"></i>
                    </span>
                    <p className="text-xs font-label text-foreground-600 mb-1">
                      合わせたい食
                    </p>
                    <p className="text-xs font-label font-bold text-foreground-900 leading-relaxed">
                      {result.food}
                    </p>
                  </div>
                  <div className="bg-primary-100 rounded-2xl p-4 text-center">
                    <span className="w-10 h-10 flex items-center justify-center mx-auto rounded-full bg-primary-500 text-background-50 mb-2">
                      <i className="ri-suitcase-line"></i>
                    </span>
                    <p className="text-xs font-label text-foreground-600 mb-1">
                      旅のヒント
                    </p>
                    <p className="text-xs font-label font-bold text-foreground-900 leading-relaxed">
                      {result.travelTip}
                    </p>
                  </div>
                </div>

                {/* Share row */}
                <div className="border-t border-background-200 pt-5 mb-6">
                  <p className="text-center text-xs font-label text-foreground-600 mb-3">
                    結果をシェアしてみよう
                  </p>
                  <div className="flex items-center justify-center gap-3 flex-wrap">
                    <button
                      onClick={() => handleXShare(result)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground-950 text-background-50 text-xs font-label font-bold hover:bg-foreground-800 cursor-pointer whitespace-nowrap transition-colors"
                    >
                      <i className="ri-twitter-x-line text-sm"></i>
                      Xでシェア
                    </button>
                    <button
                      onClick={() => handleLineShare(result)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#06C755] text-background-50 text-xs font-label font-bold hover:bg-[#05a84b] cursor-pointer whitespace-nowrap transition-colors"
                    >
                      <i className="ri-line-line text-sm"></i>
                      LINEで送る
                    </button>
                    <button
                      onClick={handleCopyUrl}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-100 text-foreground-700 text-xs font-label font-bold hover:bg-background-200 cursor-pointer whitespace-nowrap transition-colors"
                    >
                      {copyDone ? (
                        <>
                          <i className="ri-check-line text-sm"></i>
                          コピーしたよ
                        </>
                      ) : (
                        <>
                          <i className="ri-link text-sm"></i>
                          URLをコピー
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                  <button
                    onClick={startQuiz}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-background-100 text-foreground-800 text-sm font-label font-bold hover:bg-background-200 cursor-pointer whitespace-nowrap transition-colors"
                  >
                    <i className="ri-restart-line"></i>
                    もう一度診断する
                  </button>
                  <a
                    href="#map"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary-500 text-background-50 text-sm font-label font-bold hover:bg-primary-600 cursor-pointer whitespace-nowrap transition-colors"
                  >
                    <i className="ri-map-2-line"></i>
                    地図から探してみる
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}