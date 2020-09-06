import {Component, h, Prop} from '@stencil/core';


@Component({
  tag: 'w-btn',
  styleUrl: 'w-btn.scss',
  shadow: true
})
export class WBtn {

  @Prop() size: 'small' | 'medium' | 'large' = 'medium';
  @Prop() variant: 'text' | 'contained' | 'outlined' = 'text';
  @Prop() color: 'primary' | 'secondary' | 'default' = 'default';
  @Prop({attribute:'full-width'}) fullWidth: boolean = false

  render() {
    return (
      <button class="btn"
              data-full-width={this.fullWidth}
              data-size={this.size}
              data-variant={this.variant}
              data-color={this.color}>
        <slot/>
      </button>
    );
  }
}
