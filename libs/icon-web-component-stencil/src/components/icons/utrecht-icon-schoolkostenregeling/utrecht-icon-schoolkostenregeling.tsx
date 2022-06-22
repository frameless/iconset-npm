import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';

@Component({
  tag: 'utrecht-icon-schoolkostenregeling',
  shadow: true,
})
export class UtrechtIconSchoolkostenregeling {
  @Prop({ reflect: true }) iconTitle?: string;
  @Prop({ reflect: true }) iconTitleId?: string;

  render() {
    const id = this.iconTitleId || v4();

    return (
      <utrecht-icon-container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-labelledby={id}>
          {this.iconTitle ? <title id={id}>{this.iconTitle}</title> : <title id={id}>Schoolkostenregeling</title>}
          <path
            fill-rule="evenodd"
            fill="currentColor"
            d="M28.5 39H28v3h.5a1.5 1.5 0 0 0 0-3zM6.243 40.929L9.5 42v-3l-3.257 1.071a.5.5 0 0 0 0 .858zM10.5 42H27v-3H10.5v3zM9 34.5h18V9H9v25.5zM30 9v25.5c0 1.654-1.346 3-3 3H6V6h21c1.654 0 3 1.346 3 3zM12.5 20h11v-6.5h-11V20zm0 1.5H11V12h14v9.5H12.5zM14 16h8v-1h-8v1zm1 2h6v-1h-6v1zm24-9h-4.5v30H39v-1.5h-1v-1h1V35h-1v-1h1v-1.5h-1.97v-1H39V30h-1v-1h1v-1.5h-1v-1h1V25h-2v-1h2v-1h-1v-1h1v-1.5h-1v-1h1V18h-2v-1h2v-1h-1v-1h1v-1.5h-1v-1h1V9zm3-3v36H31.5V6H42zm-6 4.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0z"
          />
        </svg>
      </utrecht-icon-container>
    );
  }
}
