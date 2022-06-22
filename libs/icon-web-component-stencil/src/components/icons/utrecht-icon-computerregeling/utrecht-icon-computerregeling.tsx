import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';

@Component({
  tag: 'utrecht-icon-computerregeling',
  shadow: true,
})
export class UtrechtIconComputerregeling {
  @Prop({ reflect: true }) iconTitle?: string;
  @Prop({ reflect: true }) iconTitleId?: string;

  render() {
    const id = this.iconTitleId || v4();

    return (
      <utrecht-icon-container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-labelledby={id}>
          {this.iconTitle ? <title id={id}>{this.iconTitle}</title> : <title id={id}>Computerregeling</title>}
          <path
            fill="currentColor"
            fill-rule="nonzero"
            d="M42.011 35.654l-3-9.113V10.952c0-1.63-1.343-2.952-3-2.952h-24c-1.657 0-3 1.322-3 2.952v15.589l-3 9.113c-.015.13-.015.263 0 .394 0 1.63 1.343 2.952 3 2.952h30c1.657 0 3-1.322 3-2.952.015-.131.015-.263 0-.394zm-7.04-6.614l1.81 5.96h-25.55l1.79-5.96h21.95zM36.011 11v15h-24V11h24zm-27 24.976l2.87-8.021h24.23l2.9 8.021h-30z"
          />
        </svg>
      </utrecht-icon-container>
    );
  }
}
