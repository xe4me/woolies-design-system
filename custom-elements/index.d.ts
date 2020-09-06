/* WooliesxDesignSystem custom elements bundle */

import { Components, JSX } from "../types/components";

interface WApp extends Components.WApp, HTMLElement {}
export const WApp: {
  prototype: WApp;
  new (): WApp;
};

interface WBox extends Components.WBox, HTMLElement {}
export const WBox: {
  prototype: WBox;
  new (): WBox;
};

interface WBtn extends Components.WBtn, HTMLElement {}
export const WBtn: {
  prototype: WBtn;
  new (): WBtn;
};

interface WNavbar extends Components.WNavbar, HTMLElement {}
export const WNavbar: {
  prototype: WNavbar;
  new (): WNavbar;
};

interface WProduct extends Components.WProduct, HTMLElement {}
export const WProduct: {
  prototype: WProduct;
  new (): WProduct;
};

interface WTypography extends Components.WTypography, HTMLElement {}
export const WTypography: {
  prototype: WTypography;
  new (): WTypography;
};

/**
 * Utility to define all custom elements within this package using the tag name provided in the component's source. 
 * When defining each custom element, it will also check it's safe to define by:
 *
 * 1. Ensuring the "customElements" registry is available in the global context (window).
 * 2. The component tag name is not already defined.
 *
 * Use the standard [customElements.define()](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define) 
 * method instead to define custom elements individually, or to provide a different tag name.
 */
export declare const defineCustomElements: (opts?: any) => void;

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bunding, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

export { Components, JSX };

export * from '../types';
