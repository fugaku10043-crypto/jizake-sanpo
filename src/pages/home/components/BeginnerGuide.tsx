import { guideItems } from "@/mocks/guide";

const colorMap = {
  primary: {
    icon: "bg-primary-100 text-primary-700",
    chip: "bg-primary-500 text-background-50",
    border: "border-primary-200",
  },
  accent: {
    icon: "bg-accent-200 text-accent-900",
    chip: "bg-accent-500 text-foreground-950",
    border: "border-accent-300",
  },
  secondary: {
    icon: "bg-secondary-100 text-secondary-900",
    chip: "bg-secondary-500 text-background-50",
    border: "border-secondary-200",
  },
};

export default function BeginnerGuide() {
  return (
    <section id="guide" className="py-16 md:py-24 bg-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-label font-bold mb-3">
            <i className="ri-magic-line"></i>
            初心者向けガイド
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-foreground-950 leading-tight">
            「迷ったらまずこれで大丈夫」
            <br className="md:hidden" />
            くらいの気軽さで。
          </h2>
          <p className="mt-3 text-sm md:text-base text-foreground-700 leading-relaxed">
            専門用語はそんなに覚えなくて大丈夫。気分から選ぶ感じで、自分の入口を見つけてみてね。
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {guideItems.map((g, idx) => {
            const c = colorMap[g.color];
            return (
              <div
                key={g.id}
                className={`bg-background-50 rounded-2xl p-5 md:p-6 border-2 ${c.border} hover:-translate-y-1 transition-transform`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`w-12 h-12 flex items-center justify-center rounded-2xl text-2xl ${c.icon}`}
                  >
                    <i className={g.icon}></i>
                  </span>
                  <span className="text-xs font-label text-foreground-500">
                    Step 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-heading text-lg md:text-xl font-bold text-foreground-950 mb-1">
                  {g.title}
                </h3>
                <p className="text-xs md:text-sm font-label text-foreground-600 mb-3">
                  {g.lead}
                </p>
                <p className="text-sm text-foreground-800 leading-relaxed mb-4">
                  {g.description}
                </p>

                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-label font-bold ${c.chip} whitespace-nowrap`}
                >
                  <i className="ri-thumb-up-line"></i>
                  {g.recommend}
                </div>
              </div>
            );
          })}

          {/* Friendly tip card */}
          <div className="bg-accent-100 rounded-2xl p-5 md:p-6 border-2 border-accent-300 flex flex-col justify-between">
            <div>
              <span className="w-12 h-12 flex items-center justify-center rounded-2xl bg-accent-500 text-foreground-950 text-2xl mb-4">
                <i className="ri-emotion-happy-line"></i>
              </span>
              <h3 className="font-heading text-lg md:text-xl font-bold text-foreground-950 mb-2">
                お店での「正解」って?
              </h3>
              <p className="text-sm text-foreground-800 leading-relaxed">
                居酒屋では「すっきりした冷酒、ありますか?」とか
                「料理に合うやつでお願いします」って店員さんに言うだけで、ほぼ正解にたどり着けます。
              </p>
            </div>
            <p className="mt-4 text-xs font-label text-foreground-700">
              ※ 専門用語、覚えなくてOKです。
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex flex-col items-center gap-3 bg-accent-200/60 rounded-3xl px-8 py-6 border-2 border-accent-300">
            <p className="font-heading text-base md:text-lg font-bold text-foreground-950">
              どれが自分に合うか、まだ迷う?
            </p>
            <a
              href="#diagnosis"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary-500 text-background-50 text-sm font-label font-bold hover:bg-primary-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-shining-line"></i>
              3問で診断してみる
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}