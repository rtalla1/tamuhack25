const CHUNK_PUBLIC_PATH = "server/pages/_app.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_0ef1f5._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__f2d521._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__cc7925._.css");
runtime.loadChunk("server/chunks/ssr/dd92d_modules_@clerk_nextjs_dist_esm_app-router_client_keyless-creator-reader_cdcf5c.js");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/pages/_app.tsx [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
