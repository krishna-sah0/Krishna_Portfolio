const fs = require('fs');
const path = require('path');

// Patches .next/server chunks to remove require() calls for sharp.
// This must run AFTER `next build` and BEFORE `opennextjs-cloudflare build`,
// because OpenNext copies these chunks and then runs esbuild over them.
// esbuild fails to resolve the mangled sharp package name (e.g. "sharp-7e7f51627ba73241")
// because it's a native Node.js addon incompatible with Cloudflare Workers.

const chunksDir = path.join(process.cwd(), '.next', 'server', 'chunks');

if (!fs.existsSync(chunksDir)) {
  console.error('No .next/server/chunks directory found. Run `next build` first.');
  process.exit(1);
}

const sharpRequirePattern = /require\("sharp(?:-[a-zA-Z0-9]+)?"\)/g;

let totalPatched = 0;
let filesPatched = 0;

function patchDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      patchDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.js')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (sharpRequirePattern.test(content)) {
        sharpRequirePattern.lastIndex = 0;
        const matches = content.match(sharpRequirePattern) || [];
        const patched = content.replace(sharpRequirePattern, 'undefined');
        fs.writeFileSync(fullPath, patched);
        totalPatched += matches.length;
        filesPatched++;
        console.log(`Patched ${matches.length} sharp require(s) in: ${path.relative(process.cwd(), fullPath)}`);
      }
      sharpRequirePattern.lastIndex = 0;
    }
  }
}

patchDir(chunksDir);

if (filesPatched === 0) {
  console.log('No sharp require() calls found in .next/server/chunks (no changes needed).');
} else {
  console.log(`Done. Patched ${totalPatched} sharp require(s) across ${filesPatched} file(s).`);
}
