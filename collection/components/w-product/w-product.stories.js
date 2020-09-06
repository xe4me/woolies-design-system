import {storiesOf} from '@storybook/html';
import {select,object, withKnobs} from '@storybook/addon-knobs';
import notes from './readme.md';

const product = {
  id: "3h2g4jh2323232323423jh4g",
  image: 'https://img.zcdn.com.au/lf/50/hash/35461/18622416/4/Spiegelau%2BAuthentis%2BCrystal%2BBurgundy%2BGlasses.jpg',
  price: '60 AUD',
  title: 'Spiegelau Authentis Crystal Burgundy Glasses (Set of 4)',
  description: `The use of wine tasting descriptors allows the taster to qualitatively relate the aromas and flavors that the taster experiences and can be used in assessing the overall quality of wine. Wine writers differentiate wine tasters from casual enthusiasts; tasters attempt to give an objective description of the wine's taste (often taking a systematic approach to tasting), casual enthusiasts appreciate wine but pause their examination sooner than tasters.`,
}

storiesOf('Product', module)
  .addDecorator(withKnobs)
  .add('with Knobs!', () => {
    const el = document.createElement('w-product');
    el.product = object('Product ', product);
    return el;
  })
  .add('Default', () => {
    const el = document.createElement('w-product');
    el.product = product;
    return el;
  }, {notes})
  .add('When is added to list', () => {
    const el = document.createElement('w-product');
    el.product = product;
    el.isAddedToList = true;
    return el;
  }, {notes});
