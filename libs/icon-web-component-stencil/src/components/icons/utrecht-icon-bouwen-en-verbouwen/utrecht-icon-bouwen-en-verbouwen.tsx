import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';

@Component({
  tag: 'utrecht-icon-bouwen-en-verbouwen',
  shadow: true,
})
export class UtrechtIconBouwenEnVerbouwen {
  @Prop({ reflect: true }) iconTitle?: string;
  @Prop({ reflect: true }) iconTitleId?: string;

  render() {
    const id = this.iconTitleId || v4();

    return (
      <utrecht-icon-container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-labelledby={id}>
          {this.iconTitle ? <title id={id}>{this.iconTitle}</title> : <title id={id}>Bouwen En Verbouwen</title>}
          <path
            fill-rule="evenodd"
            fill="currentColor"
            d="M21.621 12.5l1.5-1.5h5.758l9.5 9.5L34 24.879 21.621 12.5zm10.778 23.287s-.004.008-.019.023l-2.121 2.121-7.071-7.071 2.124-2.124 7.087 7.051zm-21.24 2.217s-.009-.004-.023-.019l-2.12-2.122 15.852-15.874 2.124 2.124-15.833 15.891zm21.78-9.943c.293.293.677.439 1.061.439.384 0 .767-.146 1.06-.439l6.5-6.5a1.5 1.5 0 0 0 0-2.122l-11-11A1.499 1.499 0 0 0 29.5 8h-7c-.398 0-.779.158-1.061.439l-3 3a1.5 1.5 0 0 0 0 2.122l4.308 4.307L18.621 22l-4.162-4.162c.088-.301.142-.613.127-.932a2.895 2.895 0 0 0-1.067-2.105l-4.228-3.3-3.288 3.289 3.288 4.227.032.04c.497.596 1.218.945 2.029.982a3.083 3.083 0 0 0 .949-.117l4.2 4.2-9.608 9.621A2.987 2.987 0 0 0 6 35.864c0 .792.317 1.545.893 2.121l2.122 2.121a2.984 2.984 0 0 0 2.121.894c.792 0 1.545-.317 2.122-.894l7.462-7.471 7.418 7.417a2.992 2.992 0 0 0 2.121.892c.763 0 1.527-.298 2.121-.892l2.121-2.121a2.968 2.968 0 0 0 0-4.243l-7.422-7.421 2.032-2.035 3.828 3.829z"
          />
        </svg>
      </utrecht-icon-container>
    );
  }
}
