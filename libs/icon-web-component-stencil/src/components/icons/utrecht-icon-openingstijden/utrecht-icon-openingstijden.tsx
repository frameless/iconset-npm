import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';

@Component({
  tag: 'utrecht-icon-openingstijden',
  shadow: true,
})
export class UtrechtIconOpeningstijden {
  @Prop({ reflect: true }) iconTitle?: string;
  @Prop({ reflect: true }) iconTitleId?: string;

  render() {
    const id = this.iconTitleId || v4();

    return (
      <utrecht-icon-container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-labelledby={id}>
          {this.iconTitle ? <title id={id}>{this.iconTitle}</title> : <title id={id}>Openingstijden</title>}
          <path
            fill-rule="evenodd"
            fill="currentColor"
            d="M23.93 37.98c-7.772 0-14.074-6.3-14.074-14.073 0-7.773 6.302-14.075 14.074-14.075 7.773 0 14.074 6.302 14.074 14.075S31.703 37.98 23.93 37.98M24 6C14.059 6 6 14.06 6 24s8.059 18 18 18c9.94 0 18-8.059 18-18S33.94 6 24 6m-.479 6.508l.055 11.004-6.504.05.023 3 8-.062a1.501 1.501 0 0 0 1.489-1.508l-.063-12.5-3 .016z"
          />
        </svg>
      </utrecht-icon-container>
    );
  }
}
