import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-icon-grafiek',
  shadow: true,
})
export class UtrechtIconGrafiek {
  render() {
    return (
      <utrecht-icon-container>
        <svg fill="CurrentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M36.054 26.434v15.047h-6.055V26.434h6.055zm-18.055 4.547v10.5H12v-10.5h5.999zm9-10.556v21.002l-5.944.054V20.48L27 20.425zM34.41 7v6.33l-2.415-2.415-6.648 6.638-4.221-4.222-6.331 6.33-1.488-1.487 7.819-7.83 4.22 4.222 5.15-5.15L28.079 7h6.33z"
          />
        </svg>
      </utrecht-icon-container>
    );
  }
}
