import { Component, Element, h, Prop } from '@stencil/core';
export class WTypography {
  constructor() {
    /*
    * @Prop {TypographyVariant} variant - This is how we can dynamically change the structure of the DOM
    * */
    this.variant = 'h1';
  }
  render() {
    const El = this.variant;
    return h(El, null,
      h("slot", null));
  }
  static get is() { return "w-typography"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["w-typography.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["w-typography.css"]
  }; }
  static get properties() { return {
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TypographyVariant",
        "resolved": "\"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"h6\"",
        "references": {
          "TypographyVariant": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "'h1'"
    }
  }; }
  static get elementRef() { return "host"; }
}
