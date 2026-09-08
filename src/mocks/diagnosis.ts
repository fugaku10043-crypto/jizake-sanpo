export type QuizQuestion = {
  id: string;
  question: string;
  subtext: string;
  choices: {
    id: string;
    label: string;
    emoji: string;
    points: Record<string, number>;
  }[];
};

export type QuizResult = {
  type: string;
  title: string;
  headline: string;
  tasteTags: string[];
  regionName: string;
  regionEmoji: string;
  sakeExample: string;
  description: string;
  food: string;
  travelTip: string;
  color: "primary" | "accent" | "secondary";
  imageUrl: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "今日はどんな気分?",
    subtext: "今のあなたにぴったりの、飲みたい気分をひとつ選んでね。",
    choices: [
      {
        id: "q1a",
        label: "のんびりリラックス",
        emoji: "😌",
        points: { sukkiri: 1 },
      },
      {
        id: "q1b",
        label: "友達とワイワイ楽しみたい",
        emoji: "🎉",
        points: { balance: 1 },
      },
      {
        id: "q1c",
        label: "新しい自分を見つけたい",
        emoji: "✨",
        points: { kaori: 1 },
      },
      {
        id: "q1d",
        label: "ちょっと特別な気分",
        emoji: "🌟",
        points: { amame: 1 },
      },
    ],
  },
  {
    id: "q2",
    question: "何と一緒に楽しみたい?",
    subtext: "どんな食べ物やシチュエーションといっしょが理想?",
    choices: [
      {
        id: "q2a",
        label: "刺身や軽いつまみとサクッと",
        emoji: "🐟",
        points: { sukkiri: 1 },
      },
      {
        id: "q2b",
        label: "ごはん・鍋・肉、しっかり食べたい",
        emoji: "🍲",
        points: { balance: 1 },
      },
      {
        id: "q2c",
        label: "食後に、香りをゆっくり味わいたい",
        emoji: "🍇",
        points: { kaori: 1 },
      },
      {
        id: "q2d",
        label: "あまいものやデザート感覚でも",
        emoji: "🍰",
        points: { amame: 1 },
      },
    ],
  },
  {
    id: "q3",
    question: "初めての一杯、どれが気になる?",
    subtext: "直感で、目に留まったものを選んでみて。",
    choices: [
      {
        id: "q3a",
        label: "透き通った冷酒。キリッと冷えてそう",
        emoji: "🧊",
        points: { sukkiri: 1 },
      },
      {
        id: "q3b",
        label: "あたためてもおいしそうな、深みのある一杯",
        emoji: "♨️",
        points: { balance: 1 },
      },
      {
        id: "q3c",
        label: "華やかでフルーティー。ワイングラスみたい",
        emoji: "🍷",
        points: { kaori: 1 },
      },
      {
        id: "q3d",
        label: "まろやかで口あたりがやさしそう",
        emoji: "🍶",
        points: { amame: 1 },
      },
    ],
  },
];

export const quizResults: Record<string, QuizResult> = {
  sukkiri: {
    type: "sukkiri",
    title: "すっきり淡麗派",
    headline: "キレのある冷酒があなたの入り口。",
    tasteTags: ["すっきり", "キレ", "食事に合う"],
    regionName: "新潟 / 中部エリア",
    regionEmoji: "🏔️",
    sakeExample: "久保田 千寿 / 八海山",
    description:
      "「淡麗辛口」って書いてあるやつがあなたの相棒。冷やして飲むと、水みたいにスーッと入ってくるのにちゃんとおいしい。料理の邪魔をせず、むしろ引き立ててくれるタイプ。まずは新潟の冷酒からどうぞ。",
    food: "刺身・へぎそば・白身魚の塩焼き",
    travelTip: "新潟駅の「ぽんしゅ館」で500円利き酒ガチャ、楽しいよ。",
    color: "primary",
    imageUrl:
      "https://readdy.ai/api/search-image?query=Soft%20pop%20editorial%20illustration%20of%20cold%20Japanese%20sake%20glass%20on%20wooden%20table%20with%20snow%20mountain%20and%20rice%20field%20in%20background%2C%20pale%20blue%20cream%20color%20palette%2C%20friendly%20flat%20illustration%2C%20clean%20and%20refreshing%20mood%2C%20no%20text&width=800&height=600&seq=jizake-diagnosis-sukkiri-01&orientation=landscape",
  },
  balance: {
    type: "balance",
    title: "バランス万能派",
    headline: "毎日飲める、ちょうどいい一杯。",
    tasteTags: ["バランス◎", "うまみ", "何にでも合う"],
    regionName: "福島 / 東北エリア",
    regionEmoji: "🌾",
    sakeExample: "飛露喜 特別純米 / 冩樂",
    description:
      "甘すぎず辛すぎず、香りもほどほど。それでいて旨みがちゃんとある。食中酒として最強で、和食でも洋食でも合わせやすい優等生タイプ。迷ったらまずこれ、で間違いなし。",
    food: "馬刺し・きりたんぽ鍋・いぶりがっこ・洋食にも◎",
    travelTip: "会津若松の城下町を歩きながら、蔵元カフェで一杯。",
    color: "accent",
    imageUrl:
      "https://readdy.ai/api/search-image?query=Soft%20pop%20editorial%20illustration%20of%20warm%20Japanese%20sake%20carafe%20and%20cup%20with%20cozy%20dinner%20table%20food%20spread%2C%20rice%20field%20golden%20background%2C%20cream%20yellow%20warm%20palette%2C%20friendly%20flat%20illustration%2C%20harmonious%20mood%2C%20no%20text&width=800&height=600&seq=jizake-diagnosis-balance-01&orientation=landscape",
  },
  kaori: {
    type: "kaori",
    title: "香り華やか派",
    headline: "初めてでも感動する、フルーティーな世界。",
    tasteTags: ["フルーティー", "華やか", "モダン"],
    regionName: "秋田 / 東北エリア",
    regionEmoji: "❄️",
    sakeExample: "新政 No.6 / 刈穂",
    description:
      "「え、これ日本酒?」って思うくらい桃やメロンみたいな香り。ワイングラスで飲みたくなるスタイルで、日本酒のイメージが変わる一杯。甘口だけどくどくなくて、女子会やおしゃれな店でも飲まれてるタイプ。",
    food: "生ハム・カルパッチョ・クリームチーズ",
    travelTip: "秋田の地酒バーで利き酒セットを頼めば、香りの違いに驚くはず。",
    color: "primary",
    imageUrl:
      "https://readdy.ai/api/search-image?query=Soft%20pop%20editorial%20illustration%20of%20wine%20glass%20filled%20with%20clear%20sake%2C%20floral%20fruit%20notes%20floating%2C%20pale%20pink%20cream%20background%2C%20friendly%20flat%20illustration%2C%20elegant%20and%20modern%20mood%2C%20no%20text&width=800&height=600&seq=jizake-diagnosis-kaori-01&orientation=landscape",
  },
  amame: {
    type: "amame",
    title: "甘めまろやか派",
    headline: "口あたりやさしい、初心者にいちばん優しい入口。",
    tasteTags: ["やわらかい", "甘め", "口あたりまろやか"],
    regionName: "広島 / 中国エリア",
    regionEmoji: "🏯",
    sakeExample: "賀茂鶴 純米吟醸 / 雨後の月",
    description:
      "軟水で仕込んだ広島のお酒は、とにかく口あたりがやさしい。「日本酒ってちょっとツンとするんでしょ?」と思ってる人ほど、まずはここから。まろやかでクセがなく、デザート前にも飲めるようなやさしさ。",
    food: "牡蠣・お好み焼き・瀬戸内の魚介",
    travelTip: "広島・西条の酒蔵通りを徒歩で散策。試飲できる蔵が多くて楽しい。",
    color: "secondary",
    imageUrl:
      "https://readdy.ai/api/search-image?query=Soft%20pop%20editorial%20illustration%20of%20creamy%20smooth%20sake%20in%20small%20cup%20with%20Seto%20Inland%20Sea%20gentle%20waves%20and%20oyster%20in%20background%2C%20pale%20blue%20cream%20pastel%20palette%2C%20friendly%20flat%20illustration%2C%20warm%20and%20gentle%20mood%2C%20no%20text&width=800&height=600&seq=jizake-diagnosis-amame-01&orientation=landscape",
  },
};