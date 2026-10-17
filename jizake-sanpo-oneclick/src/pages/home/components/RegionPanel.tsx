import type { RegionInfo } from "@/mocks/regions";
import { prefectureDetails } from "@/mocks/prefectureDetail";

type Props = {
  region: RegionInfo | null;
  onClose: () => void;
};

export default function RegionPanel({ region, onClose }: Props) {
  if (!region) {
    return (
      <div className="w-full bg-background-100/70 border border-background-200/70 rounded-2xl p-6 md:p-7 flex flex-col items-center justify-center text-center min-h-[420px]">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accent-200 text-2xl mb-4">
          👆
        </div>
        <h3 className="font-heading text-lg md:text-xl font-bold text-foreground-900 mb-2">
          気になる地域をタップしてみて
        </h3>
        <p className="text-sm text-foreground-700 leading-relaxed max-w-xs">
          地図のピンをひとつ選ぶと、その土地のおすすめ地酒や食、旅のヒントがここに出てくるよ。
        </p>
      </div>
    );
  }

  const regionPrefectures = prefectureDetails.filter(
    (p) => p.regionId === region.id,
  );

  return (
    <div
      key={region.id}
      className="w-full bg-background-50 border border-background-200/70 rounded-2xl p-6 md:p-7 shadow-soft anim-pop-in min-h-[420px]"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">{region.emoji}</span>
            <span className="text-xs font-label text-foreground-600">
              {region.reps}
            </span>
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground-950">
            {region.name}
          </h3>
          <p className="mt-1 text-sm font-label text-primary-700">
            {region.catchCopy}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-background-100 hover:bg-background-200 text-foreground-700 cursor-pointer"
          aria-label="閉じる"
        >
          <i className="ri-close-line text-lg"></i>
        </button>
      </div>

      <div className="space-y-4">
        <Row icon="ri-goblet-line" color="primary" label="初心者におすすめ" value={region.sake} />

        <div>
          <div className="flex items-center gap-2 mb-2 text-xs font-label text-foreground-600">
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-accent-100 text-accent-800">
              <i className="ri-price-tag-3-line text-xs"></i>
            </span>
            味のひとこと
          </div>
          <div className="flex flex-wrap gap-2">
            {region.tasteTags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-accent-100 text-accent-900 text-xs font-label font-bold whitespace-nowrap"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <Row icon="ri-restaurant-2-line" color="secondary" label="合わせたい食べもの" value={region.food} />
        <Row icon="ri-sparkling-line" color="accent" label="土地の魅力" value={region.charm} />
        <Row icon="ri-suitcase-line" color="primary" label="旅のひとこと" value={region.travelTip} />
      </div>

      {/* Prefecture links */}
      {regionPrefectures.length > 0 && (
        <div className="mt-5 pt-4 border-t border-background-200">
          <p className="text-xs font-label text-foreground-600 mb-2">
            この地域の県を詳しく見る
          </p>
          <div className="flex flex-wrap gap-2">
            {regionPrefectures.map((p) => (
              <a
                key={p.id}
                href={`/prefecture/${p.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background-100 text-foreground-800 text-xs font-label font-bold hover:bg-primary-100 hover:text-primary-700 cursor-pointer whitespace-nowrap transition-colors"
              >
                <i className="ri-map-pin-line"></i>
                {p.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Row({
  icon,
  color,
  label,
  value,
}: {
  icon: string;
  color: "primary" | "accent" | "secondary";
  label: string;
  value: string;
}) {
  const bg = {
    primary: "bg-primary-100 text-primary-800",
    accent: "bg-accent-100 text-accent-900",
    secondary: "bg-secondary-100 text-secondary-900",
  }[color];

  return (
    <div>
      <div className="flex items-center gap-2 mb-1.5 text-xs font-label text-foreground-600">
        <span className={`w-5 h-5 flex items-center justify-center rounded-full ${bg}`}>
          <i className={`${icon} text-xs`}></i>
        </span>
        {label}
      </div>
      <p className="text-sm md:text-base text-foreground-900 leading-relaxed pl-7">
        {value}
      </p>
    </div>
  );
}