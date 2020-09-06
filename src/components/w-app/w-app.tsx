import {Component, h} from '@stencil/core';
import {IProduct} from '@Components/w-product/w-product.interface';

@Component({
  tag: 'w-app',
  styleUrl: 'w-app.scss',
  shadow: true
})
export class WApp {
  public product: IProduct = {
    id: "3h2g4jh2323232323423jh4g",
    image: 'https://img.zcdn.com.au/lf/50/hash/35461/18622416/4/Spiegelau%2BAuthentis%2BCrystal%2BBurgundy%2BGlasses.jpg',
    price: '60 AUD',
    title: 'Spiegelau Authentis Crystal Burgundy Glasses (Set of 4)',
    description: `The use of wine tasting descriptors allows the taster to qualitatively relate the aromas and flavors that the taster experiences and can be used in assessing the overall quality of wine. Wine writers differentiate wine tasters from casual enthusiasts; tasters attempt to give an objective description of the wine's taste (often taking a systematic approach to tasting), casual enthusiasts appreciate wine but pause their examination sooner than tasters.`,
  }

  render() {
    return (
      <div>
        <w-header>WooliesX</w-header>
        <main class="main">
          <w-box>
            <w-product product={this.product}/>
          </w-box>
        </main>
      </div>
    );
  }
}
