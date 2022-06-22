import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';

@Component({
  tag: 'utrecht-icon-station-sneltrein',
  shadow: true,
})
export class UtrechtIconStationSneltrein {
  @Prop({ reflect: true }) iconTitle?: string;
  @Prop({ reflect: true }) iconTitleId?: string;

  render() {
    const id = this.iconTitleId || v4();

    return (
      <utrecht-icon-container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-labelledby={id}>
          {this.iconTitle ? <title id={id}>{this.iconTitle}</title> : <title id={id}>Station Sneltrein</title>}
          <path
            fill="currentColor"
            d="M40.5 16.2v-2.5c0-2.6-2.1-4.6-4.6-4.6h-8.7c-2.6 0-4.6 2.1-4.6 4.6v2.5c-.9.8-1.5 2-1.5 3.3V36h21V19.5c-.1-1.4-.7-2.5-1.6-3.3zm-15-2.6c0-.9.7-1.6 1.6-1.6H30v3h-4.5v-1.4zm0 16.4c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm6-9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm1.5-9h2.9c.9 0 1.6.7 1.6 1.6V15H33v-3zm-5.9 25.5L26 39h11l-1-1.5h3l3 4.5h-3l-1-1.5H25L24 42h-3l3.1-4.5h3zM18 34.4386v1.5H6v-1.5h12zM10.5 18.1c1.7 0 3 1.3 3 3V27H12v6H7.5v-7.5H6v-5l3-2 .15879-.0746c.38965-.17227.90371-.3254 1.34121-.3254zm27 8.9c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zM10 12c1.38071 0 2.5 1.11929 2.5 2.5S11.38071 17 10 17s-2.5-1.11929-2.5-2.5S8.61929 12 10 12z"
          />
        </svg>
      </utrecht-icon-container>
    );
  }
}
