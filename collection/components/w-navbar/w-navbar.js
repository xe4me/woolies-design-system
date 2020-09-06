import { Component, h } from '@stencil/core';
export class WNavbar {
  render() {
    return (h("header", { class: "navbar" },
      h("slot", null)));
  }
  static get is() { return "w-navbar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["w-navbar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["w-navbar.css"]
  }; }
}
