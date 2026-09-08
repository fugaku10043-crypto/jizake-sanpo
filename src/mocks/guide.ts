export type GuideItem = {
  id: string;
  title: string;
  lead: string;
  description: string;
  recommend: string;
  icon: string;
  color: "primary" | "accent" | "secondary";
};

export const guideItems: GuideItem[] = [
  {
    id: "sukkiri",
    title: "すっきり飲みたいなら",
    lead: "迷ったらまずこれで大丈夫。",
    description:
      "「淡麗辛口」って書いてあるやつを選べばOK。水みたいに飲めて、料理の邪魔もしない優等生タイプ。",
    recommend: "新潟・秋田の冷酒からどうぞ。",
    icon: "ri-drop-line",
    color: "primary",
  },
  {
    id: "amame",
    title: "甘めから試したいなら",
    lead: "ジュース感覚はちょっと違うけど、入りやすい味。",
    description:
      "「純米」「やや甘口」と書かれたものや、軟水仕込みの広島・佐賀の酒は口あたりまろやか。",
    recommend: "広島・佐賀の純米酒。",
    icon: "ri-cake-3-line",
    color: "accent",
  },
  {
    id: "gohan",
    title: "ごはんと一緒に飲みたいなら",
    lead: "食中酒として鉄板の選び方。",
    description:
      "「食中酒」と書かれたものや、辛口寄りのもの。脂っこい料理にもさっぱり合ってくれる。",
    recommend: "石川・福島あたりの純米酒。",
    icon: "ri-restaurant-line",
    color: "secondary",
  },
  {
    id: "kaori",
    title: "香りを楽しみたいなら",
    lead: "ワイングラスで飲みたくなる派へ。",
    description:
      "「吟醸」「大吟醸」と書かれた酒は、フルーティーでお花みたいな香りがふわっと立つ。",
    recommend: "山形・佐賀のフルーティー系。",
    icon: "ri-flower-line",
    color: "primary",
  },
  {
    id: "tabisaki",
    title: "旅先で選ぶなら",
    lead: "もう一番楽しい選び方かも。",
    description:
      "難しく考えず「その土地で造られたお酒」を一杯。地元の料理と合わせるだけで、不思議とおいしい。",
    recommend: "現地の居酒屋で「地酒ください」でOK。",
    icon: "ri-suitcase-line",
    color: "accent",
  },
];