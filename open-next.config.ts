const config = {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      proxyExternalRequest: "fetch",
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "dummy",
    },
  },
  edgeExternals: ["node:crypto"],
  middleware: {
    external: true,
    override: {
      wrapper: "cloudflare-edge",
      converter: "edge",
      proxyExternalRequest: "fetch",
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "dummy",
    },
  },
  // Tell esbuild to treat sharp as external so it's not bundled into the worker.
  // sharp is a native Node.js addon incompatible with Cloudflare Workers.
  // Next.js includes it as an optional peer dependency for image optimization;
  // Cloudflare handles image optimization natively at the edge.
  buildOptions: {
    external: ["sharp", "@img/sharp-linux-x64", "@img/sharp-linux-arm64"],
  },
};

export default config;
