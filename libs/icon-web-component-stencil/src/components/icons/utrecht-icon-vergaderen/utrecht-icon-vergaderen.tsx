import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-icon-vergaderen',
  shadow: true,
})
export class UtrechtIconVergaderen {
  render() {
    return (
      <utrecht-icon-container>
        <svg fill="CurrentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <circle cx="36.02" cy="19.01" r="3" />
          <circle cx="24" cy="14.57" r="3" />
          <path d="M29 25v-3a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v3h10z" />
          <circle cx="12.09" cy="19.01" r="3" />
          <path d="M38.06 23.48h-2c-1.656 0-3.56 1.343-3.56 3l5.44 7.58h3.08v-7.58a3 3 0 0 0-2.96-3zM17.5 25.985 14.31 31H12l3.5-5c0-1.66-1.34-2.55-3-2.55h-2.462a3 3 0 0 0-3 3V32a2 2 0 0 0 2 2H16.5l-.06 1.042h-5.28L9 38.968h30l-8.5-12.983h-13z" />
        </svg>
      </utrecht-icon-container>
    );
  }
}
