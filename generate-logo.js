const fs = require('fs');
const font = {
  'K': ['10001','10010','10100','11000','10100','10010','10001'],
  'S': ['01111','10000','10000','01110','00001','00001','11110'],
  'r': ['00000','00000','10111','11000','10000','10000','10000'],
  'i': ['00100','00000','00100','00100','00100','00100','00100'],
  's': ['00000','00000','01111','10000','01110','00001','11110'],
  'h': ['10000','10000','10110','11001','10001','10001','10001'],
  'n': ['00000','00000','10110','11001','10001','10001','10001'],
  'a': ['00000','00000','01110','00001','01111','10001','01111']
};

function renderText(text) {
  let path = '';
  let offsetX = 0;
  for (let char of text) {
    const lines = font[char];
    if (lines) {
      for (let y = 0; y < lines.length; y++) {
        for (let x = 0; x < lines[y].length; x++) {
          if (lines[y][x] === '1') {
            const px = offsetX + x * 50;
            const py = y * 50;
            path += "M" + px + " " + py + "h50v50H" + px + "Z ";
          }
        }
      }
      offsetX += lines[0].length * 50 + 50;
    } else {
      offsetX += 150;
    }
  }
  return { path, width: offsetX - 50 };
}

const ks = renderText('KS');
const word = renderText('KrishnaSah');

const markContent = `export function KrishnaSahMark(props: React.ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 ${ks.width} 350" {...props}>
      <path fill="currentColor" d="${ks.path.trim()}" />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return \`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 ${ks.width} 350"><path fill="\${color}" d="${ks.path.trim()}"/></svg>\`;
}
`;

const wordmarkContent = `export function KrishnaSahWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${word.width} 350" fill="none" {...props}>
      <path fill="currentColor" d="${word.path.trim()}" />
    </svg>
  );
}

export function getWordmarkSVG(color: string) {
  return \`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 ${word.width} 350"><path fill="\${color}" d="${word.path.trim()}"/></svg>\`;
}
`;

fs.writeFileSync('src/components/krishnasah-mark.tsx', markContent);
fs.writeFileSync('src/components/krishnasah-wordmark.tsx', wordmarkContent);
console.log('Done!');
