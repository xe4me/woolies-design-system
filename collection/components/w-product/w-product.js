import { Component, Event, h, Prop } from '@stencil/core';
export class WProduct {
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
    return (h("div", { class: "product" },
      h("w-box", { padding: 'default' },
        h("div", { class: "product__content" },
          h("div", { class: "product__image-content" },
            h("img", { class: "product__image", src: (_a = this.product) === null || _a === void 0 ? void 0 : _a.image, alt: "product image" })),
          h("div", { class: "product__details" },
            h("div", { class: "product__title" },
              h("w-typography", { variant: "h2" }, (_b = this.product) === null || _b === void 0 ? void 0 : _b.title)),
            h("div", { class: "product__description" }, (_c = this.product) === null || _c === void 0 ? void 0 : _c.description),
            h("div", { class: "product__actions" },
              h("w-btn", { variant: 'contained', "full-width": true, color: 'primary', size: 'large', onClick: () => this.addToCardHandler(this.product) }, "ADD TO CARD"),
              this.isAddedToList && h("w-btn", { variant: 'text', color: 'secondary', size: 'large', "full-width": true, onClick: () => this.removeFromListHandler(this.product) }, "REMOVE FROM SHOPPING LIST"),
              !this.isAddedToList && h("w-btn", { variant: 'text', color: 'default', size: 'large', "full-width": true, onClick: () => this.addToListHandler(this.product) }, "ADD TO SHOPPING LIST")))))));
  }
  static get is() { return "w-product"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["w-product.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["w-product.css"]
  }; }
  static get properties() { return {
    "product": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "IProduct",
        "resolved": "IProduct",
        "references": {
          "IProduct": {
            "location": "import",
            "path": "./w-product.interface"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "isAddedToList": {
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
      "attribute": "is-added-to-list",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "addToCard",
      "name": "addToCard",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "IProduct",
        "resolved": "IProduct",
        "references": {
          "IProduct": {
            "location": "import",
            "path": "./w-product.interface"
          }
        }
      }
    }, {
      "method": "addToList",
      "name": "addToList",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "IProduct",
        "resolved": "IProduct",
        "references": {
          "IProduct": {
            "location": "import",
            "path": "./w-product.interface"
          }
        }
      }
    }, {
      "method": "removeFromList",
      "name": "removeFromList",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "IProduct",
        "resolved": "IProduct",
        "references": {
          "IProduct": {
            "location": "import",
            "path": "./w-product.interface"
          }
        }
      }
    }]; }
}
