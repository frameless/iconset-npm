import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';

@Component({
  tag: 'utrecht-icon-meeuwenoverlast',
  shadow: true,
})
export class UtrechtIconMeeuwenoverlast {
  @Prop({ reflect: true }) iconTitle?: string;
  @Prop({ reflect: true }) iconTitleId?: string;

  render() {
    const id = this.iconTitleId || v4();

    return (
      <utrecht-icon-container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-labelledby={id}>
          {this.iconTitle ? <title id={id}>{this.iconTitle}</title> : <title id={id}>Meeuwenoverlast</title>}
          <path
            fill="currentColor"
            d="M31.104 8.785L31.23 9h.994a3.78 3.78 0 0 1 2.576 1.11 5 5 0 0 1 1.2 3.116v.264l-.06 1.44h-3.35a14.63 14.63 0 0 1 .71 4.7c0 3.996-2.576 8.291-10.483 8.865l-.387.025V33h2.34v3H15v-7.42H8.59l-7.07 2.19V26.5l-1.41-1 3.11-2.62-2-1.15 11.4-6.17a28.65 28.65 0 0 1 6.271-1.946l.649-.114v-.84c-.05-2.46 1.39-6.29 5.55-6.66a6 6 0 0 1 6.014 2.785zM19.43 28.57H18V33h1.43v-4.43zm5.94-19.56c-2.65.236-2.8 3.147-2.81 3.597v1.053c.46 2.6 3.4 2.49 3.4 5.27 0 2.37-3.76 5.08-10 5.08-1.794 0-4.74-.205-7.428-.439l-.472-.041-3.59 2v1.52l3.91-1.44h12.64c4.45 0 9.3-1.43 9.3-5.95 0-4.417-1.91-5.224-1.997-5.259l-.003-.001-1.32-.46 2-1.39 4.36-.04c-.066-.188-.131-.902-.848-.991l-.152-.009H29l-.1-.64c-.17-1.06-.72-2.11-3.53-1.86z"
          />
          <circle fill="currentColor" cx="26.99" cy="10.6" r="1" />
          <path
            fill="currentColor"
            d="M7.5 0a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15zm.72 11.72a1.07 1.07 0 0 1-1.44 0 1.07 1.07 0 0 1 0-1.44 1.07 1.07 0 0 1 1.44 0 1.07 1.07 0 0 1 0 1.44zM8.5 9h-2V3h2v6z"
          />
        </svg>
      </utrecht-icon-container>
    );
  }
}
