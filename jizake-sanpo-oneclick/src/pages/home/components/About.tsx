export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background-100/60">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-200 text-secondary-900 text-xs font-label font-bold mb-3">
              <i className="ri-heart-line"></i>
              このサイトについて
            </span>
            <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-foreground-950 leading-tight">
              地酒は、土地の入口。
            </h2>
            <p className="mt-5 text-sm md:text-base text-foreground-800 leading-relaxed">
              日本酒って、ちょっと難しそう。でも本当は、土地の水や米、食べ物、街の空気とつながっているもの。
            </p>
            <p className="mt-3 text-sm md:text-base text-foreground-800 leading-relaxed">
              「地酒さんぽ」は、詳しくない人でも地図を押しながら、気軽に
              <span className="font-bold text-primary-700">"その土地らしい一杯"</span>
              に出会えるサイトです。
            </p>

            <p className="mt-3 text-sm md:text-base text-foreground-800 leading-relaxed">
              地酒さんぽは、日本酒に苦手意識がある人や、居酒屋・旅先で何を選べばいいかわからない人のための初心者向け地酒マップです。日本酒を評価・採点するのではなく、地酒を入口に、その土地の水、米、食文化、街の魅力を知ることを目的にしています。
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { icon: "ri-map-2-line", label: "地図から探す", color: "bg-primary-100 text-primary-800" },
                { icon: "ri-restaurant-line", label: "食と土地で味わう", color: "bg-accent-100 text-accent-900" },
                { icon: "ri-suitcase-line", label: "旅の入口にする", color: "bg-secondary-100 text-secondary-900" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded-2xl p-4 ${item.color} flex flex-col items-center text-center gap-2`}
                >
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-background-50 text-xl">
                    <i className={item.icon}></i>
                  </span>
                  <p className="text-xs md:text-sm font-label font-bold leading-tight">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-200 rounded-3xl rotate-6 anim-floaty"></div>
            <div className="absolute -bottom-6 -right-4 w-20 h-20 bg-secondary-200 rounded-3xl -rotate-6 anim-floaty" style={{ animationDelay: "1.3s" }}></div>
            <div className="relative rounded-3xl overflow-hidden border-4 border-background-50 shadow-soft">
              <img
                src="/images/readdy/readdy-07.jpg"
                alt="地酒さんぽについて：日本酒初心者が居酒屋で地酒を楽しむイメージイラスト"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="absolute -bottom-6 left-6 right-6 md:left-10 md:right-10 bg-background-50 rounded-2xl p-4 md:p-5 border border-background-200/70 shadow-soft">
              <p className="text-xs md:text-sm font-label text-foreground-700 leading-relaxed">
                <span className="font-bold text-primary-700">"知識"より、"出会い"。</span>
                <br />
                ランキングや採点ではなく、好きを見つける入口になれたらうれしいです。
              </p>
            </div>
          </div>
        </div>

        {/* 製作者の想い */}
        <div className="mt-14 md:mt-20 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-accent-500 text-foreground-950">
              <i className="ri-user-heart-line text-lg"></i>
            </span>
            <h3 className="font-heading text-xl md:text-2xl font-extrabold text-foreground-950">
              製作者の想い
            </h3>
          </div>

          <div className="bg-background-50 rounded-2xl border border-accent-200 p-6 md:p-8 shadow-soft">
            <div className="flex items-start gap-4">
              <span className="w-14 h-14 flex items-center justify-center rounded-full bg-accent-200 text-3xl shrink-0 mt-1">
                🍶
              </span>
              <div>
                <p className="text-sm md:text-base text-foreground-800 leading-relaxed">
                  このサイトを作ったのは、大学3年生のときでした。
                </p>
                <p className="mt-4 text-sm md:text-base text-foreground-800 leading-relaxed">
                  正直に言うと、もともと日本酒が得意だったわけではありません。居酒屋の飲み放題でなんとなく飲むことが多く、初めて飲んだときには独特のアルコール感が強く印象に残り、それ以来「日本酒はちょっと苦手かも」と思っていました。
                </p>
                <p className="mt-4 text-sm md:text-base text-foreground-800 leading-relaxed">
                  そんな印象が変わったきっかけが、友人とのダーツ旅で訪れた長岡の「ぽんしゅ館」です。地域ごとに違う日本酒を少しずつ味わう中で、日本酒は単なるお酒ではなく、その土地の水や米、食文化、歴史が詰まった
                  <span className="font-bold text-primary-700">"地域の物語"</span>
                  なのだと感じました。
                </p>
                <p className="mt-4 text-sm md:text-base text-foreground-800 leading-relaxed">
                  一方で、日本酒は見た目だけでは違いがわかりにくく、銘柄や専門用語も少し難しく感じます。日本各地に魅力的な地酒があるのに、初心者が気軽に調べて選べる場所は意外と少ないとも思いました。
                </p>
                <p className="mt-4 text-sm md:text-base text-foreground-800 leading-relaxed">
                  だからこそ、かつての自分と同じように日本酒に苦手意識がある人にも、もっと気軽に地酒と出会ってほしい。厳格で難しそうに見える日本酒を、地図を押しながら、散歩するように楽しく知れるものにしたい。
                </p>
                <p className="mt-4 text-sm md:text-base text-foreground-800 leading-relaxed">
                  そんな思いから、「地酒さんぽ」を作りました。日本酒に詳しくなくても大丈夫。気になる土地から、まずは一杯ぶん近づいてみてください。
                </p>
                <p className="mt-5 text-xs font-label text-foreground-600">
                  — 地酒さんぽ 製作者より
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 製作者おすすめの銘柄 */}
        <div className="mt-14 md:mt-20 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-500 text-background-50">
              <i className="ri-star-line text-lg"></i>
            </span>
            <h3 className="font-heading text-xl md:text-2xl font-extrabold text-foreground-950">
              製作者おすすめの銘柄
            </h3>
          </div>

          <p className="text-sm text-foreground-700 mb-6 leading-relaxed">
            日本酒に苦手意識があった自分だからこそ、「まずはこれから試してみてほしい」と思える銘柄を選びました。
            どれも比較的手に入りやすく、日本酒ビギナーが最初の一杯にするのにぴったりです。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                name: "極甘めっちゃ甘口。FUKUGAO",
                brewery: "福顔酒造",
                prefecture: "新潟県",
                type: "めっちゃ甘口",
                typeColor: "bg-accent-100 text-accent-900",
                comment: "ぽんしゅ館で出会った思い出の一本。「日本酒ってこんなに甘くていいんだ」と思える一本。辛口が苦手な人でも、デザートみたいにゆるく楽しみやすい味わい。",
              },
              {
                name: "獺祭 純米大吟醸 45",
                brewery: "旭酒造",
                prefecture: "山口県",
                type: "香り華やか",
                typeColor: "bg-accent-100 text-accent-900",
                comment: "フルーティで華やかな香り。日本酒らしからぬ飲みやすさで、「日本酒ってこんなに香りがいいんだ」と驚くはず。",
              },
              {
                name: "田酒 特別純米",
                brewery: "西田酒造店",
                prefecture: "青森県",
                type: "バランス万能",
                typeColor: "bg-primary-100 text-primary-800",
                comment: "主張しすぎず、でもちゃんと味わいがある。食中酒としてどんな料理にも寄り添ってくれて、日本酒の懐の深さを教えてくれる。",
              },
            ].map((sake) => (
              <div
                key={sake.name}
                className="bg-background-50 rounded-2xl border border-background-200/70 p-5 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-label font-bold ${sake.typeColor}`}>
                    {sake.type}
                  </span>
                  <span className="text-xs text-foreground-600 font-label flex items-center gap-1">
                    <i className="ri-map-pin-line"></i>
                    {sake.prefecture}
                  </span>
                </div>

                <div>
                  <h4 className="font-heading text-base md:text-lg font-extrabold text-foreground-950 leading-tight">
                    {sake.name}
                  </h4>
                  <p className="text-xs text-foreground-600 mt-0.5">
                    {sake.brewery}
                  </p>
                </div>

                <div className="flex-1">
                  <p className="text-xs md:text-sm text-foreground-700 leading-relaxed">
                    <span className="text-primary-700 font-label">💬 </span>
                    {sake.comment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}