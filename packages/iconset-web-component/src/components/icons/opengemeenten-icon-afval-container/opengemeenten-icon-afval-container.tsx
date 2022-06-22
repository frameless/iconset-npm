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
          <path d="M37.44 23.15V19a8.33 8.33 0 0 0-8.29-8.47H27V9a1.48 1.48 0 0 0-1.48-1.48h-3A1.48 1.48 0 0 0 21 9v1.48h-2A8.48 8.48 0 0 0 10.55 19v18.4h26.89zM25.47 9v1.48h-3V9zm3 12h-9v-6h9zM6.01 39H42v3H6.01z" />
        </svg>
      </opengemeenten-icon-container>
    );
  }
}