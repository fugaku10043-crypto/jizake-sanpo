export type PrefectureCard = {
  id: string;
  name: string;
  regionId: string;
  sake: string;
  brewery: string;
  tasteTags: string[];
  food: string;
  charm: string;
  travelTip: string;
  intro: string;
  imageUrl: string;
  color: "primary" | "accent" | "secondary";
};

export const prefectures: PrefectureCard[] = [
  {
    id: "niigata",
    name: "新潟県",
    regionId: "chubu",
    sake: "久保田 千寿",
    brewery: "朝日酒造",
    tasteTags: ["すっきり", "食事に合う"],
    food: "へぎそば、刺身、のどぐろ",
    charm: "米どころらしい、きれいで飲みやすい味わい。",
    travelTip: "まずは新潟駅のぽんしゅ館で、いろいろ飲み比べてみるのも楽しい。",
    intro: "雪国の水と米で生まれる、淡麗辛口の代表格。日本酒初心者にもすっきり飲みやすく、最初の一杯にぴったり。",
    imageUrl:
      "/images/readdy/readdy-24.jpg",
    color: "primary",
  },
  {
    id: "ishikawa",
    name: "石川県",
    regionId: "chubu",
    sake: "手取川 山廃純米",
    brewery: "吉田酒造店",
    tasteTags: ["やさしい旨み", "燗もうまい"],
    food: "のどぐろの塩焼き、加賀料理、香箱ガニ",
    charm: "金沢の上品な食文化と、ふくよかな酒の相性が抜群。",
    travelTip: "金沢のひがし茶屋街で、ちょっと贅沢な蔵元酒バーをのぞいてみて。",
    intro: "上品で奥行きある、ふくよかな旨口タイプ。日本酒初心者でも「日本酒っておいしい」と思えるやさしい味わい。",
    imageUrl:
      "/images/readdy/readdy-23.jpg",
    color: "accent",
  },
  {
    id: "hiroshima",
    name: "広島県",
    regionId: "chugoku",
    sake: "賀茂鶴 純米吟醸",
    brewery: "賀茂鶴酒造",
    tasteTags: ["やわらかい", "甘め", "やさしい"],
    food: "牡蠣、お好み焼き、瀬戸内の小魚",
    charm: "軟水仕込みのまろやかさ。とにかく口あたりがやさしい。",
    travelTip: "西条の酒蔵通りは徒歩で蔵を回れる、日本酒さんぽの聖地。",
    intro: "軟水で仕込む、口あたりまろやかな甘口寄り。日本酒初心者が「甘くて飲みやすい」と驚く、やさしい地酒。",
    imageUrl:
      "/images/readdy/readdy-22.jpg",
    color: "secondary",
  },
  {
    id: "akita",
    name: "秋田県",
    regionId: "tohoku",
    sake: "新政 No.6",
    brewery: "新政酒造",
    tasteTags: ["フルーティー", "やや甘", "モダン"],
    food: "きりたんぽ鍋、いぶりがっこ、ハタハタ",
    charm: "若手蔵元が多くて、フルーティーで現代的な味がたくさん。",
    travelTip: "秋田駅前の地酒バーで、利き酒セットを頼むとお得に飲み比べできる。",
    intro: "ワインみたいに香る、新しい東北の旗手。日本酒初心者にも「これが日本酒？」と驚かれる華やかな地酒。",
    imageUrl:
      "/images/readdy/readdy-21.jpg",
    color: "primary",
  },
  {
    id: "fukushima",
    name: "福島県",
    regionId: "tohoku",
    sake: "飛露喜 特別純米",
    brewery: "廣木酒造本店",
    tasteTags: ["バランス◎", "うまみ", "毎日飲める"],
    food: "馬刺し、こづゆ、川魚",
    charm: "全国新酒鑑評会の常連県。バランスが良くて飲み飽きしない。",
    travelTip: "会津若松の街歩きと一緒に、蔵元直営の酒蔵カフェへ。",
    intro: "万能型、何にでも合うバランスの福島酒。日本酒初心者にも「これなら毎日飲める」と好評の地酒。",
    imageUrl:
      "/images/readdy/readdy-20.jpg",
    color: "accent",
  },
];