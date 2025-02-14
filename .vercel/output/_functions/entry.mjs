import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Bw8dgMPh.mjs';
import { manifest } from './manifest_B3NFoONr.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/credit.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.2.5_jiti@2.4.2_lightningcss@1.29.1_rollup@4.34.4_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/Credit.astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "a74ad0de-4dca-415d-b112-631045056f7e",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
