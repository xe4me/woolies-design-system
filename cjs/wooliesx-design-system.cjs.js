'use strict';

const index = require('./index-ec7969c2.js');

/*
 Stencil Client Patch Browser v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('wooliesx-design-system.cjs.js', document.baseURI).href));
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["w-app_6.cjs",[[1,"w-app"],[1,"w-product",{"product":[16],"isAddedToList":[4,"is-added-to-list"]}],[1,"w-navbar"],[1,"w-box",{"padding":[1]}],[1,"w-btn",{"size":[1],"variant":[1],"color":[1],"fullWidth":[4,"full-width"]}],[1,"w-typography",{"variant":[1]}]]]], options);
});
