// esbuild.config.js
const { build } = require('esbuild');

build({
  entryPoints: ['server.js'],
  bundle: true,
  platform: 'node',
  outfile: 'dist/server.js',
}).catch(() => process.exit(1));
