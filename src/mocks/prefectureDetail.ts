export type SakeItem = {
  name: string;
  description: string;
  tasteTags: string[];
};

export type FoodItem = {
  name: string;
  description: string;
};

export type PrefectureDetail = {
  id: string;
  name: string;
  regionId: string;
  regionName: string;
  heroImageUrl: string;
  catchCopy: string;
  intro: string;
  description: string;
  recommendedSakes: SakeItem[];
  foodPairings: FoodItem[];
  cultureInfo: string;
  travelTips: string[];
  breweries: { name: string; description: string }[];
  color: "primary" | "accent" | "secondary";
};

export const prefectureDetails: PrefectureDetail[] = [
  {
    id: "hokkaido",
    name: "北海道",
    regionId: "hokkaido",
    regionName: "北海道",
    heroImageUrl:
      "https://readdy.ai/api/search-image?query=Soft%20pop%20flat%20illustration%20of%20Hokkaido%20winter%20snowy%20landscape%20with%20Otaru%20canal%20wooden%20warehouses%20and%20distant%20mountains%20under%20pale%20blue%20sky%2C%20cream%20warm%20pastel%20background%2C%20editorial%20cute%20illustration%2C%20friendly%20tone%2C%20no%20text&width=1200&height=800&seq=jizake-detail-hokkaido-hero&orientation=landscape",
    catchCopy: "おいしい水と、雪の国の一杯。",
    intro: "広大な大地と雪解け水が生む、キレのあるすっきりした日本酒。",
    description:
      "北海道の日本酒は、寒い気候と豊富な雪解け水がつくる、すっきりとしたキレの良さが持ち味。米どころとしても知られ、「彗星」や「吟風」といった北海道生まれの酒米が使われることも。焼酎文化が強いイメージがあるけど、札幌や小樽を中心に、若手蔵元がつくるモダンでフレッシュな酒も増えているんだ。",
    recommendedSakes: [
      {
        name: "国稀 純米吟醸",
        description: "北海道増毛町の蔵。日本最北の酒蔵のひとつで、冷涼な気候が生むスッキリとした飲み口が人気。",
        tasteTags: ["すっきり", "キレ良し", "冷やして◎"],
      },
      {
        name: "男山 純米大吟醸",
        description: "旭川の老舗蔵。北海道産酒米を使った、ふくらみのある旨みと端正な味わい。",
        tasteTags: ["バランス", "やや辛口", "食事に合う"],
      },
    ],
    foodPairings: [
      { name: "ジンギスカン", description: "ラム肉の旨みとスッキリした冷酒がびっくりするほど合う。脂を流してくれる感じ。" },
      { name: "海鮮丼", description: "ウニ・イクラ・カニなど濃厚な海の幸に、キレのある辛口が寄り添ってくれる。" },
      { name: "ザンギ", description: "北海道風の塩味の唐揚げ。冷酒との相性は間違いない、居酒屋の定番コンビ。" },
    ],
    cultureInfo:
      "北海道の酒蔵は明治以降に増えていったから、歴史は比較的浅め。でもだからこそ、新しいことに挑戦する蔵が多くて、フルーティーな吟醸酒やスパークリング日本酒なんかも出てきている。札幌の「千歳鶴」は地元で愛され続ける銘柄で、市内の居酒屋ならだいたい置いてあるよ。",
    travelTips: [
      "札幌・すすきので地酒とジンギスカンをハシゴ。観光客向けじゃなく、地元の人が通う小店を狙うとアタリが多い。",
      "小樽の運河沿いを散歩したあと、海鮮と冷酒のちょい飲み。夕暮れ時の運河と冷酒は、旅のベストショットになる。",
      "旭川の男山酒造り資料館は無料見学できる。試飲コーナーもあって、飲み比べ初心者にやさしい。",
    ],
    breweries: [
      { name: "国稀酒造（増毛町）", description: "日本最北端エリアの蔵。寒さが酒をゆっくり発酵させ、きれいな味に。" },
      { name: "男山（旭川市）", description: "北海道を代表する老舗。大雪山の伏流水を使った、骨太で端正な酒。" },
    ],
    color: "primary",
  },
  {
    id: "akita",
    name: "秋田県",
    regionId: "tohoku",
    regionName: "東北",
    heroImageUrl:
      "https://readdy.ai/api/search-image?query=Soft%20pop%20flat%20illustration%20of%20Akita%20snowy%20rice%20field%20winter%20countryside%20with%20traditional%20wooden%20house%20and%20warm%20light%2C%20pale%20cream%20yellow%20sky%2C%20editorial%20cute%20illustration%2C%20friendly%20warm%20tone%2C%20no%20text&width=1200&height=800&seq=jizake-detail-akita-hero&orientation=landscape",
    catchCopy: "米どころが生む、やさしい味。",
    intro: "ワインみたいに香る、新しい東北の旗手。",
    description:
      "秋田は「酒は米から」と言われるほど、酒米の生産がさかんな土地。特に若手の蔵元たちがつくる、フルーティーで現代的な味わいの酒が注目を集めている。新政、ゆきの美人、一白水成など、東京の酒場でも名前を見かける銘柄が増えてきた。伝統の「秋田流寒造り」という冬の寒さを活かした仕込みも、秋田酒のきれいな味を支えている。",
    recommendedSakes: [
      {
        name: "新政 No.6 X-type",
        description: "今や入手困難な人気銘柄。白ブドウのようなフルーティーな香りと、クリーミーな口あたり。日本酒の概念を変える一本。",
        tasteTags: ["フルーティー", "やや甘", "モダン"],
      },
      {
        name: "ゆきの美人 純米吟醸",
        description: "秋田市の小さな蔵。メロンのような香りと、すっきりした後味で、普段飲みにもぴったり。",
        tasteTags: ["華やか", "甘酸っぱい", "デイリー"],
      },
    ],
    foodPairings: [
      { name: "きりたんぽ鍋", description: "比内地鶏の出汁がしみた、冬の秋田のソウルフード。新政のフルーティーさと相性抜群。" },
      { name: "いぶりがっこ", description: "燻製たくあん。スモーキーな香りとポリポリ食感が、甘めの酒をぐいぐい進ませる。" },
      { name: "ハタハタ", description: "秋田の県魚。塩焼きでも、しょっつる鍋でも。淡白な白身が酒の香りを引き立てる。" },
    ],
    cultureInfo:
      "秋田は「酒は米から」と言われるほど酒米の産地で、「酒こまち」や「秋田酒こまち」といった酒米が有名。冬の寒さを活かした「寒造り」の伝統があり、澄んだ空気の中でゆっくり発酵させることで、雑味のないきれいな酒ができる。近年は「新政」の佐藤祐輔さんを筆頭に、若い蔵元が世界に挑戦する姿勢もかっこいい。",
    travelTips: [
      "秋田駅前の「あきた酒プラザ」で、県内40蔵以上の試飲ができる。まずはここで好みの味を見つけるのが近道。",
      "冬に行くなら、きりたんぽ鍋と熱燗の組み合わせが格別。雪見酒ってやつ。",
      "秋田市内の角打ち文化も楽しい。「那波」や「酔鯨亭」で地元の人に混じって立ち飲みしてみて。",
    ],
    breweries: [
      { name: "新政酒造（秋田市）", description: "日本酒界のロックスター的存在。ラベルも味も常に新しい。" },
      { name: "秋田醸造（秋田市）", description: "「ゆきの美人」の蔵。女性杜氏が手がける、繊細で美しい酒が評判。" },
    ],
    color: "primary",
  },
  {
    id: "fukushima",
    name: "福島県",
    regionId: "tohoku",
    regionName: "東北",
    heroImageUrl:
      "https://readdy.ai/api/search-image?query=Soft%20pop%20flat%20illustration%20of%20Aizu%20Wakamatsu%20castle%20town%20with%20traditional%20samurai%20houses%20and%20distant%20mountains%20under%20warm%20cream%20sky%2C%20editorial%20cute%20illustration%2C%20friendly%20tone%2C%20no%20text&width=1200&height=800&seq=jizake-detail-fukushima-hero&orientation=landscape",
    catchCopy: "全国新酒鑑評会、金賞常連県。",
    intro: "万能型、何にでも合うバランスの福島酒。",
    description:
      "福島県は全国新酒鑑評会で10年以上連続で金賞受賞数トップを走る、まさに酒どころ。会津、中通り、浜通りと広い県内に多彩な蔵が点在していて、バランスがよく飲み飽きしない酒が多いのが特徴。飛露喜、写楽、大七、会津ほまれ…名前を挙げたらキリがないくらい、粒揃いの蔵が集まっている。",
    recommendedSakes: [
      {
        name: "飛露喜 特別純米",
        description: "出会えたらラッキーと言われるレア銘柄。米の旨みがぎゅっと詰まっていて、どんな料理にも合う万能選手。",
        tasteTags: ["バランス◎", "うまみ", "毎日飲める"],
      },
      {
        name: "写楽 純米吟醸",
        description: "会津の蔵。華やかな香りと、しっかりした味わいのバランスが絶妙。食中酒として優秀。",
        tasteTags: ["香り良し", "コクあり", "魚に合う"],
      },
    ],
    foodPairings: [
      { name: "馬刺し", description: "会津の名物。にんにく醤油で食べる馬刺しに、飛露喜の旨みがドンピシャ。" },
      { name: "こづゆ", description: "会津の郷土料理。ホタテの出汁が効いたやさしい汁物と、まろやかな純米酒のペアリング。" },
      { name: "にしんの山椒漬け", description: "会津地方の保存食。山椒のピリッとした風味が酒を呼ぶ。" },
    ],
    cultureInfo:
      "福島は会津、中通り、浜通りの3地域で気候も文化も違うから、酒の味わいも多彩。会津は歴史ある城下町で、重厚で旨みのある酒が多く、中通りはモダンで軽やかな酒、浜通りは海の幸に合うキレのある酒…と、飲み比べると地域性がはっきり出ていて面白い。",
    travelTips: [
      "会津若松の七日町通りを散策しながら、酒蔵見学と試飲を楽しむ。徒歩圏内に蔵が点在している。",
      "福島駅周辺の居酒屋で、県内各地の地酒飲み比べセットを。県が広いから、味の違いを一度に楽しめる。",
      "会津の「末廣酒造」の蔵カフェ「杏」で、酒粕スイーツを。日本酒初心者の入り口にも◎。",
    ],
    breweries: [
      { name: "廣木酒造（会津坂下町）", description: "「飛露喜」の蔵。出荷量が少なく、レア度の高さも魅力のひとつ。" },
      { name: "宮泉銘醸（会津若松市）", description: "「写楽」の蔵。蔵元直営のショップもあり、試飲しやすい。" },
    ],
    color: "accent",
  },
  {
    id: "yamagata",
    name: "山形県",
    regionId: "tohoku",
    regionName: "東北",
    heroImageUrl:
      "https://readdy.ai/api/search-image?query=Soft%20pop%20flat%20illustration%20of%20Yamagata%20mountain%20countryside%20with%20cherry%20trees%20and%20traditional%20Japanese%20house%20on%20a%20hill%20under%20soft%20blue%20sky%2C%20cream%20warm%20pastel%20background%2C%20editorial%20cute%20illustration%2C%20friendly%20tone%2C%20no%20text&width=1200&height=800&seq=jizake-detail-yamagata-hero&orientation=landscape",
    catchCopy: "吟醸王国、山形。",
    intro: "フルーティーで華やか。吟醸酒好きなら外せない。",
    description:
      "山形は「吟醸王国」を自称するだけあって、フルーティーで華やかな吟醸酒のレベルがとにかく高い。十四代を筆頭に、くどき上手、出羽桜、獺祭（のルーツ）など、日本酒好きなら一度は聞いたことのある銘柄がずらり。酒米「出羽燦々」を生んだ土地でもあり、吟醸造りに適した気候と高い技術力が揃っている。",
    recommendedSakes: [
      {
        name: "十四代 純米吟醸",
        description: "入手困難の超プレミアム酒。メロンのような香りと、とろけるような口あたり。特別な日に。",
        tasteTags: ["プレミアム", "フルーティー", "別格"],
      },
      {
        name: "出羽桜 桜花吟醸",
        description: "桜の花びらをイメージした、軽やかで華やかな香り。十四代に手が出なくても、これで十分贅沢。",
        tasteTags: ["華やか", "軽やか", "初心者にも◎"],
      },
    ],
    foodPairings: [
      { name: "芋煮", description: "山形の秋の風物詩。牛肉のコクと里芋のとろみに、吟醸酒の香りが映える。" },
      { name: "だだちゃ豆", description: "山形の枝豆。濃厚な甘みと香りが、フルーティーな酒と相性良し。" },
      { name: "米沢牛", description: "言わずと知れた和牛の王様。脂の甘みを吟醸酒のフルーティーさが包み込む。" },
    ],
    cultureInfo:
      "山形は日本酒の消費量も多くて、県民の酒愛が深い土地。酒蔵見学や試飲イベントも盛んで、蔵元との距離が近いのも魅力。特に「出羽桜」の蔵は桜の名所としても有名で、春には酒と桜を一緒に楽しめる。吟醸造りの技術が高く、全国の蔵元からも一目置かれる存在。",
    travelTips: [
      "山形駅ビル「エスパル」の地酒コーナーで、県内蔵元の試飲ができる。旅の最初に立ち寄るのがおすすめ。",
      "春は「出羽桜酒造」の桜を見ながら試飲。花見酒ができる数少ないスポット。",
      "山形市内の居酒屋では「だだちゃ豆」と地酒の組み合わせをぜひ。これだけで山形満喫。",
    ],
    breweries: [
      { name: "高木酒造（村山市）", description: "「十四代」の蔵。もはや伝説的な存在で、一升瓶がオークションに出るほど。" },
      { name: "出羽桜酒造（天童市）", description: "桜の庭園を持つ美しい蔵。吟醸酒の品質が安定していて信頼できる。" },
    ],
    color: "secondary",
  },
  {
    id: "niigata",
    name: "新潟県",
    regionId: "chubu",
    regionName: "中部",
    heroImageUrl:
      "https://readdy.ai/api/search-image?query=Soft%20pop%20flat%20illustration%20of%20Niigata%20rice%20paddy%20fields%20in%20summer%20with%20blue%20sky%20and%20gentle%20mountains%2C%20traditional%20rural%20Japanese%20countryside%2C%20cream%20warm%20pastel%20background%2C%20editorial%20cute%20illustration%2C%20friendly%20tone%2C%20no%20text&width=1200&height=800&seq=jizake-detail-niigata-hero&orientation=landscape",
    catchCopy: "淡麗辛口のふるさと。",
    intro: "雪国の水と米で生まれる、淡麗辛口の代表格。",
    description:
      "新潟といえば「淡麗辛口」。透き通るようなクリアな味わいで、キレがよくて料理を選ばない。でも最近は「淡麗辛口」だけじゃなくて、フルーティーで甘みのある酒や、スパークリング日本酒などバリエーションも豊富。県内に90近い酒蔵があって、日本酒のテーマパークみたいな場所。",
    recommendedSakes: [
      {
        name: "久保田 千寿",
        description: "新潟の顔ともいえる定番銘柄。スッキリした飲み口で、どんな料理とも喧嘩しない。最初の一本にぴったり。",
        tasteTags: ["すっきり", "食事に合う", "定番"],
      },
      {
        name: "八海山 純米吟醸",
        description: "越後三山の名を冠した銘酒。米のうまみがしっかり感じられつつ、後味は驚くほどスッキリ。",
        tasteTags: ["うまみあり", "キレ良し", "万能"],
      },
    ],
    foodPairings: [
      { name: "へぎそば", description: "つなぎに布海苔を使った新潟のそば。淡麗な酒と合わせると、そばの香りが引き立つ。" },
      { name: "のどぐろ", description: "高級魚の代表。脂がのった白身を淡麗辛口がさっぱり流してくれる黄金コンビ。" },
      { name: "刺身盛り合わせ", description: "新潟は日本海の幸が豊富。シンプルな刺身こそ、酒の味がダイレクトに楽しめる。" },
    ],
    cultureInfo:
      "新潟は日本一の酒蔵数を誇る酒どころ。雪国の冬は酒造りに最適で、低温でゆっくり発酵させることで雑味のないきれいな酒が生まれる。越後杜氏と呼ばれる新潟出身の杜氏たちは、全国の蔵でも重宝される職人集団。新潟駅の「ぽんしゅ館」は日本酒飲み比べの聖地。",
    travelTips: [
      "新潟駅の「ぽんしゅ館」で利き酒。500円で5種類の飲み比べができるコイン式の試飲マシンが楽しい。",
      "越後湯沢駅の「ぽんしゅ館」にも試飲コーナーがあって、新幹線待ちのちょい飲みにぴったり。",
      "冬なら、雪見風呂と熱燗。越後湯沢の温泉地で、雪景色を眺めながらの一杯は格別。",
    ],
    breweries: [
      { name: "朝日酒造（長岡市）", description: "「久保田」の蔵。見学もできて、限定酒が買えるショップも人気。" },
      { name: "八海醸造（南魚沼市）", description: "「八海山」の蔵。雪室で貯蔵するユニークな熟成酒も見逃せない。" },
    ],
    color: "primary",
  },
  {
    id: "ishikawa",
    name: "石川県",
    regionId: "chubu",
    regionName: "中部",
    heroImageUrl:
      "https://readdy.ai/api/search-image?query=Soft%20pop%20flat%20illustration%20of%20Kanazawa%20old%20town%20Higashi%20Chaya%20district%20with%20traditional%20wooden%20tea%20houses%20and%20stone%20pavement%20under%20warm%20cream%20sky%2C%20editorial%20cute%20illustration%2C%20friendly%20tone%2C%20no%20text&width=1200&height=800&seq=jizake-detail-ishikawa-hero&orientation=landscape",
    catchCopy: "加賀料理と、ふくよかな一杯。",
    intro: "上品で奥行きある、ふくよかな旨口タイプ。",
    description:
      "石川の酒は、加賀料理と一緒に楽しむために進化してきた。上品でふくよかな旨みが特徴で、料理の味を引き立てながら自分もしっかり主張する。金沢を中心に、手取川、菊姫、天狗舞、加賀鳶など個性豊かな銘柄が揃っていて、燗酒文化が根付いているのも石川ならでは。",
    recommendedSakes: [
      {
        name: "手取川 山廃純米",
        description: "山廃仕込みならではのコクと酸味。ぬる燗にすると驚くほどまろやかになって、料理が止まらなくなる。",
        tasteTags: ["やさしい旨み", "燗もうまい", "コクあり"],
      },
      {
        name: "菊姫 山廃純米",
        description: "加賀の酒を代表する存在。しっかりした味わいで、肉料理にも負けない骨太さ。",
        tasteTags: ["どっしり", "うまみ濃厚", "肉に合う"],
      },
    ],
    foodPairings: [
      { name: "のどぐろの塩焼き", description: "石川の高級魚。脂ののった白身に、ふくよかな酒がベストマッチ。" },
      { name: "加賀料理（治部煮）", description: "鴨肉の旨煮。甘辛い味付けと山廃酒のコクが絡み合う贅沢なペアリング。" },
      { name: "香箱ガニ", description: "冬の金沢の宝石。カニ味噌の濃厚さに、ぬる燗のまろやかさが寄り添う。" },
    ],
    cultureInfo:
      "金沢は加賀百万石の城下町。武家文化と町人文化が融合した食文化が育まれ、酒も「料理と一緒に味わう」ことを前提に発展してきた。特に燗酒文化が根付いていて、秋から春にかけては熱燗でじっくり味わうのが地元流。ひがし茶屋街には、蔵元が営むバーもあって観光客にも人気。",
    travelTips: [
      "金沢・ひがし茶屋街の「福光屋」直営バーで、古民家の雰囲気とともに贅沢な試飲体験を。",
      "近江町市場で海鮮を買って、その場でいただく立ち飲みスタイル。観光客も地元民も入り混じって楽しい。",
      "冬の金沢は寒いけど、だからこそ熱燗が映える。治部煮とぬる燗で体の芯から温まって。",
    ],
    breweries: [
      { name: "吉田酒造（白山市）", description: "「手取川」の蔵。白山の伏流水を使った、柔らかく奥行きのある酒。" },
      { name: "菊姫（白山市）", description: "山廃仕込みにこだわる蔵。重厚で飲みごたえのある酒が多く、熟成酒も評判。" },
    ],
    color: "accent",
  },
  {
    id: "nagano",
    name: "長野県",
    regionId: "chubu",
    regionName: "中部",
    heroImageUrl:
      "https://readdy.ai/api/search-image?query=Soft%20pop%20flat%20illustration%20of%20Nagano%20Japanese%20Alps%20mountain%20landscape%20with%20clear%20blue%20sky%20and%20green%20hills%2C%20cream%20warm%20pastel%20background%2C%20editorial%20cute%20illustration%2C%20friendly%20tone%2C%20no%20text&width=1200&height=800&seq=jizake-detail-nagano-hero&orientation=landscape",
    catchCopy: "アルプスの水が育てる、きれいな酒。",
    intro: "雄大な山々の伏流水が生む、雑味のない透明感。",
    description:
      "長野は日本アルプスの雪解け水が豊富な、水に恵まれた酒どころ。真澄、大雪渓、夜明け前、ソガペールエフィス…と、個性的な銘柄が揃っている。特徴的なのはワイン文化との共存。長野はワイン産地としても有名で、日本酒蔵でもワイン酵母を使った実験的な酒をつくるなど、クロスオーバーな挑戦が面白い。",
    recommendedSakes: [
      {
        name: "真澄 純米吟醸 あらばしり",
        description: "搾りの最初に出てくる「あらばしり」だけを瓶詰めした限定酒。フレッシュで華やかな香りが魅力。",
        tasteTags: ["フレッシュ", "華やか", "限定感"],
      },
      {
        name: "夜明け前 純米吟醸",
        description: "信州・辰野の蔵。穏やかな香りと、やさしい甘み。毎日でも飲みたくなる親しみやすさ。",
        tasteTags: ["やさしい", "まろやか", "デイリー"],
      },
    ],
    foodPairings: [
      { name: "信州そば", description: "長野といえばやっぱり蕎麦。つゆのカツオ節と酒のうまみが調和する。" },
      { name: "山賊焼き", description: "信州のB級グルメ。にんにく醤油のガツンとした味が、スッキリした酒を呼ぶ。" },
      { name: "おやき", description: "野沢菜やあんこ入りの郷土おやつ。甘めの酒と合わせると、ほっこりする組み合わせ。" },
    ],
    cultureInfo:
      "長野は海のない内陸県だけど、それが逆に発酵文化を豊かにした。味噌、醤油、漬物、酒…と発酵食の宝庫で、蔵元もそうした食文化と強く結びついている。諏訪地方は特に酒蔵が多く、諏訪大社の御神酒としての歴史も。ワインとのコラボレーションも盛んで、酒蔵がワインをつくったり、逆もあったり。",
    travelTips: [
      "諏訪湖周辺には5つの酒蔵が点在。「真澄」の蔵元では、諏訪大社との歴史も感じられる見学ツアーがおすすめ。",
      "松本城を見学したあと、城下町の居酒屋で信州の地酒を。松本は水が良いから、街中の立ち飲みもレベルが高い。",
      "戸隠で蕎麦を食べたら、そのまま近くの蔵元へ。蕎麦前ならぬ「蕎麦後」の一杯も悪くない。",
    ],
    breweries: [
      { name: "宮坂醸造（諏訪市）", description: "「真澄」の蔵。300年以上の歴史を持ち、諏訪大社とも縁が深い。" },
      { name: "夜明け前（辰野町）", description: "小さな蔵ながら、丁寧な酒造りで全国にファンを持つ。" },
    ],
    color: "secondary",
  },
  {
    id: "kyoto",
    name: "京都府",
    regionId: "kansai",
    regionName: "関西",
    heroImageUrl:
      "https://readdy.ai/api/search-image?query=Soft%20pop%20flat%20illustration%20of%20Kyoto%20Fushimi%20sake%20district%20with%20traditional%20white%20wall%20storehouses%20and%20willow%20trees%20along%20canal%20under%20warm%20cream%20sky%2C%20editorial%20cute%20illustration%2C%20friendly%20tone%2C%20no%20text&width=1200&height=800&seq=jizake-detail-kyoto-hero&orientation=landscape",
    catchCopy: "伏見の名水が育てた、雅な一杯。",
    intro: "やわらかな名水がつくる、上品でまろやかな風味。",
    description:
      "京都・伏見は灘と並ぶ日本酒の二大産地。「伏見の女酒、灘の男酒」と言われるように、伏見の酒は軟水を使ったやわらかく上品な味わいが特徴。月桂冠、黄桜、玉乃光、英勲…と、全国区の蔵が軒を連ねる。伏見の酒蔵通りは散策するだけでも楽しくて、試飲できる蔵も多いから初心者にもやさしい。",
    recommendedSakes: [
      {
        name: "月桂冠 純米大吟醸 昭和蔵",
        description: "伏見の大蔵のフラッグシップ。ふくよかで上品な香りと、きめ細やかな口あたり。京都らしい雅さ。",
        tasteTags: ["上品", "まろやか", "華やか"],
      },
      {
        name: "玉乃光 純米吟醸 備前雄町",
        description: "酒米の王様「雄町」を100%使用。コクがありつつ、後味はやわらか。食事と一緒に楽しみたい。",
        tasteTags: ["コクあり", "食事に合う", "王道"],
      },
    ],
    foodPairings: [
      { name: "おばんざい", description: "京都の家庭料理。ひじきの煮物や出汁巻き卵など、やさしい味つけが伏見の酒にぴったり。" },
      { name: "湯豆腐", description: "シンプルな豆腐の味わいと、やわらかな酒の口あたりが重なる、京都らしい静かなペアリング。" },
      { name: "京漬物", description: "すぐき、千枚漬けなど発酵のうまみがつまった漬物が、酒の甘みを引き立てる。" },
    ],
    cultureInfo:
      "伏見は桃山時代から酒造りの町として栄え、江戸時代には「伏見の酒」はブランドだった。良質な地下水（伏水）に恵まれ、水運も発達していたから酒を全国に出荷できた。今も白壁の土蔵が並ぶ酒蔵通りはタイムスリップしたような雰囲気で、観光スポットとしても人気。坂本龍馬ゆかりの「寺田屋」もすぐ近く。",
    travelTips: [
      "伏見の酒蔵通りを歩いて、気になる蔵で試飲。月桂冠大倉記念館は見学＋試飲がセットでお得。",
      "黄桜の「カッパカントリー」はちょっとユニークな体験型施設。カッパのキャラクターが案内してくれる。",
      "京都市内の居酒屋で、おばんざいと伏見の酒のマリアージュを。先斗町あたりの小店がおすすめ。",
    ],
    breweries: [
      { name: "月桂冠（京都市伏見区）", description: "伏見を代表する大蔵。見学施設も充実していて、初心者でも楽しめる。" },
      { name: "黄桜（京都市伏見区）", description: "ユニークなマーケティングで知られる蔵。吟醸酒からカップ酒まで幅広い。" },
    ],
    color: "primary",
  },
  {
    id: "hiroshima",
    name: "広島県",
    regionId: "chugoku",
    regionName: "中国",
    heroImageUrl:
      "https://readdy.ai/api/search-image?query=Soft%20pop%20flat%20illustration%20of%20Hiroshima%20Saijo%20sake%20brewery%20district%20with%20white%20wall%20traditional%20storehouses%20and%20red%20brick%20chimneys%20under%20cream%20warm%20sky%2C%20editorial%20cute%20illustration%2C%20friendly%20tone%2C%20no%20text&width=1200&height=800&seq=jizake-detail-hiroshima-hero&orientation=landscape",
    catchCopy: "軟水が育む、やさしい甘口。",
    intro: "軟水で仕込む、口あたりまろやかな甘口寄り。",
    description:
      "広島の酒は全国的にも珍しい「軟水仕込み」が主流。ミネラルが少ないやわらかな水で仕込むと、発酵がゆっくり進んで、まろやかで甘みのある酒になる。賀茂鶴、酔心、白牡丹…と西条を中心に名蔵が揃っていて、酒蔵通りは「酒都・西条」と呼ばれるほど。牡蠣やお好み焼きなど広島グルメとの相性も抜群。",
    recommendedSakes: [
      {
        name: "賀茂鶴 純米吟醸",
        description: "西条の老舗蔵。軟水仕込みならではの、ふんわりやわらかい口あたり。日本酒初心者に一番おすすめしたい。",
        tasteTags: ["やわらかい", "甘め", "やさしい"],
      },
      {
        name: "酔心 純米吟醸",
        description: "広島の食卓で愛される定番。甘すぎず辛すぎず、どんな料理にも自然に寄り添うバランスの良さ。",
        tasteTags: ["バランス良し", "毎日", "万能"],
      },
    ],
    foodPairings: [
      { name: "牡蠣", description: "広島といえば牡蠣。クリーミーな味わいに、軟水のやさしい酒がとろけるように合う。" },
      { name: "お好み焼き", description: "広島風のお好み焼き。ソースの甘辛さと、まろやかでちょっと甘めの酒が驚くほどマッチ。" },
      { name: "瀬戸内の小魚", description: "小イワシやキスの天ぷら。淡白な白身を、やさしい甘みの酒が引き立てる。" },
    ],
    cultureInfo:
      "西条は「酒都」と呼ばれ、徒歩圏内に7つの酒蔵が集まっている。毎年10月に開かれる「酒まつり」は全国から日本酒ファンが集まる大イベントで、試飲し放題の賑やかな雰囲気。軟水仕込みは広島ならではの個性で、ほかの地域の硬水の酒と飲み比べると違いがよくわかる。",
    travelTips: [
      "西条の酒蔵通りは徒歩で蔵めぐりができる日本酒さんぽの聖地。気になる蔵にふらっと入って試飲してみて。",
      "広島市内の「せとうち酒場」で、牡蠣と広島酒のペアリングを。瀬戸内レモンと一緒に飲むのも爽やか。",
      "10月の「酒まつり」を狙うなら、宿は早めに予約。全国の酒ファンが集まる年に一度のお祭り。",
    ],
    breweries: [
      { name: "賀茂鶴酒造（東広島市西条）", description: "西条を代表する蔵。見学コースもあり、軟水仕込みの秘密がわかる。" },
      { name: "酔心山根本店（東広島市西条）", description: "地元で愛され続ける蔵。広島の家庭の味を支える存在。" },
    ],
    color: "secondary",
  },
  {
    id: "yamaguchi",
    name: "山口県",
    regionId: "chugoku",
    regionName: "中国",
    heroImageUrl:
      "https://readdy.ai/api/search-image?query=Soft%20pop%20flat%20illustration%20of%20Yamaguchi%20rural%20countryside%20with%20green%20hills%20and%20traditional%20Japanese%20brewery%20building%20under%20soft%20blue%20cream%20sky%2C%20editorial%20cute%20illustration%2C%20friendly%20tone%2C%20no%20text&width=1200&height=800&seq=jizake-detail-yamaguchi-hero&orientation=landscape",
    catchCopy: "革命児・獺祭のふるさと。",
    intro: "日本酒を世界に広げた、革新的な味わい。",
    description:
      "山口といえば「獺祭」。日本酒のイメージを変えた革命的な銘柄で、今や海外でも「DASSAI」の名前は日本酒の代名詞になっている。でも山口の酒は獺祭だけじゃない。「東洋美人」「雁木」「貴」など、フルーティーで華やかな吟醸酒が多く、若手蔵元の挑戦が目立つ県でもある。",
    recommendedSakes: [
      {
        name: "獺祭 純米大吟醸 磨き二割三分",
        description: "精米歩合23%の超フルーティー酒。まるでメロンのような香り。日本酒が苦手な人にこそ試してほしい。",
        tasteTags: ["フルーティー", "革命的", "プレミアム"],
      },
      {
        name: "東洋美人 純米吟醸",
        description: "美しいラベルと華やかな味わい。獺祭と並ぶ山口を代表する銘柄で、女性ファンも多い。",
        tasteTags: ["華やか", "エレガント", "贈り物に◎"],
      },
    ],
    foodPairings: [
      { name: "ふぐ刺し", description: "下関はふぐの本場。淡白な味わいに、獺祭のフルーティーさが予想外に合う。" },
      { name: "瓦そば", description: "熱した瓦の上で焼くそば。香ばしさと、華やかな酒のコントラストが面白い。" },
      { name: "岩国寿司", description: "押し寿司の一種。酢飯の酸味が、甘めの吟醸酒をすっきりさせてくれる。" },
    ],
    cultureInfo:
      "山口県は明治維新の志士を輩出した土地で、伝統を守りつつ革新を恐れない気風がある。それが酒造りにも表れていて、獺祭の旭酒造は「日本酒の常識をぶっ壊す」勢いで世界に挑戦。データを駆使した科学的な酒造りは、日本酒業界全体に衝撃を与えた。今では海外30カ国以上で飲まれている。",
    travelTips: [
      "岩国市の旭酒造（獺祭）に見学に行くなら、事前予約を忘れずに。人気すぎてすぐ埋まる。",
      "下関の唐戸市場で、ふぐ刺しと地酒のちょい飲み。市場の活気と一緒に楽しむのが通のスタイル。",
      "湯田温泉（山口市）で、温泉と地酒。中原中也ゆかりの温泉街で、文学気分の一杯を。",
    ],
    breweries: [
      { name: "旭酒造（岩国市）", description: "「獺祭」の蔵。24時間365日稼働の最新鋭酒蔵。見学は要予約。" },
      { name: "澄川酒造場（萩市）", description: "「東洋美人」の蔵。女性杜氏が手がける繊細で美しい酒。" },
    ],
    color: "primary",
  },
  {
    id: "kochi",
    name: "高知県",
    regionId: "shikoku",
    regionName: "四国",
    heroImageUrl:
      "https://readdy.ai/api/search-image?query=Soft%20pop%20flat%20illustration%20of%20Kochi%20Shimanto%20river%20clear%20stream%20and%20traditional%20wooden%20bridge%20with%20green%20mountains%20under%20cream%20blue%20sky%2C%20editorial%20cute%20illustration%2C%20friendly%20tone%2C%20no%20text&width=1200&height=800&seq=jizake-detail-kochi-hero&orientation=landscape",
    catchCopy: "宴会王国が生む、キリッと辛口。",
    intro: "宴会文化が育てた、料理に寄り添うキレのある酒。",
    description:
      "高知は「宴会王国」と呼ばれるほど酒好きの多い県。その分、酒も料理と一緒にガンガン飲めるように、キレのある辛口が主流。司牡丹、酔鯨、南、土佐鶴…と、いずれも名前だけで高知の風土を感じさせる銘柄ばかり。鰹のたたきと一緒に飲むのが、高知の定番スタイル。",
    recommendedSakes: [
      {
        name: "酔鯨 純米吟醸",
        description: "鯨が酔うほどうまい、という名前がすべてを物語る。キリッとした辛口で、魚に合わせるために生まれた酒。",
        tasteTags: ["辛口キレ", "きりっと", "魚に合う"],
      },
      {
        name: "司牡丹 純米超辛口",
        description: "高知の宴会を支える定番。超辛口だけど、ただ辛いだけじゃなくて旨みもしっかり。コスパも良い。",
        tasteTags: ["超辛口", "うまみあり", "コスパ◎"],
      },
    ],
    foodPairings: [
      { name: "鰹のたたき", description: "高知といえばこれ。にんにくと塩で食べるスタイルに、辛口の酒がビシッと決まる。" },
      { name: "うつぼの唐揚げ", description: "高知の珍味。脂ののった白身を辛口が洗い流して、次のひと口が欲しくなる。" },
      { name: "清水サバ", description: "脂がのったブランドサバ。サバのコクと辛口のキレのバトルが楽しい。" },
    ],
    cultureInfo:
      "高知の酒文化は「可杯」というユニークな飲み方に表れている。底に穴のあいた盃で、注がれたら飲み干すしかない仕組み。宴会で使われることが多く、高知人の酒好きとおもてなし精神が詰まった道具。また、ひろめ市場のような「みんなでワイワイ飲む」スタイルも高知ならではの楽しみ方。",
    travelTips: [
      "高知市の「ひろめ市場」で、鰹のたたきと地酒を。昼間からワイワイ飲める、高知の台所。",
      "日曜市をぶらついたあと、市場近くの角打ちで一杯。朝から開いてる店もあるから、旅のスタートにいい。",
      "桂浜で坂本龍馬気分になったあとは、市内の居酒屋で可杯体験。飲み干すしかないから気をつけて。",
    ],
    breweries: [
      { name: "酔鯨酒造（高知市）", description: "名前のインパクト通り、キレのある辛口が看板。高知の食卓の定番。" },
      { name: "司牡丹酒造（佐川町）", description: "超辛口のパイオニア。酒好きの高知県民を唸らせるバランス感覚。" },
    ],
    color: "secondary",
  },
  {
    id: "saga",
    name: "佐賀県",
    regionId: "kyushu",
    regionName: "九州",
    heroImageUrl:
      "https://readdy.ai/api/search-image?query=Soft%20pop%20flat%20illustration%20of%20Saga%20peaceful%20countryside%20with%20rice%20fields%20and%20traditional%20Japanese%20house%20under%20warm%20cream%20yellow%20sky%2C%20editorial%20cute%20illustration%2C%20friendly%20tone%2C%20no%20text&width=1200&height=800&seq=jizake-detail-saga-hero&orientation=landscape",
    catchCopy: "九州の新世代、フルーティー革命。",
    intro: "焼酎文化の九州で、日本酒の新たな波を起こす。",
    description:
      "九州は焼酎のイメージが強いけど、実は佐賀は日本酒のレベルがめちゃくちゃ高い。鍋島、東一、七田、光武…と、全国の日本酒ファンが唸る銘柄が揃っている。特に「鍋島」は全国新酒鑑評会で何度も金賞を受賞していて、フルーティーでジューシーな味わいが人気。ワイングラスで飲みたい酒が多い。",
    recommendedSakes: [
      {
        name: "鍋島 純米大吟醸",
        description: "佐賀が世界に誇るトップ銘柄。白桃やマスカットのような香りと、ジューシーな甘み。ワイングラスでどうぞ。",
        tasteTags: ["華やか", "ジューシー", "ワイングラスで"],
      },
      {
        name: "東一 純米吟醸",
        description: "鍋島と同じ蔵のスタンダードライン。華やかさは控えめだけど、毎日飲める親しみやすさが魅力。",
        tasteTags: ["バランス", "デイリー", "料理に合う"],
      },
    ],
    foodPairings: [
      { name: "呼子のイカ", description: "透き通るような活き作り。フルーティーな鍋島と合わせると、イカの甘みが爆発的に広がる。" },
      { name: "佐賀牛", description: "霜降りの甘みが、ジューシーな酒と重なって至福のマリアージュ。" },
      { name: "シシリアンライス", description: "佐賀のB級グルメ。甘辛い肉とマヨネーズのコクが、冷酒と意外な好相性。" },
    ],
    cultureInfo:
      "佐賀は「肥前の国」として古くから大陸文化の玄関口だった。おっとりした県民性と裏腹に、酒造りは挑戦的。「鍋島」の富久千代酒造は、小さな蔵ながら世界を目指す姿勢で、日本酒の可能性を押し広げている。佐賀空港には鍋島の試飲コーナーもあって、着いた瞬間から楽しめる。",
    travelTips: [
      "佐賀空港の到着ロビーに鍋島の試飲コーナーがある。旅の始まりに一杯。",
      "鹿島市の「富久千代酒造」に見学。鍋島の蔵はこぢんまりしているけど、世界への熱量がすごい。",
      "唐津のイカを食べるなら、事前に「呼子」まで足を伸ばすのがおすすめ。朝獲れのイカは別格。",
    ],
    breweries: [
      { name: "富久千代酒造（鹿島市）", description: "「鍋島」の蔵。小さな蔵から世界へ。常に進化し続ける挑戦者。" },
      { name: "五町田酒造（嬉野市）", description: "「東一」の蔵。鍋島の姉妹ブランドで、親しみやすいスタンダード酒が人気。" },
    ],
    color: "accent",
  },
];