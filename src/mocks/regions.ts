export type RegionInfo = {
  id: string;
  name: string;
  catchCopy: string;
  reps: string;
  sake: string;
  tasteTags: string[];
  food: string;
  charm: string;
  travelTip: string;
  position: { top: string; left: string };
  emoji: string;
};

export const regions: RegionInfo[] = [
  {
    id: "hokkaido",
    name: "北海道",
    catchCopy: "おいしい水と、雪の国の一杯。",
    reps: "札幌・小樽・旭川",
    sake: "国稀(くにまれ)/男山",
    tasteTags: ["すっきり", "やや辛口", "雪解け水のキレ"],
    food: "ジンギスカン、海鮮丼、ザンギ",
    charm: "雪解け水と寒い土地ならではの、澄んだキレのある味わいが多め。",
    travelTip: "小樽の運河沿いで、海鮮と冷酒をちょい飲みするのが楽しい。",
    position: { top: "10%", left: "78%" },
    emoji: "❄️",
  },
  {
    id: "tohoku",
    name: "東北",
    catchCopy: "米どころが生む、やさしい味。",
    reps: "秋田・山形・福島・宮城・岩手・青森",
    sake: "新政/飛露喜/十四代",
    tasteTags: ["やさしい旨み", "ふくらみのある甘み", "ごはんに合う"],
    food: "きりたんぽ、芋煮、いぶりがっこ、海鮮",
    charm: "米どころ・水どころが揃う、酒の本場。やわらかい口あたりが特徴。",
    travelTip: "蔵元見学ツアーが充実してるので、旅と一緒に楽しむのがおすすめ。",
    position: { top: "26%", left: "70%" },
    emoji: "🌾",
  },
  {
    id: "kanto",
    name: "関東",
    catchCopy: "街と田んぼ、両方の顔。",
    reps: "茨城・栃木・群馬・埼玉・千葉・東京・神奈川",
    sake: "鳳凰美田/澤乃井/仙禽",
    tasteTags: ["香り華やか", "やや甘め", "モダン"],
    food: "もんじゃ、深川めし、宇都宮餃子",
    charm: "都会のすぐ近くに、意外と個性的な蔵がいっぱい。モダンな酒が見つかる。",
    travelTip: "東京の角打ち(立ち飲み酒屋)で気軽に飲み比べデビューが◎。",
    position: { top: "44%", left: "70%" },
    emoji: "🗼",
  },
  {
    id: "chubu",
    name: "中部",
    catchCopy: "山と海、米と水の宝庫。",
    reps: "新潟・富山・石川・福井・山梨・長野・岐阜・静岡・愛知",
    sake: "久保田/八海山/手取川",
    tasteTags: ["すっきり淡麗", "きれい", "食事に合う"],
    food: "へぎそば、のどぐろ、ます寿司、味噌煮込み",
    charm: "雪国の水と米でつくる、透き通るような淡麗酒の聖地。",
    travelTip: "新潟駅の「ぽんしゅ館」で、500円で利き酒ガチャ体験ができる。",
    position: { top: "48%", left: "55%" },
    emoji: "🏔️",
  },
  {
    id: "kansai",
    name: "関西",
    catchCopy: "日本酒のふるさと、灘と伏見。",
    reps: "京都・大阪・兵庫・滋賀・奈良・和歌山",
    sake: "月桂冠/白鶴/獺祭(山口寄り)",
    tasteTags: ["コクあり", "ふくよか", "燗にも合う"],
    food: "おばんざい、たこ焼き、明石焼き",
    charm: "灘・伏見は日本酒の二大産地。歴史ある蔵元がずらり並ぶ。",
    travelTip: "京都・伏見の酒蔵通りを散歩。試飲できる蔵も多くて楽しい。",
    position: { top: "56%", left: "44%" },
    emoji: "⛩️",
  },
  {
    id: "chugoku",
    name: "中国",
    catchCopy: "やわらかい水と、軟水仕込み。",
    reps: "鳥取・島根・岡山・広島・山口",
    sake: "獺祭/賀茂鶴/雨後の月",
    tasteTags: ["やわらかい", "やや甘口", "口あたりまろやか"],
    food: "牡蠣、瀬戸内の魚、もみじ饅頭(おつまみじゃないけど)",
    charm: "軟水仕込みのやさしい酒が多くて、初心者にも飲みやすい一杯が揃う。",
    travelTip: "広島・西条の酒蔵通りは徒歩で蔵めぐりできる名スポット。",
    position: { top: "60%", left: "32%" },
    emoji: "🏯",
  },
  {
    id: "shikoku",
    name: "四国",
    catchCopy: "海風と、辛口の潔さ。",
    reps: "徳島・香川・愛媛・高知",
    sake: "司牡丹/酔鯨/久礼",
    tasteTags: ["辛口キレ", "きりっと", "魚に合う"],
    food: "鰹のたたき、讃岐うどん、鯛めし",
    charm: "高知は宴会文化と辛口酒のふるさと。料理と一緒に飲むスタイル。",
    travelTip: "高知の「ひろめ市場」で、鰹のたたきと地酒を一緒にどうぞ。",
    position: { top: "66%", left: "37%" },
    emoji: "🌊",
  },
  {
    id: "kyushu",
    name: "九州",
    catchCopy: "焼酎だけじゃない、新世代の日本酒。",
    reps: "福岡・佐賀・長崎・熊本・大分・宮崎・鹿児島",
    sake: "鍋島/東一/田中六五",
    tasteTags: ["華やか", "ジューシー", "ワイングラスで飲みたい"],
    food: "もつ鍋、明太子、馬刺し",
    charm: "佐賀・福岡に若手蔵元が増えていて、フルーティーで新しい味が見つかる。",
    travelTip: "博多の屋台で、もつ鍋と一緒に冷酒をちょい飲み、これが沁みる。",
    position: { top: "72%", left: "22%" },
    emoji: "🍢",
  },
];