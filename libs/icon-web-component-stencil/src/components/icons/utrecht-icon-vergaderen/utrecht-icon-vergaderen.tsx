import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';

@Component({
  tag: 'utrecht-icon-vergaderen',
  shadow: true,
})
export class UtrechtIconVergaderen {
  @Prop({ reflect: true }) iconTitle?: string;
  @Prop({ reflect: true }) iconTitleId?: string;

  render() {
    const id = this.iconTitleId || v4();

    return (
      <utrecht-icon-container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-labelledby={id}>
          {this.iconTitle ? <title id={id}>{this.iconTitle}</title> : <title id={id}>Vergaderen</title>}
          <circle fill="currentColor" cx="36.02" cy="19.01" r="3" />
          <circle fill="currentColor" cx="24" cy="14.57" r="3" />
          <path fill="currentColor" d="M29 25v-3a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v3h10z" />
          <circle fill="currentColor" cx="12.09" cy="19.01" r="3" />
          <path
            fill="currentColor"
            d="M38.06 23.48h-2c-1.656 0-3.56 1.343-3.56 3l5.44 7.58h3.08v-7.58a3 3 0 0 0-2.96-3zM17.5 25.985L14.31 31H12l3.5-5c0-1.66-1.34-2.55-3-2.55h-2.462a3 3 0 0 0-3 3V32a2 2 0 0 0 2 2H16.5l-.06 1.042h-5.28L9 38.968h30l-8.5-12.983h-13z"
          />
        </svg>
      </utrecht-icon-container>
    );
  }
}
