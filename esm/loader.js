import { p as promiseResolve, b as bootstrapLazy } from './index-59634674.js';

/*
 Stencil Client Patch Esm v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["w-app_6",[[1,"w-app"],[1,"w-product",{"product":[16],"isAddedToList":[4,"is-added-to-list"]}],[1,"w-navbar"],[1,"w-box",{"padding":[1]}],[1,"w-btn",{"size":[1],"variant":[1],"color":[1],"fullWidth":[4,"full-width"]}],[1,"w-typography",{"variant":[1]}]]]], options);
  });
};

export { defineCustomElements };
