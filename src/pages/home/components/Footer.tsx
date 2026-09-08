export default function Footer() {
  return (
    <footer className="bg-secondary-100 pt-16 pb-8">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10">
        {/* Drinking notice */}
        <div className="bg-background-50 rounded-2xl p-5 md:p-6 border border-secondary-200 mb-10">
          <div className="flex items-start gap-3">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-accent-200 text-accent-900 shrink-0">
              <i className="ri-information-line text-lg"></i>
            </span>
            <div>
              <h3 className="font-heading text-base md:text-lg font-bold text-foreground-950 mb-2">
                お酒は20歳になってから。
              </h3>
              <ul className="space-y-1.5 text-xs md:text-sm text-foreground-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-secondary-700 mt-0.5"></i>
                  20歳未満の方の飲酒は法律で禁止されています。
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-secondary-700 mt-0.5"></i>
                  飲酒運転は法律で禁止されています。
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-secondary-700 mt-0.5"></i>
                  妊娠中や授乳期の飲酒は赤ちゃんに影響します。
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-secondary-700 mt-0.5"></i>
                  自分のペースで、ゆっくり、楽しく。適正飲酒を心がけて。
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-500 text-background-50">
                <i className="ri-cup-line"></i>
              </span>
              <span className="font-heading text-xl font-bold text-foreground-950">
                地酒さんぽ
              </span>
            </div>
            <p className="text-sm text-foreground-700 leading-relaxed max-w-md">
              地酒さんぽは、日本酒初心者が都道府県から地酒を探せる個人運営の地酒マップです。気になる県をタップして、地酒とその土地の魅力をゆるく見つける、日本酒初心者のためのポップな入門サイト。
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold text-foreground-900 mb-3">
              <a href="#map" className="hover:text-primary-600 cursor-pointer">
                さんぽする
              </a>
            </h4>
            <ul className="space-y-2 text-sm text-foreground-700">
              <li><a href="#map" className="hover:text-primary-600 cursor-pointer">地図から探す</a></li>
              <li><a href="#diagnosis" className="hover:text-primary-600 cursor-pointer">気分で診断</a></li>
              <li><a href="#prefectures" className="hover:text-primary-600 cursor-pointer">ピックアップ5県</a></li>
              <li><a href="#guide" className="hover:text-primary-600 cursor-pointer">初心者向けガイド</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold text-foreground-900 mb-3">
              <a href="#about" className="hover:text-primary-600 cursor-pointer">
                サイトについて
              </a>
            </h4>
            <ul className="space-y-2 text-sm text-foreground-700">
              <li><a href="#about" className="hover:text-primary-600 cursor-pointer">このサイトについて</a></li>
              <li><a href="#notice" className="hover:text-primary-600 cursor-pointer">お酒に関するお願い</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-secondary-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-label text-foreground-600">
            © 2026 地酒さんぽ. All Rights Reserved. 当サイトの文章・構成・画像・デザインの無断転載・無断使用を禁止します。
          </p>
          <p className="text-xs font-label text-foreground-600">
            Made with <i className="ri-heart-fill text-accent-700"></i> for sake beginners
          </p>
        </div>
      </div>
    </footer>
  );
}