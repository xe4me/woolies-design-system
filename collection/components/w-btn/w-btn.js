import { Component, h, Prop } from '@stencil/core';
export class WBtn {
  constructor() {
    this.size = 'medium';
    this.variant = 'text';
    this.color = 'default';
    this.fullWidth = false;
  }
  render() {
    return (h("button", { class: "btn", "data-full-width": this.fullWidth, "data-size": this.size, "data-variant": this.variant, "data-color": this.color },
      h("slot", null)));
  }
  static get is() { return "w-btn"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["w-btn.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["w-btn.css"]
  }; }
  static get properties() { return {
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'small' | 'medium' | 'large'",
        "resolved": "\"large\" | \"medium\" | \"small\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'medium'"
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'text' | 'contained' | 'outlined'",
        "resolved": "\"contained\" | \"outlined\" | \"text\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "'text'"
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'primary' | 'secondary' | 'default'",
        "resolved": "\"default\" | \"primary\" | \"secondary\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "color",
      "reflect": false,
      "defaultValue": "'default'"
    },
    "fullWidth": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "full-width",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
