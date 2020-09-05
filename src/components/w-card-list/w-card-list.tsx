import {Component, h, Listen, Prop} from '@stencil/core';
import {ICard} from '../w-card/w-card.interface';

@Component({
  tag: 'w-card-list',
  styleUrl: 'w-card-list.scss',
  shadow: true
})
export class WCardList {
  @Prop() cards: ICard[];

  @Listen('addToList')
  onClickHandler($event: CustomEvent<ICard>) {
    alert(JSON.stringify($event.detail))
  }

  render() {
    return (
      <div class="card-list">
        {this.cards.map(card => <w-card key={card.id} class="card-list__card" card={card}/>)}
      </div>
    );
  }
}
