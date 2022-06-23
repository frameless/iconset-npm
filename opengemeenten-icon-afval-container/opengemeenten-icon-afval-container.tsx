import { Component, h } from '@stencil/core';

@Component({
  tag: 'opengemeenten-icon-afval-container',
  shadow: true,
})
export class OpengemeentenIconAfvalContainer {
  render() {
    return (
      <opengemeenten-icon-container>
        <svg fill="CurrentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <path d="m19.06 16-1 6H30l-1-6h-9.94zM6 39h36v3H6z"/>
  <path d="M14 37h22.98V20.44c0-5.77-4.21-10.46-9.98-10.46V7.46C27 6.65 26.33 6 25.49 6h-2.94c-.86 0-1.54.66-1.54 1.49v2.49C15.48 9.98 11 14.46 11 19.99V37h3Zm9.02-29.02h1.95v2h-1.95v-2ZM14 33V19.99c0-3.87 3.15-7.01 7.01-7.01h6.21c3.87.12 6.76 3.28 6.76 7.46V33H34v1H14v-1Z"/>
</svg>

      </opengemeenten-icon-container>
    );
  }
}
