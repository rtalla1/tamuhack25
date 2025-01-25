const CHUNK_PUBLIC_PATH = "server/pages/index.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_f3412c._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__bb765d._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__cc7925._.css");
runtime.loadChunk("server/chunks/ssr/dd92d_modules_@clerk_nextjs_dist_esm_app-router_client_keyless-creator-reader_129938.js");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => \"[project]/pages/index.tsx [ssr] (ecmascript)\", INNER_DOCUMENT => \"[project]/pages/_document.tsx [ssr] (ecmascript)\", INNER_APP => \"[project]/pages/_app.tsx [ssr] (ecmascript)\" } [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
