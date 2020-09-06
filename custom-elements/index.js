import { attachShadow, h, createEvent, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath } from '@stencil/core/internal/client';

const wAppCss = ".main{padding:0 calc(var(--spacing) * 2)}@media (max-width: 375px){.main{padding:0 calc(var(--spacing))}}.main__list{display:block;margin-top:var(--spacing)}.main__title{display:block;margin-top:calc(var(--spacing) * 2)}";

const WApp = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.product = {
      id: "3h2g4jh2323232323423jh4g",
      image: 'https://img.zcdn.com.au/lf/50/hash/35461/18622416/4/Spiegelau%2BAuthentis%2BCrystal%2BBurgundy%2BGlasses.jpg',
      price: '60 AUD',
      title: 'Spiegelau Authentis Crystal Burgundy Glasses (Set of 4)',
      description: `The use of wine tasting descriptors allows the taster to qualitatively relate the aromas and flavors that the taster experiences and can be used in assessing the overall quality of wine. Wine writers differentiate wine tasters from casual enthusiasts; tasters attempt to give an objective description of the wine's taste (often taking a systematic approach to tasting), casual enthusiasts appreciate wine but pause their examination sooner than tasters.`,
    };
  }
  render() {
    return (h("div", null, h("w-navbar", null, "WooliesX"), h("main", { class: "main" }, h("w-box", null, h("w-product", { product: this.product })))));
  }
  static get style() { return wAppCss; }
};

const wBoxCss = ":host .box[data-padding=default]{padding:var(--spacing)}@media (max-width: 375px){:host .box[data-padding=default]{padding:var(--spacing-small)}}";

const WBox = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.padding = 'default';
  }
  render() {
    return (h("div", { class: "box", "data-padding": this.padding }, h("slot", null)));
  }
  static get style() { return wBoxCss; }
};

const wBtnCss = ":host .btn{background-color:unset;box-shadow:none;cursor:pointer;color:var(--color-negative);border-radius:var(--radius-small);display:flex;font-size:0.9rem;font-weight:500;justify-content:center;align-items:center;text-align:center;border:none;transition:var(--transition-fast) all ease-in-out;}:host .btn[data-full-width]{width:100%}:host .btn[data-size=small]{padding:calc(var(--spacing-small) / 3) calc(var(--spacing-small))}:host .btn[data-size=medium]{padding:calc(var(--spacing-small) / 2) var(--spacing-small);font-size:1rem}:host .btn[data-size=large]{padding:calc(var(--spacing-small)) var(--spacing);font-size:1.1rem}:host .btn[data-variant=text][data-color=default]{color:var(--color-default)}:host .btn[data-variant=text][data-color=default]:hover{color:var(--color-default-dark)}:host .btn[data-variant=text][data-color=primary]{color:var(--color-primary)}:host .btn[data-variant=text][data-color=primary]:hover{color:var(--color-primary-dark)}:host .btn[data-variant=text][data-color=secondary]{color:var(--color-secondary)}:host .btn[data-variant=text][data-color=secondary]:hover{color:var(--color-secondary-dark)}:host .btn[data-variant=contained]{box-shadow:var(--shaddow-medium)}:host .btn[data-variant=contained][data-color=default]{background-color:var(--color-default)}:host .btn[data-variant=contained][data-color=default]:hover{background-color:var(--color-default-dark)}:host .btn[data-variant=contained][data-color=primary]{background-color:var(--color-primary)}:host .btn[data-variant=contained][data-color=primary]:hover{background-color:var(--color-primary-dark)}:host .btn[data-variant=contained][data-color=secondary]{background-color:var(--color-secondary)}:host .btn[data-variant=contained][data-color=secondary]:hover{background-color:var(--color-secondary-dark)}:host .btn[data-variant=outlined][data-color=default]{border:1px solid var(--color-default);color:var(--color-default)}:host .btn[data-variant=outlined][data-color=default]:hover{border-color:var(--color-default-dark)}:host .btn[data-variant=outlined][data-color=primary]{border:1px solid var(--color-primary);color:var(--color-primary)}:host .btn[data-variant=outlined][data-color=primary]:hover{border-color:var(--color-primary-dark)}:host .btn[data-variant=outlined][data-color=secondary]{border:1px solid var(--color-secondary);color:var(--color-secondary)}:host .btn[data-variant=outlined][data-color=secondary]:hover{border-color:var(--color-secondary-dark)}";

const WBtn = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.size = 'medium';
    this.variant = 'text';
    this.color = 'default';
    this.fullWidth = false;
  }
  render() {
    return (h("button", { class: "btn", "data-full-width": this.fullWidth, "data-size": this.size, "data-variant": this.variant, "data-color": this.color }, h("slot", null)));
  }
  static get style() { return wBtnCss; }
};

const wNavbarCss = ":host .navbar{background:var(--gradient-secondary);color:white;height:56px;display:flex;align-items:center;box-shadow:var(--shaddow-medium);padding:0 var(--spacing)}";

const WNavbar = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h("header", { class: "navbar" }, h("slot", null)));
  }
  static get style() { return wNavbarCss; }
};

const wProductCss = ":host{flex:1}:host .product{box-shadow:var(--shaddow-large);border-radius:var(--radius-large);background-color:var(--color-negative);display:flex;flex-direction:column;overflow:hidden;position:relative}:host .product__actions{margin-top:var(--spacing);width:100%}:host .product__content{display:flex;flex-direction:row;align-items:center;}:host .product__content>*{width:50%}@media (max-width: 767px){:host .product__content{flex-direction:column}:host .product__content>*{width:100%}:host .product__content>*:nth-child(2){margin-top:var(--spacing)}}:host .product__description{margin-top:var(--spacing)}:host .product__details{display:flex;flex:1;justify-content:space-between;flex-direction:column;font-weight:400;line-height:1.43;letter-spacing:0.01em;align-items:flex-start}:host .product__image{overflow:hidden;height:100%;width:100%}";

const WProduct = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.addToCard = createEvent(this, "addToCard", 7);
    this.addToList = createEvent(this, "addToList", 7);
    this.removeFromList = createEvent(this, "removeFromList", 7);
  }
  addToCardHandler(product) {
    this.addToCard.emit(product);
  }
  addToListHandler(product) {
    this.addToList.emit(product);
  }
  removeFromListHandler(product) {
    this.removeFromList.emit(product);
  }
  render() {
    var _a, _b, _c;
    return (h("div", { class: "product" }, h("w-box", { padding: 'default' }, h("div", { class: "product__content" }, h("div", { class: "product__image-content" }, h("img", { class: "product__image", src: (_a = this.product) === null || _a === void 0 ? void 0 : _a.image, alt: "product image" })), h("div", { class: "product__details" }, h("div", { class: "product__title" }, h("w-typography", { variant: "h2" }, (_b = this.product) === null || _b === void 0 ? void 0 : _b.title)), h("div", { class: "product__description" }, (_c = this.product) === null || _c === void 0 ? void 0 : _c.description), h("div", { class: "product__actions" }, h("w-btn", { variant: 'contained', "full-width": true, color: 'primary', size: 'large', onClick: () => this.addToCardHandler(this.product) }, "ADD TO CARD"), this.isAddedToList && h("w-btn", { variant: 'text', color: 'secondary', size: 'large', "full-width": true, onClick: () => this.removeFromListHandler(this.product) }, "REMOVE FROM SHOPPING LIST"), !this.isAddedToList && h("w-btn", { variant: 'text', color: 'default', size: 'large', "full-width": true, onClick: () => this.addToListHandler(this.product) }, "ADD TO SHOPPING LIST")))))));
  }
  static get style() { return wProductCss; }
};

const wTypographyCss = ":host>*{margin:0;padding:0;line-height:1}";

const WTypography = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    /*
    * @Prop {TypographyVariant} variant - This is how we can dynamically change the structure of the DOM
    * */
    this.variant = 'h1';
  }
  render() {
    const El = this.variant;
    return h(El, null, h("slot", null));
  }
  get host() { return this; }
  static get style() { return wTypographyCss; }
};

const WApp$1 = /*@__PURE__*/proxyCustomElement(WApp, [1,"w-app"]);
const WBox$1 = /*@__PURE__*/proxyCustomElement(WBox, [1,"w-box",{"padding":[1]}]);
const WBtn$1 = /*@__PURE__*/proxyCustomElement(WBtn, [1,"w-btn",{"size":[1],"variant":[1],"color":[1],"fullWidth":[4,"full-width"]}]);
const WNavbar$1 = /*@__PURE__*/proxyCustomElement(WNavbar, [1,"w-navbar"]);
const WProduct$1 = /*@__PURE__*/proxyCustomElement(WProduct, [1,"w-product",{"product":[16],"isAddedToList":[4,"is-added-to-list"]}]);
const WTypography$1 = /*@__PURE__*/proxyCustomElement(WTypography, [1,"w-typography",{"variant":[1]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      WApp$1,
  WBox$1,
  WBtn$1,
  WNavbar$1,
  WProduct$1,
  WTypography$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { WApp$1 as WApp, WBox$1 as WBox, WBtn$1 as WBtn, WNavbar$1 as WNavbar, WProduct$1 as WProduct, WTypography$1 as WTypography, defineCustomElements };
