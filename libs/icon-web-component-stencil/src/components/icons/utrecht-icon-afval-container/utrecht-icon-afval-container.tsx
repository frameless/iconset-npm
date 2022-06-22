import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';

@Component({
  tag: 'utrecht-icon-afval-container',
  shadow: true,
})
export class UtrechtIconAfvalContainer {
  @Prop({ reflect: true }) iconTitle?: string;
  @Prop({ reflect: true }) iconTitleId?: string;

  render() {
    const id = this.iconTitleId || v4();

    return (
      <utrecht-icon-container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-labelledby={id}>
          {this.iconTitle ? <title id={id}>{this.iconTitle}</title> : <title id={id}>Afval Container</title>}
          <path
            fill="currentColor"
            d="M37.44 23.15V19a8.33 8.33 0 00-8.29-8.47H27V9a1.48 1.48 0 00-1.48-1.48h-3A1.48 1.48 0 0021 9v1.48h-2A8.48 8.48 0 0010.55 19V37.4h26.89zM25.47 9v1.48h-3V9zm3 12h-9v-6h9zM6.01 39H42v3H6.01z"
          />
        </svg>
      </utrecht-icon-container>
    );
  }
}
