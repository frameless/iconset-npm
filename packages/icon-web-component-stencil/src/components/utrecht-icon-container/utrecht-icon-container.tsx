import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-icon-container',
  styleUrl: 'utrecht-icon-container.css',
  shadow: true,
})
export class UtrechtIconContainer {
  render() {
    return (
      <div class="utrecht-icon-container">
        <slot />
      </div>
    );
  }
}
