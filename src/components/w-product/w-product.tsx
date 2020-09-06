import {Component, Event, EventEmitter, h, Prop} from '@stencil/core';
import {IProduct} from './w-product.interface';

@Component({
  tag: 'w-product',
  styleUrl: 'w-product.scss',
  shadow: true
})
export class WProduct {
  @Prop() product: IProduct;
  @Prop() isAddedToList: boolean;

  @Event() addToCard: EventEmitter<IProduct>;
  @Event() addToList: EventEmitter<IProduct>;
  @Event() removeFromList: EventEmitter<IProduct>;

  public addToCardHandler(product: IProduct) {
    this.addToCard.emit(product);
  }

  public addToListHandler(product: IProduct) {
    this.addToList.emit(product);
  }

  public removeFromListHandler(product: IProduct) {
    this.removeFromList.emit(product);
  }

  render() {
    return (
      <div class="product">
        <w-box padding={'default'}>
          <div class="product__content">
            <div class="product__image-content">
              <img class="product__image" src={this.product?.image} alt="product image"/>
            </div>
            <div class="product__details">
              <div class="product__title">
                <w-typography variant="h2">{this.product?.title}</w-typography>
              </div>
              <div class="product__description">
                {this.product?.description}
              </div>
              <div class="product__actions">
                <w-btn variant={'contained'}
                       full-width={true}
                       color={'primary'}
                       size={'large'}
                       onClick={() => this.addToCardHandler(this.product)}>ADD TO CARD
                </w-btn>
                {this.isAddedToList && <w-btn variant={'text'}
                                              color={'secondary'}
                                              size={'large'}
                                              full-width={true}
                                              onClick={() => this.removeFromListHandler(this.product)}>
                  REMOVE FROM SHOPPING LIST
                </w-btn>}
                {!this.isAddedToList && <w-btn variant={'text'}
                                               color={'default'}
                                               size={'large'}
                                               full-width={true}
                                               onClick={() => this.addToListHandler(this.product)}>
                  ADD TO SHOPPING LIST
                </w-btn>}
              </div>
            </div>
          </div>
        </w-box>
      </div>
    );
  }
}
