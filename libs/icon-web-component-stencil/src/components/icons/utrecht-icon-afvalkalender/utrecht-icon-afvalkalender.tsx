import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';

@Component({
  tag: 'utrecht-icon-afvalkalender',
  shadow: true,
})
export class UtrechtIconAfvalkalender {
  @Prop({ reflect: true }) iconTitle?: string;
  @Prop({ reflect: true }) iconTitleId?: string;

  render() {
    const id = this.iconTitleId || v4();

    return (
      <utrecht-icon-container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-labelledby={id}>
          {this.iconTitle ? <title id={id}>{this.iconTitle}</title> : <title id={id}>Afvalkalender</title>}
          <path
            fill-rule="evenodd"
            fill="currentColor"
            d="M31 21h-2a1.5 1.5 0 0 0-1.5-1.5h-7A1.5 1.5 0 0 0 19 21h-1v1.5h13V21zM19.5 36a1.5 1.5 0 1 0 .001-2.999A1.5 1.5 0 0 0 19.5 36zm-.187-4.481c.063-.004.123-.019.187-.019a3 3 0 0 1 3 3c0 .549-.158 1.057-.416 1.5h4.421A1.5 1.5 0 0 0 28 34.625L29 24H19l.313 7.519zM21 10h6V7h-6v3zm14 6.5H13v21c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-21zm3-1.5v22.5c0 2.481-2.019 4.5-4.5 4.5h-19a4.505 4.505 0 0 1-4.5-4.5V7h5v3h-2v3.5h21.999V10H33V7h4.999v8H38zm-21.5-4h3V6h-3v5zm12 0h3V6h-3v5z"
          />
        </svg>
      </utrecht-icon-container>
    );
  }
}
