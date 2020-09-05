import {Component, h} from '@stencil/core';


@Component({
  tag: 'w-header',
  styleUrl: 'w-header.scss',
  shadow: true
})
export class WHeader {

  render() {
    return (
      <header class="header">
        <h1><slot/></h1>
      </header>
    );
  }
}
