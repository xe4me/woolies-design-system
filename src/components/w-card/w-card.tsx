import {Component, Event, EventEmitter, h, Prop} from '@stencil/core';
import {ICard} from './w-card.interface';

@Component({
  tag: 'w-card',
  styleUrl: 'w-card.scss',
  shadow: true
})
export class WCard {
  @Prop() card: ICard;

  @Event() addToCard: EventEmitter<ICard>;
  @Event() addToList: EventEmitter<ICard>;

  public addToCardHandler(card: ICard) {
    this.addToCard.emit(card);
  }

  public addToListHandler(card: ICard) {
    this.addToList.emit(card);
  }

  render() {
    return (
      <div class="card">
        <w-box padding={'default'}>
          <div class="card__header">
            <w-typography variant="h2">{this.card?.title}</w-typography>
          </div>
          <img class="card__image" src={this.card?.image} alt="card image"/>
          <div class="card__content">
            {this.card?.description}
          </div>
          <div class="card__actions">
            <w-btn class="card__action"
                   variant={'contained'}
                   color={'primary'}
                   onClick={() => this.addToCardHandler(this.card)}>ADD TO CARD
            </w-btn>
            <w-btn size={'small'}
                   variant={'text'}
                   color={'default'}
                   class="card__action"
                   onClick={() => this.addToListHandler(this.card)}>ADD TO LIST
            </w-btn>
          </div>
        </w-box>
      </div>
    );
  }
}
