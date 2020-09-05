import {Component, Element, h, Prop} from '@stencil/core';
export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

@Component({
  tag: 'w-typography',
  styleUrl: 'w-typography.scss',
  shadow: true
})
export class WTypography {
  @Prop() variant: TypographyVariant = 'h1';
  @Element() host: HTMLDivElement;
  render() {
    const El = this.variant;
    return <El><slot/></El>
  }
}
