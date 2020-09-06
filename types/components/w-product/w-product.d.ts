import { EventEmitter } from '../../stencil-public-runtime';
import { IProduct } from './w-product.interface';
export declare class WProduct {
  product: IProduct;
  isAddedToList: boolean;
  addToCard: EventEmitter<IProduct>;
  addToList: EventEmitter<IProduct>;
  removeFromList: EventEmitter<IProduct>;
  addToCardHandler(product: IProduct): void;
  addToListHandler(product: IProduct): void;
  removeFromListHandler(product: IProduct): void;
  render(): any;
}
