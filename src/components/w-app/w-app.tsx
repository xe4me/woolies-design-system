import {Component, h} from '@stencil/core';
import {ICard} from '../w-card/w-card.interface';

@Component({
  tag: 'w-app',
  styleUrl: 'w-app.scss',
  shadow: true
})
export class WApp {
  public cards: ICard[] = [
    {
      id: "3h2g4jh2323232323423jh4g",
      image: 'https://cdn0.woolworths.media/content/new-homepage/offertile-special-meat-b2c.jpg',
      price: '2.2 AUD',
      description: 'Lamb Leg Steak',
      title: 'Meat',
    },
    {
      id: "5656g4jh23g4jh2g3423jh4g",
      image: 'https://cdn0.woolworths.media/content/new-homepage/wk37-offertile-special-lent-all-groups.png',
      price: '1.3 AUD',
      description: 'Large Green Banana',
      title: 'Lent',
    },
    {
      id: "dfsdf34jh23g4jh2g3423jh4g",
      image: 'https://cdn0.woolworths.media/content/new-homepage/offertile-special-fruit-veg-avocado-shepard.jpg',
      price: '43.2 AUD',
      description: 'Avocado Shepard',
      title: 'Avocado',
    }
  ];
  public specialCards: ICard[] = [
    {
      id: "3h2g4jh2323232323423jh4g",
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/134034.jpg',
      price: '12.2 AUD',
      description: 'Lamb Leg Steak',
      title: 'Fresh Tomator',
    },
    {
      id: "5656g4jh23g4jh2g3423jh4g",
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138801.jpg',
      price: '2.3 AUD',
      description: 'Seedless Grapes',
      title: 'Grapes',
    },
    {
      id: "dfsdf34jh23g4jh2g3423jh4g",
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/133211.jpg',
      price: '4.2 AUD',
      description: 'Cavendish Banana',
      title: 'Banana',
    }
  ];

  render() {
    return (
      <div>
        <w-header>WooliesX</w-header>
        <main class="main">
          <w-typography class="main__title" variant="h1">Check out the latest from WooliesX</w-typography>
          <w-card-list cards={this.cards} class="main__list"/>
        </main>
      </div>
    );
  }
}
