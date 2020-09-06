import { Component, h, Prop } from '@stencil/core';
export class WBox {
  constructor() {
    this.padding = 'default';
  }
  render() {
    return (h("div", { class: "box", "data-padding": this.padding },
      h("slot", null)));
  }
  static get is() { return "w-box"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["w-box.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["w-box.css"]
  }; }
  static get properties() { return {
    "padding": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'default' | 'small' | 'large'",
        "resolved": "\"default\" | \"large\" | \"small\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "padding",
      "reflect": false,
      "defaultValue": "'default'"
    }
  }; }
}
