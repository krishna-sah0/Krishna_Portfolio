const fs = require('fs');

const font3x5 = {
  'K': ['101','110','110','101','101'],
  'r': ['000','110','100','100','100'],
  'i': ['010','000','010','010','010'],
  's': ['000','011','100','001','110'], // better s
  'h': ['100','100','110','101','101'],
  'n': ['000','110','101','101','101'],
  'a': ['000','011','101','111','101'],
  'S': ['011','100','010','001','110'],
  ' ': ['000','000','000','000','000']
}

const text = "Krishna Sah";
let path = "";
const scale = 50;
let cursorX = 0;

for (let i = 0; i < text.length; i++) {
  const char = text[i];
  const glyph = font3x5[char];
  if (!glyph) {
     cursorX += 4 * scale;
     continue;
  }
  
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 3; x++) {
      if (glyph[y][x] === '1') {
        const px = cursorX + x * scale;
        const py = y * scale;
        path += "M" + px + " " + py + "h" + scale + "v" + scale + "H" + px + "Z ";
      }
    }
  }
  cursorX += 4 * scale;
}

console.log(path);
console.log("Width needed: ", cursorX);
