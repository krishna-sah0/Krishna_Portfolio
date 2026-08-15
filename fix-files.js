const fs = require('fs');
const files = [
  'src/features/profile/components/brand.tsx',
  'src/components/brand-context-menu.tsx',
  'src/components/command-menu.tsx',
  'src/components/site-header-mark.tsx'
];
files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lastBraceIndex = content.lastIndexOf('}');
  if (lastBraceIndex !== -1) {
    fs.writeFileSync(file, content.substring(0, lastBraceIndex + 1) + '\n', 'utf8');
  }
});
console.log('Fixed files');
