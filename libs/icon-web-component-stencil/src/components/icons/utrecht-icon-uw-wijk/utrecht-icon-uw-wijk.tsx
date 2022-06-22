import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';

@Component({
  tag: 'utrecht-icon-uw-wijk',
  shadow: true,
})
export class UtrechtIconUwWijk {
  @Prop({ reflect: true }) iconTitle?: string;
  @Prop({ reflect: true }) iconTitleId?: string;

  render() {
    const id = this.iconTitleId || v4();

    return (
      <utrecht-icon-container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-labelledby={id}>
          {this.iconTitle ? <title id={id}>{this.iconTitle}</title> : <title id={id}>Uw Wijk</title>}
          <path
            fill-rule="evenodd"
            fill="currentColor"
            d="M14 35h-4c-2.209 0-4 1.073-4 3.182V42h12v-3.818C18 36.073 16.209 35 14 35zm-2.004-8.5a3.5 3.5 0 0 0-.02 7h.021a3.5 3.5 0 0 0 .022-7h-.023zM34 19v-6.5L30.5 6 27 12.5V19h-3.071l-5.179-5H6l6 7h.022l-.004 4h.009a4.968 4.968 0 0 1 3.527 1.486c.158.16.285.339.418.515L24 20.579l5 4V22.5h3v4.479l2.937 2.35-1.875 2.342-1.062-.85V39h10V19h-8zM21 35h6v-5h-6v5z"
          />
        </svg>
      </utrecht-icon-container>
    );
  }
}
