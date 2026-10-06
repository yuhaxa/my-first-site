const fs = require('fs');
const img = fs.readFileSync('./public/cat.jpg');
const base64 = img.toString('base64');
const svg = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="star-clip">
      <path d="M 50 2 Q 53 2 55 8 L 63 28 L 88 32 Q 93 33 91 38 L 74 56 L 79 82 Q 80 87 75 85 L 50 73 L 25 85 Q 20 87 21 82 L 26 56 L 9 38 Q 7 33 12 32 L 37 28 L 45 8 Q 47 2 50 2 Z" />
    </clipPath>
  </defs>
  <image href="data:image/jpeg;base64,${base64}" x="0" y="0" width="100" height="100" preserveAspectRatio="xMidYMid slice" clip-path="url(#star-clip)" />
  <path d="M 50 2 Q 53 2 55 8 L 63 28 L 88 32 Q 93 33 91 38 L 74 56 L 79 82 Q 80 87 75 85 L 50 73 L 25 85 Q 20 87 21 82 L 26 56 L 9 38 Q 7 33 12 32 L 37 28 L 45 8 Q 47 2 50 2 Z" stroke="#AD2953" stroke-width="4" fill="none" />
</svg>`;
fs.writeFileSync('./src/app/icon.svg', svg);
