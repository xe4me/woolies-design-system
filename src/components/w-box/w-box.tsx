import {Component, h, Prop} from '@stencil/core';


@Component({
  tag: 'w-box',
  styleUrl: 'w-box.scss',
  shadow: true
})
export class WBox {
  @Prop() padding: 'default' | 'small' | 'large' = 'default';

  render() {
    return (
      <div class="box" data-padding={this.padding}>
        <slot/>
      </div>
    );
  }
}
