import { Component, h } from '@stencil/core';

@Component({
  tag: 'opengemeenten-icon-let-op',
  shadow: true,
})
export class OpengemeentenIconLetOp {
  render() {
    return (
      <opengemeenten-icon-container>
        <svg fill="CurrentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M24.5 33.002a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m-3.06-4.44L20.5 6h8l-.94 22.563A1.5 1.5 0 0 1 26.061 30h-3.122a1.5 1.5 0 0 1-1.499-1.437"
          />
        </svg>
      </opengemeenten-icon-container>
    );
  }
}