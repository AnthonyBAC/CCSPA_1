import { c as createComponent, r as renderTemplate, b as renderHead, d as renderSlot, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_Bn4qGSoX.mjs';
/* empty css                                 */
/* empty css                                  */
import { $ as $$Footer } from '../chunks/Footer_0XnLsvcZ.mjs';
export { renderers } from '../renderers.mjs';

const $$LayoutCredit = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es" data-astro-cid-6r6ls5qg> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="description" content="CentralClima SPA"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>CentralClima SPA</title>${renderHead()}</head> <body data-astro-cid-6r6ls5qg> <main data-astro-cid-6r6ls5qg> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/home/anthony/CCSPA_1_1/src/layouts/LayoutCredit.astro", undefined);

const $$CreditTo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-linear-to-t from-[#f8f9fa] via-[#e9ecef] to-[#dce6f1] h-screen flex flex-col"> <nav class="w-full lg:h-[100px] h-[250px] p-[40px] flex bg-gray-900 text-neutral-content justify-center items-center"> <div class="w-[1440px] flex justify-start ritems-center"> <a href="/">Volver</a> </div> </nav> <div class="h-screen flex flex-col justify-start items-center max-w-[1200px] mx-auto p-10"> <h2>Creditos</h2> <div class="flex flex-col"> <div class="flex flex-col gap-5"> <h3>Iconos</h3> <div> <h4 class="text-1xl font-extrabold">Free Whatsapp Logo Icon</h4> <p>
Item ID: 721985 <a href="https://iconscout.com/free-icon-pack/social-media-50" class="underline">Social Media Icon Pack in Logos</a> ,<a href="https://iconscout.com/categories/social-media/icons" class="underline">Social Media</a> Category Available in <a href="https://iconscout.com/icon-styles/flat" class="underline">Flat Icon Style</a> </p> </div> </div> </div> </div> ${renderComponent($$result, "Footer", $$Footer, {})} </header>`;
}, "/home/anthony/CCSPA_1_1/src/components/CreditTo.astro", undefined);

const $$Credit = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutCredit", $$LayoutCredit, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CreditTo", $$CreditTo, {})} ` })}`;
}, "/home/anthony/CCSPA_1_1/src/pages/Credit.astro", undefined);

const $$file = "/home/anthony/CCSPA_1_1/src/pages/Credit.astro";
const $$url = "/Credit";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Credit,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
