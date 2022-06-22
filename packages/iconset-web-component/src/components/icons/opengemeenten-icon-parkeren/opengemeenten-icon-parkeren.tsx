import { Component, h } from '@stencil/core';

@Component({
  tag: 'opengemeenten-icon-parkeren',
  shadow: true,
})
export class OpengemeentenIconParkeren {
  render() {
    return (
      <opengemeenten-icon-container>
        <svg fill="CurrentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M25 23h-4v-7h4c1.654 0 3 1.57 3 3.5S26.654 23 25 23zm0-10h-7v19.5h3V26h4c3.309 0 6-2.916 6-6.5S28.309 13 25 13zm11 21.5c0 .827-.673 1.5-1.5 1.5h-21c-.827 0-1.5-.673-1.5-1.5v-24c0-.827.673-1.5 1.5-1.5h21c.827 0 1.5.673 1.5 1.5v24zM34.5 6h-21A4.505 4.505 0 0 0 9 10.5v24c0 2.481 2.019 4.5 4.5 4.5H21v3h6v-3h7.5c2.481 0 4.5-2.019 4.5-4.5v-24C39 8.019 36.981 6 34.5 6z"
          />
        </svg>
      </opengemeenten-icon-container>
    );
  }
}