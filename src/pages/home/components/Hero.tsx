import { useState } from "react";
import JapanMap from "./JapanMap";
import RegionPanel from "./RegionPanel";
import { regions, type RegionInfo } from "@/mocks/regions";

export default function Hero() {
  const [selected, setSelected] = useState<RegionInfo | null>(null);

  return (
    <section
      id="map"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Decorative soft circles */}
      <div className="absolute top-24 -left-20 w-64 h-64 rounded-full bg-accent-100/70 blur-2xl pointer-events-none"></div>
      <div className="absolute -top-10 right-0 w-72 h-72 rounded-full bg-secondary-100/80 blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-primary-100/70 blur-3xl pointer-events-none"></div>

      <div className="relative w-full max-w-[1280px] mx-auto px-4 md:px-10">
        {/* Top copy */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-200 text-accent-900 text-xs font-label font-bold mb-5">
            <i className="ri-map-pin-line"></i>
            日本酒、地図から始めよう
          </span>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground-950">
            地酒さんぽ
            <br />
            <span className="text-primary-600">日本酒初心者のための地酒マップ</span>
          </h1>
          <p className="mt-5 text-sm md:text-base text-foreground-700 leading-relaxed max-w-2xl mx-auto">
            地酒さんぽは、日本酒初心者が気になる都道府県から地酒を探せるサイトです。むずかしい専門用語ではなく、「甘め」「すっきり」「ごはんに合う」などのわかりやすい言葉で、各地の日本酒と地域の食文化、旅の楽しみ方を紹介します。
          </p>
          <p className="mt-3 text-xs md:text-sm text-foreground-600">
            日本酒に詳しくなくても大丈夫。地図から選んで、土地の味、食、旅の楽しみ方を、ゆるく見つけよう。
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {["すっきり", "甘め", "香り華やか", "食事に合う", "やさしい旨み"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-background-50 border border-background-200 text-xs font-label text-foreground-700 whitespace-nowrap"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Map + Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-start">
          <div className="lg:col-span-3 bg-background-50 rounded-3xl p-4 md:p-6 border border-background-200/70 shadow-soft">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-primary-500 text-background-50">
                  <i className="ri-cursor-line text-xs"></i>
                </span>
                <p className="text-xs md:text-sm font-label text-foreground-700">
                  地域のピンをタップしてみよう
                </p>
              </div>
              <div className="text-xs font-label text-foreground-500 hidden sm:block">
                8つの地域ブロック
              </div>
            </div>
            <JapanMap
              selectedId={selected?.id ?? null}
              onSelect={(r) => setSelected(r)}
            />

            {/* Region pill row (mobile / fallback) */}
            <div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {regions.map((r) => {
                const active = selected?.id === r.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setSelected(r)}
                    className={`px-3 py-1.5 rounded-full text-xs font-label font-bold whitespace-nowrap cursor-pointer transition-colors ${
                      active
                        ? "bg-primary-500 text-background-50"
                        : "bg-background-100 text-foreground-800 hover:bg-accent-200"
                    }`}
                  >
                    {r.emoji} {r.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <RegionPanel region={selected} onClose={() => setSelected(null)} />
          </div>
        </div>
      </div>
    </section>
  );
}