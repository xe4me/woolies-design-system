/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IProduct } from "./components/w-product/w-product.interface";
import { TypographyVariant } from "./components/w-typography/w-typography";
export namespace Components {
    interface WApp {
    }
    interface WBox {
        "padding": 'default' | 'small' | 'large';
    }
    interface WBtn {
        "color": 'primary' | 'secondary' | 'default';
        "fullWidth": boolean;
        "size": 'small' | 'medium' | 'large';
        "variant": 'text' | 'contained' | 'outlined';
    }
    interface WHeader {
    }
    interface WProduct {
        "product": IProduct;
    }
    interface WTypography {
        "variant": TypographyVariant;
    }
}
declare global {
    interface HTMLWAppElement extends Components.WApp, HTMLStencilElement {
    }
    var HTMLWAppElement: {
        prototype: HTMLWAppElement;
        new (): HTMLWAppElement;
    };
    interface HTMLWBoxElement extends Components.WBox, HTMLStencilElement {
    }
    var HTMLWBoxElement: {
        prototype: HTMLWBoxElement;
        new (): HTMLWBoxElement;
    };
    interface HTMLWBtnElement extends Components.WBtn, HTMLStencilElement {
    }
    var HTMLWBtnElement: {
        prototype: HTMLWBtnElement;
        new (): HTMLWBtnElement;
    };
    interface HTMLWHeaderElement extends Components.WHeader, HTMLStencilElement {
    }
    var HTMLWHeaderElement: {
        prototype: HTMLWHeaderElement;
        new (): HTMLWHeaderElement;
    };
    interface HTMLWProductElement extends Components.WProduct, HTMLStencilElement {
    }
    var HTMLWProductElement: {
        prototype: HTMLWProductElement;
        new (): HTMLWProductElement;
    };
    interface HTMLWTypographyElement extends Components.WTypography, HTMLStencilElement {
    }
    var HTMLWTypographyElement: {
        prototype: HTMLWTypographyElement;
        new (): HTMLWTypographyElement;
    };
    interface HTMLElementTagNameMap {
        "w-app": HTMLWAppElement;
        "w-box": HTMLWBoxElement;
        "w-btn": HTMLWBtnElement;
        "w-header": HTMLWHeaderElement;
        "w-product": HTMLWProductElement;
        "w-typography": HTMLWTypographyElement;
    }
}
declare namespace LocalJSX {
    interface WApp {
    }
    interface WBox {
        "padding"?: 'default' | 'small' | 'large';
    }
    interface WBtn {
        "color"?: 'primary' | 'secondary' | 'default';
        "fullWidth"?: boolean;
        "size"?: 'small' | 'medium' | 'large';
        "variant"?: 'text' | 'contained' | 'outlined';
    }
    interface WHeader {
    }
    interface WProduct {
        "onAddToCard"?: (event: CustomEvent<IProduct>) => void;
        "onAddToList"?: (event: CustomEvent<IProduct>) => void;
        "product"?: IProduct;
    }
    interface WTypography {
        "variant"?: TypographyVariant;
    }
    interface IntrinsicElements {
        "w-app": WApp;
        "w-box": WBox;
        "w-btn": WBtn;
        "w-header": WHeader;
        "w-product": WProduct;
        "w-typography": WTypography;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "w-app": LocalJSX.WApp & JSXBase.HTMLAttributes<HTMLWAppElement>;
            "w-box": LocalJSX.WBox & JSXBase.HTMLAttributes<HTMLWBoxElement>;
            "w-btn": LocalJSX.WBtn & JSXBase.HTMLAttributes<HTMLWBtnElement>;
            "w-header": LocalJSX.WHeader & JSXBase.HTMLAttributes<HTMLWHeaderElement>;
            "w-product": LocalJSX.WProduct & JSXBase.HTMLAttributes<HTMLWProductElement>;
            "w-typography": LocalJSX.WTypography & JSXBase.HTMLAttributes<HTMLWTypographyElement>;
        }
    }
}