const fs = require('fs');
const path = require('path');

const file = path.join(process.cwd(), '.open-next/server-functions/default/handler.mjs');
if (fs.existsSync(file)) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    'getMiddlewareManifest(){return this.minimalMode?null:require(this.middlewareManifestPath)}',
    'getMiddlewareManifest(){return this.minimalMode?null:{ middleware: {}, sortedMiddleware: [], functions: {}, version: 3 }}'
  );
  fs.writeFileSync(file, content);
  console.log('Patched middleware-manifest dynamic require in handler.mjs!');
} else {
  console.error('File not found:', file);
}
