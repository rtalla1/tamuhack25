module.exports = {

"[externals]/node:fs [external] (node:fs, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:fs", () => require("node:fs"));

module.exports = mod;
}}),
"[externals]/node:path [external] (node:path, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:path", () => require("node:path"));

module.exports = mod;
}}),
"[project]/node_modules/@clerk/nextjs/dist/esm/chunk-BUSYA2B4.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "__commonJS": (()=>__commonJS)
});
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod)=>function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
;
 //# sourceMappingURL=chunk-BUSYA2B4.js.map
}}),
"[project]/node_modules/@clerk/nextjs/dist/esm/runtime/node/safe-node-apis.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$chunk$2d$BUSYA2B4$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/nextjs/dist/esm/chunk-BUSYA2B4.js [ssr] (ecmascript)");
;
var require_safe_node_apis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$chunk$2d$BUSYA2B4$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["__commonJS"])({
    "src/runtime/node/safe-node-apis.js" (exports, module) {
        const { existsSync, writeFileSync, readFileSync, appendFileSync, mkdirSync, rmSync } = __turbopack_require__("[externals]/node:fs [external] (node:fs, cjs)");
        const path = __turbopack_require__("[externals]/node:path [external] (node:path, cjs)");
        const fs = {
            existsSync,
            writeFileSync,
            readFileSync,
            appendFileSync,
            mkdirSync,
            rmSync
        };
        module.exports = {
            fs,
            path
        };
    }
});
const __TURBOPACK__default__export__ = require_safe_node_apis();
 //# sourceMappingURL=safe-node-apis.js.map
}}),
"[project]/node_modules/@clerk/backend/dist/chunk-P263NW7Z.mjs [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/jwt/legacyReturn.ts
__turbopack_esm__({
    "withLegacyReturn": (()=>withLegacyReturn),
    "withLegacySyncReturn": (()=>withLegacySyncReturn)
});
function withLegacyReturn(cb) {
    return async (...args)=>{
        const { data, errors } = await cb(...args);
        if (errors) {
            throw errors[0];
        }
        return data;
    };
}
function withLegacySyncReturn(cb) {
    return (...args)=>{
        const { data, errors } = cb(...args);
        if (errors) {
            throw errors[0];
        }
        return data;
    };
}
;
 //# sourceMappingURL=chunk-P263NW7Z.mjs.map
}}),
"[project]/node_modules/@clerk/backend/dist/index.mjs [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createClerkClient": (()=>createClerkClient),
    "verifyToken": (()=>verifyToken2)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$Y4FVSTNP$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@clerk/backend/dist/chunk-Y4FVSTNP.mjs [ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$P263NW7Z$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/backend/dist/chunk-P263NW7Z.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$G4VEKB6A$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/backend/dist/chunk-G4VEKB6A.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/backend/dist/chunk-5JS2VYLU.mjs [ssr] (ecmascript)");
// src/index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$telemetry$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/telemetry.mjs [ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$Y4FVSTNP$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@clerk/backend/dist/chunk-Y4FVSTNP.mjs [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$telemetry$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/telemetry.mjs [ssr] (ecmascript) <locals>");
;
;
;
;
;
var verifyToken2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$P263NW7Z$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["withLegacyReturn"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$Y4FVSTNP$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["verifyToken"]);
function createClerkClient(options) {
    const opts = {
        ...options
    };
    const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$Y4FVSTNP$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createBackendApiClient"])(opts);
    const requestState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$Y4FVSTNP$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAuthenticateRequest"])({
        options: opts,
        apiClient
    });
    const telemetry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$telemetry$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TelemetryCollector"]({
        ...options.telemetry,
        publishableKey: opts.publishableKey,
        secretKey: opts.secretKey,
        ...opts.sdkMetadata ? {
            sdk: opts.sdkMetadata.name,
            sdkVersion: opts.sdkMetadata.version
        } : {}
    });
    return {
        ...apiClient,
        ...requestState,
        telemetry
    };
}
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/@clerk/nextjs/dist/esm/server/createClerkClient.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createClerkClientWithOptions": (()=>createClerkClientWithOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/backend/dist/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/nextjs/dist/esm/server/constants.js [ssr] (ecmascript)");
;
;
;
const clerkClientDefaultOptions = {
    secretKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["SECRET_KEY"],
    publishableKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["PUBLISHABLE_KEY"],
    apiUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["API_URL"],
    apiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["API_VERSION"],
    userAgent: `${"@clerk/nextjs"}@${"6.10.2"}`,
    proxyUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["PROXY_URL"],
    domain: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["DOMAIN"],
    isSatellite: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["IS_SATELLITE"],
    sdkMetadata: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["SDK_METADATA"],
    telemetry: {
        disabled: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["TELEMETRY_DISABLED"],
        debug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["TELEMETRY_DEBUG"]
    }
};
const createClerkClientWithOptions = (options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["createClerkClient"])({
        ...clerkClientDefaultOptions,
        ...options
    });
;
 //# sourceMappingURL=createClerkClient.js.map
}}),
"[project]/node_modules/@clerk/nextjs/dist/esm/server/keyless-node.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createOrReadKeyless": (()=>createOrReadKeyless),
    "removeKeyless": (()=>removeKeyless),
    "safeParseClerkFile": (()=>safeParseClerkFile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/nextjs/dist/esm/runtime/node/safe-node-apis.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$createClerkClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/nextjs/dist/esm/server/createClerkClient.js [ssr] (ecmascript)");
;
;
;
const CLERK_HIDDEN = ".clerk";
const CLERK_LOCK = "clerk.lock";
const throwMissingFsModule = ()=>{
    throw new Error("Clerk: fsModule.fs is missing. This is an internal error. Please contact Clerk's support.");
};
const safeNodeRuntimeFs = ()=>{
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].fs) {
        throwMissingFsModule();
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].fs;
};
const safeNodeRuntimePath = ()=>{
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].path) {
        throwMissingFsModule();
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].path;
};
function updateGitignore() {
    const { existsSync, writeFileSync, readFileSync, appendFileSync } = safeNodeRuntimeFs();
    const path = safeNodeRuntimePath();
    const gitignorePath = path.join(process.cwd(), ".gitignore");
    if (!existsSync(gitignorePath)) {
        writeFileSync(gitignorePath, "");
    }
    const gitignoreContent = readFileSync(gitignorePath, "utf-8");
    const COMMENT = `# clerk configuration (can include secrets)`;
    if (!gitignoreContent.includes(CLERK_HIDDEN + "/")) {
        appendFileSync(gitignorePath, `
${COMMENT}
/${CLERK_HIDDEN}/
`);
    }
}
const generatePath = (...slugs)=>{
    const path = safeNodeRuntimePath();
    return path.join(process.cwd(), CLERK_HIDDEN, ...slugs);
};
const _TEMP_DIR_NAME = ".tmp";
const getKeylessConfigurationPath = ()=>generatePath(_TEMP_DIR_NAME, "keyless.json");
const getKeylessReadMePath = ()=>generatePath(_TEMP_DIR_NAME, "README.md");
let isCreatingFile = false;
function safeParseClerkFile() {
    const { readFileSync } = safeNodeRuntimeFs();
    try {
        const CONFIG_PATH = getKeylessConfigurationPath();
        let fileAsString;
        try {
            fileAsString = readFileSync(CONFIG_PATH, {
                encoding: "utf-8"
            }) || "{}";
        } catch  {
            fileAsString = "{}";
        }
        return JSON.parse(fileAsString);
    } catch  {
        return void 0;
    }
}
const lockFileWriting = ()=>{
    const { writeFileSync } = safeNodeRuntimeFs();
    isCreatingFile = true;
    writeFileSync(CLERK_LOCK, // In the rare case, the file persists give the developer enough context.
    "This file can be deleted. Please delete this file and refresh your application", {
        encoding: "utf8",
        mode: "0777",
        flag: "w"
    });
};
const unlockFileWriting = ()=>{
    const { rmSync } = safeNodeRuntimeFs();
    try {
        rmSync(CLERK_LOCK, {
            force: true,
            recursive: true
        });
    } catch  {}
    isCreatingFile = false;
};
const isFileWritingLocked = ()=>{
    const { existsSync } = safeNodeRuntimeFs();
    return isCreatingFile || existsSync(CLERK_LOCK);
};
async function createOrReadKeyless() {
    const { writeFileSync, mkdirSync } = safeNodeRuntimeFs();
    if (isFileWritingLocked()) {
        return void 0;
    }
    lockFileWriting();
    const CONFIG_PATH = getKeylessConfigurationPath();
    const README_PATH = getKeylessReadMePath();
    mkdirSync(generatePath(_TEMP_DIR_NAME), {
        recursive: true
    });
    updateGitignore();
    const envVarsMap = safeParseClerkFile();
    if ((envVarsMap == null ? void 0 : envVarsMap.publishableKey) && (envVarsMap == null ? void 0 : envVarsMap.secretKey)) {
        unlockFileWriting();
        return envVarsMap;
    }
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$createClerkClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["createClerkClientWithOptions"])({});
    const accountlessApplication = await client.__experimental_accountlessApplications.createAccountlessApplication();
    writeFileSync(CONFIG_PATH, JSON.stringify(accountlessApplication), {
        encoding: "utf8",
        mode: "0777",
        flag: "w"
    });
    const README_NOTIFICATION = `
## DO NOT COMMIT
This directory is auto-generated from \`@clerk/nextjs\` because you are running in Keyless mode. Avoid committing the \`.clerk/\` directory as it includes the secret key of the unclaimed instance.
  `;
    writeFileSync(README_PATH, README_NOTIFICATION, {
        encoding: "utf8",
        mode: "0777",
        flag: "w"
    });
    unlockFileWriting();
    return accountlessApplication;
}
function removeKeyless() {
    const { rmSync } = safeNodeRuntimeFs();
    if (isFileWritingLocked()) {
        return void 0;
    }
    lockFileWriting();
    try {
        rmSync(generatePath(), {
            force: true,
            recursive: true
        });
    } catch  {}
    unlockFileWriting();
}
;
 //# sourceMappingURL=keyless-node.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__75b7fa._.js.map