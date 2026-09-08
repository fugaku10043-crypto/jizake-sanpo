import { regions, type RegionInfo } from "@/mocks/regions";

type Props = {
  selectedId: string | null;
  onSelect: (region: RegionInfo) => void;
};

export default function JapanMap({ selectedId, onSelect }: Props) {
  return (
    <div className="relative w-full aspect-[5/4] max-w-[560px] mx-auto select-none">
      {/* Soft illustrated Japan map background */}
      <img
        src="https://readdy.ai/api/search-image?query=Cute%20soft%20pop%20flat%20illustration%20of%20Japan%20archipelago%20map%20on%20cream%20background%2C%20with%20pale%20blue%20sea%2C%20warm%20rice%20yellow%20and%20pale%20indigo%20land%20shapes%2C%20friendly%20hand-drawn%20editorial%20style%2C%20gentle%20pastel%20palette%2C%20no%20text%2C%20no%20labels%2C%20centered%20composition%2C%20simple%20and%20charming&width=1200&height=960&seq=jizake-japan-map-illust-v3&orientation=landscape"
        alt="日本酒初心者向けに都道府県から地酒を探せる地酒さんぽの日本地図"
        className="absolute inset-0 w-full h-full object-contain object-top"
      />

      {/* Decorative floating bits */}
      <div className="absolute top-[8%] left-[14%] w-10 h-10 flex items-center justify-center text-lg anim-floaty pointer-events-none">
        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-accent-200 text-accent-900 font-heading">
          🍶
        </span>
      </div>
      <div className="absolute bottom-[10%] right-[8%] w-10 h-10 flex items-center justify-center text-lg anim-floaty pointer-events-none" style={{ animationDelay: "1.2s" }}>
        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary-200 text-secondary-900 font-heading">
          🗾
        </span>
      </div>

      {/* Clickable region pins */}
      {regions.map((r) => {
        const active = selectedId === r.id;
        return (
          <button
            key={r.id}
            type="button"
            onClick={() => onSelect(r)}
            style={{ top: r.position.top, left: r.position.left }}
            className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-transform whitespace-nowrap ${
              active ? "scale-110 z-20" : "hover:scale-110 z-10"
            }`}
            aria-label={`${r.name}を選ぶ`}
          >
            <span
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label text-xs md:text-sm font-bold shadow-soft transition-colors ${
                active
                  ? "bg-primary-500 text-background-50"
                  : "bg-background-50 text-foreground-900 group-hover:bg-accent-500 group-hover:text-foreground-950"
              }`}
            >
              <span className="text-base">{r.emoji}</span>
              {r.name}
            </span>
            <span
              className={`block w-2 h-2 rounded-full mx-auto mt-1 transition-colors ${
                active ? "bg-primary-500" : "bg-foreground-400 group-hover:bg-accent-600"
              }`}
            ></span>
          </button>
        );
      })}
    </div>
  );
}