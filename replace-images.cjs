const fs = require("fs");
const path = require("path");

const replacements = {
  "jizake-diagnosis-start-01": "/images/readdy/readdy-02.jpg",
  "jizake-about-illust-01": "/images/readdy/readdy-07.jpg",
  "jizake-detail-fukushima-hero": "/images/readdy/readdy-08.jpg",
  "jizake-detail-akita-hero": "/images/readdy/readdy-09.jpg",
  "jizake-detail-ishikawa-hero": "/images/readdy/readdy-12.jpg",
  "jizake-detail-kochi-hero": "/images/readdy/readdy-13.jpg",
  "jizake-detail-niigata-hero": "/images/readdy/readdy-16.jpg",
  "jizake-detail-yamagata-hero": "/images/readdy/readdy-18.jpg",
  "jizake-prefecture-fukushima-01": "/images/readdy/readdy-20.jpg",
  "jizake-prefecture-akita-01": "/images/readdy/readdy-21.jpg",
  "jizake-prefecture-hiroshima-01": "/images/readdy/readdy-22.jpg",
  "jizake-prefecture-ishikawa-01": "/images/readdy/readdy-23.jpg",
  "jizake-prefecture-niigata-01": "/images/readdy/readdy-24.jpg",
};

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return [full];
  });
}

const files = walk(path.join(__dirname, "src")).filter((file) =>
  /\.(ts|tsx|js|jsx)$/.test(file)
);

for (const file of files) {
  let text = fs.readFileSync(file, "utf8");
  let original = text;

  for (const [seq, localPath] of Object.entries(replacements)) {
    const regex = new RegExp(
      `https://readdy\\.ai/api/search-image\\?[^"'\\\`\\s)]*seq=${seq}[^"'\\\`\\s)]*`,
      "g"
    );
    text = text.replace(regex, localPath);
  }

  if (text !== original) {
    fs.writeFileSync(file, text, "utf8");
    console.log("updated:", path.relative(__dirname, file));
  }
}

console.log("done");