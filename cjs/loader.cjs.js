'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ec7969c2.js');

/*
 Stencil Client Patch Esm v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["w-app_6.cjs",[[1,"w-app"],[1,"w-product",{"product":[16],"isAddedToList":[4,"is-added-to-list"]}],[1,"w-navbar"],[1,"w-box",{"padding":[1]}],[1,"w-btn",{"size":[1],"variant":[1],"color":[1],"fullWidth":[4,"full-width"]}],[1,"w-typography",{"variant":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
