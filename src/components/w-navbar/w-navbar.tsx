import {Component, h} from '@stencil/core';

@Component({
  tag: 'w-navbar',
  styleUrl: 'w-navbar.scss',
  shadow: true
})
export class WNavbar {
  render() {
    return (
      <header class="navbar">
        <slot/>
      </header>
    );
  }
}
