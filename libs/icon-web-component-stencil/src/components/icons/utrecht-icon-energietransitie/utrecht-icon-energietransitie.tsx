import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';

@Component({
  tag: 'utrecht-icon-energietransitie',
  shadow: true,
})
export class UtrechtIconEnergietransitie {
  @Prop({ reflect: true }) iconTitle?: string;
  @Prop({ reflect: true }) iconTitleId?: string;

  render() {
    const id = this.iconTitleId || v4();

    return (
      <utrecht-icon-container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-labelledby={id}>
          {this.iconTitle ? <title id={id}>{this.iconTitle}</title> : <title id={id}>Energietransitie</title>}
          <path fill="currentColor" d="M23.46 31.46L29 23h-3.5l2.5-4.95h-6.99l-1.54 7.92h3.69L21 31.46z" />
          <path
            fill="currentColor"
            d="M12.12 22.48a12 12 0 0 1 21.1-6.16l2.52-1.63a15 15 0 0 0-26.63 7.79H6l4.51 7.46L15 22.48h-2.88zm25.33-4.41l-4.51 7.46h2.94a12 12 0 0 1-21 6.22l-2.53 1.63a15 15 0 0 0 26.57-7.85H42l-4.55-7.46z"
          />
        </svg>
      </utrecht-icon-container>
    );
  }
}
