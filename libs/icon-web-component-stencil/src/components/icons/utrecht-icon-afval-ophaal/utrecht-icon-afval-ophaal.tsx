import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';

@Component({
  tag: 'utrecht-icon-afval-ophaal',
  shadow: true,
})
export class UtrechtIconAfvalOphaal {
  @Prop({ reflect: true }) iconTitle?: string;
  @Prop({ reflect: true }) iconTitleId?: string;

  render() {
    const id = this.iconTitleId || v4();

    return (
      <utrecht-icon-container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-labelledby={id}>
          {this.iconTitle ? <title id={id}>{this.iconTitle}</title> : <title id={id}>Afval Ophaal</title>}
          <path
            fill="currentColor"
            d="M20.26 16c.82843 0 1.5.67157 1.5 1.5s-.67157 1.5-1.5 1.5H17c-2.31 3.86-7 11.62-7 11.62l-3-1.85L14.26 16h6m-2 23.89c-2.48528 0-4.5-2.01472-4.5-4.5s2.01472-4.5 4.5-4.5 4.5 2.01472 4.5 4.5-2.01472 4.5-4.5 4.5zm0-6c-.82843 0-1.5.67157-1.5 1.5s.67157 1.5 1.5 1.5 1.5-.67157 1.5-1.5c-.00545-.82616-.67384-1.49455-1.5-1.5zm17.25 6c-2.48528 0-4.5-2.01472-4.5-4.5s2.01472-4.5 4.5-4.5 4.5 2.01472 4.5 4.5a4.5 4.5 0 01-4.5 4.5zm0-6c-.82843 0-1.5.67157-1.5 1.5s.67157 1.5 1.5 1.5 1.5-.67157 1.5-1.5c-.00545-.82616-.67384-1.49455-1.5-1.5zM43 32.48v-7.56l-2.63-7.39h-7.84V25l-.1 1.51H31V16h-8.1a3 3 0 01.38 1.44c0 1.65685-1.34315 3-3 3h-2.39L10 33.6v1.9h2.28v-.11c.02171-2.71563 1.86475-5.07808 4.4935-5.75987 2.62874-.68179 5.38766.48711 6.7265 2.84987h6.77c1.2048-2.1555 3.60718-3.35274 6.05359-3.01683C38.77 29.79908 40.76077 31.59953 41.34 34H43v-1.52zm-7.5-8.25v-4.58h3l1.5 4.58h-4.5zM29.69 34h-5.6a5.89 5.89 0 01-.09 3h5.69a6.42 6.42 0 01-.22-1.59 6 6 0 01.22-1.41z"
          />
        </svg>
      </utrecht-icon-container>
    );
  }
}
