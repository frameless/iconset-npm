import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';

@Component({
  tag: 'utrecht-icon-reclame',
  shadow: true,
})
export class UtrechtIconReclame {
  @Prop({ reflect: true }) iconTitle?: string;
  @Prop({ reflect: true }) iconTitleId?: string;

  render() {
    const id = this.iconTitleId || v4();

    return (
      <utrecht-icon-container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-labelledby={id}>
          {this.iconTitle ? <title id={id}>{this.iconTitle}</title> : <title id={id}>Reclame</title>}
          <path
            fill="currentColor"
            d="M34 9H14l-3.8 24.08027L9.3 39h3l.9-5.91973h14L26.3 39h3l3.2-20.06689L34 30.07023h-1.7l-.5 3.01004h2.7L35.3 39h3L34 9zm-6.4 21.07023H13.7l1.5-9.53177 1.3-8.52843h13.9l-2.8 18.0602zm-1-12.04013h-8.1l.5-3.01003h8.1l-.5 3.01003zm-4 6.02007h-5.1l.5-3.01004h5.1l-.5 3.01004z"
          />
        </svg>
      </utrecht-icon-container>
    );
  }
}
