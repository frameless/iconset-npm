import { Component, h } from '@stencil/core';

@Component({
  tag: 'opengemeenten-icon-gemiva-locatie',
  shadow: true,
})
export class OpengemeentenIconGemivaLocatie {
  render() {
    return (
      <opengemeenten-icon-container>
        <svg fill="CurrentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M34 26.5h6.5V23H34v3.5zm2-6.5H12v19h5v-1.5h3.5V29h7v8.5H31V39h1.5V21.75a.75.75 0 0 1 .75-.75c.326 0 .596.21.7.5H42V28h-8v11h2v-9.5h3V39h3v3H6v-3h3V20H6v-3h4l2-3h24l2 3h4v3h-6zm-22 6.5h5V22h-5v4.5zm7.5 0h5V22h-5v4.5zm7.5 0h2V22h-2v4.5zm0 7h2V29h-2v4.5zm-15 0h5V29h-5v4.5z"
          />
        </svg>
      </opengemeenten-icon-container>
    );
  }
}