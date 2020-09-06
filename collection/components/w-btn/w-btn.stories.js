import {storiesOf} from '@storybook/html';
import {select, withKnobs} from '@storybook/addon-knobs';
import notes from './readme.md';

storiesOf('w-btn', module)
  .addDecorator(withKnobs)
  .add('Knobs', () => `
    <w-btn
    size="${select("size", ["small", "medium", "large"], "small")}"
    color="${select("color", ["primary", "secondary", "default"], "primary")}"
    variant="${select("variant", ["contained", "text", "outlined"], "contained")}">
      Button
    </w-btn>
  `, {notes})
  .add('Primary', () => `
    <w-btn
    size="medium"
    color="primary"
    variant="contained">
      Button Primary
    </w-btn>
  `, {notes})
  .add('Secondary', () => `
    <w-btn
    size="medium"
    color="secondary"
    variant="contained">
      Button Secondary
    </w-btn>
  `, {notes})
  .add('Outlined', () => `
    <w-btn
    size="medium"
    color="primary"
    variant="outlined">
      Button Outlined
    </w-btn>
  `, {notes})
  .add('Text', () => `
    <w-btn
    size="medium"
    color="primary"
    variant="text">
      Button Text
    </w-btn>
  `, {notes})
