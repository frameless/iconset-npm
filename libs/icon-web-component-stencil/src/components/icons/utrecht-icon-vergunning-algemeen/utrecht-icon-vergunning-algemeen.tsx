import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';

@Component({
  tag: 'utrecht-icon-vergunning-algemeen',
  shadow: true,
})
export class UtrechtIconVergunningAlgemeen {
  @Prop({ reflect: true }) iconTitle?: string;
  @Prop({ reflect: true }) iconTitleId?: string;

  render() {
    const id = this.iconTitleId || v4();

    return (
      <utrecht-icon-container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-labelledby={id}>
          {this.iconTitle ? <title id={id}>{this.iconTitle}</title> : <title id={id}>Vergunning Algemeen</title>}
          <path
            fill-rule="evenodd"
            fill="currentColor"
            d="M25.577 14.526l2.846.948-3 9a1.5 1.5 0 0 1-1.34 1.024L24 25.5a1.5 1.5 0 0 1-1.36-.871l-3-6.5 2.723-1.257 1.413 3.06 1.802-5.406zM21 39v-5.5a1.5 1.5 0 0 0-1.5-1.5H14V9h20l.002 30H21zm-5.024-4H18v2.032L15.976 35zM34 6H14c-1.654 0-3 1.346-3 3v24.102c0 .742.288 1.44.812 1.968l6.067 6.092A2.873 2.873 0 0 0 19.9 42H34c1.654 0 3-1.346 3-3V9c0-1.654-1.346-3-3-3z"
          />
        </svg>
      </utrecht-icon-container>
    );
  }
}
