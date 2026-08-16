const fs = require('fs');
const path = require('path');

const file = path.join(process.cwd(), '.open-next/server-functions/default/handler.mjs');
if (fs.existsSync(file)) {
  let content = fs.readFileSync(file, 'utf8');

  // Patch 1: Remove dynamic require() for middleware manifest
  content = content.replace(
    'getMiddlewareManifest(){return this.minimalMode?null:require(this.middlewareManifestPath)}',
    'getMiddlewareManifest(){return this.minimalMode?null:{ middleware: {}, sortedMiddleware: [], functions: {}, version: 3 }}'
  );

  // Patch 2: Remove all dynamic require() calls for sharp (transitive Next.js dep, incompatible with Cloudflare Workers)
  const sharpRequirePattern = /require\("sharp(?:-[a-f0-9]+)?"\)/g;
  const beforePatch2 = content.length;
  content = content.replace(sharpRequirePattern, 'undefined');
  const patchCount = (beforePatch2 !== content.length) ? 'patched' : 'not found (no changes needed)';
  console.log(`Sharp require() patch: ${patchCount}`);

  fs.writeFileSync(file, content);
  console.log('Patched middleware-manifest dynamic require in handler.mjs!');
} else {
  console.error('File not found:', file);
}
