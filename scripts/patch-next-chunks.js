const fs = require('fs');
const path = require('path');

// Patches .next/server files to remove require() calls for sharp.
// Must run AFTER `next build` and BEFORE `opennextjs-cloudflare build`.
//
// Why: sharp is a native Node.js addon (C++ binary) that is an optional
// transitive dependency of `next` for local image optimization.
// Cloudflare Workers cannot run native addons, and esbuild fails when
// it tries to bundle the mangled sharp package name at build time.
//
// We search all of .next/server/ (not just chunks/) to catch all output
// formats (webpack chunks, Turbopack chunks, route handlers, etc).

const serverDir = path.join(process.cwd(), '.next', 'server');

if (!fs.existsSync(serverDir)) {
  console.error('No .next/server directory found. Run `next build` first.');
  process.exit(1);
}

// Matches all variants:
//   require("sharp")
//   require('sharp')
//   require("sharp-7e7f51627ba73241")
//   require('sharp-7e7f51627ba73241')
const sharpRequirePattern = /require\(["']sharp(?:-[a-zA-Z0-9]+)?["']\)/g;

let totalPatched = 0;
let filesPatched = 0;
let filesScanned = 0;

function patchDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      patchDir(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.js') || entry.name.endsWith('.mjs'))) {
      filesScanned++;
      const content = fs.readFileSync(fullPath, 'utf8');
      if (sharpRequirePattern.test(content)) {
        sharpRequirePattern.lastIndex = 0;
        const matches = content.match(sharpRequirePattern) || [];
        const patched = content.replace(sharpRequirePattern, 'undefined');
        fs.writeFileSync(fullPath, patched);
        totalPatched += matches.length;
        filesPatched++;
        console.log(`  [patched] ${path.relative(process.cwd(), fullPath)} (${matches.length} require(s) removed)`);
      }
      sharpRequirePattern.lastIndex = 0;
    }
  }
}

console.log(`Scanning ${serverDir} for sharp require() calls...`);
patchDir(serverDir);

if (filesPatched === 0) {
  console.log(`Scanned ${filesScanned} files. No sharp require() calls found (no changes needed).`);
} else {
  console.log(`Done. Patched ${totalPatched} sharp require(s) across ${filesPatched} file(s) (scanned ${filesScanned} total).`);
}
