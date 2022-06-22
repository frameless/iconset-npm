import { Component, h } from '@stencil/core';

@Component({
  tag: 'opengemeenten-icon-container',
  styleUrl: 'opengemeenten-icon-container.css',
  shadow: true,
})
export class OpengemeentenIconContainer {
  render() {
    return (
      <div class="opengemeenten-icon-container">
        <slot />
      </div>
    );
  }
}
