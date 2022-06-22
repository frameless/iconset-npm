import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';

@Component({
  tag: 'utrecht-icon-informatie',
  shadow: true,
})
export class UtrechtIconInformatie {
  @Prop({ reflect: true }) iconTitle?: string;
  @Prop({ reflect: true }) iconTitleId?: string;

  render() {
    const id = this.iconTitleId || v4();

    return (
      <utrecht-icon-container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-labelledby={id}>
          {this.iconTitle ? <title id={id}>{this.iconTitle}</title> : <title id={id}>Informatie</title>}
          <path
            fill="currentColor"
            d="M24 6a18 18 0 1018 18A18 18 0 0024 6zm0 6a2.25 2.25 0 11-2.25 2.25A2.25 2.25 0 0124 12zm4.82 22.47h-9.3v-3h3v-8.94h-3v-3H24a1.49 1.49 0 011 .47 1.54 1.54 0 01.46 1v10.47h3.31z"
          />
        </svg>
      </utrecht-icon-container>
    );
  }
}
