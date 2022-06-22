import { Component, h } from '@stencil/core';

@Component({
  tag: 'opengemeenten-icon-computerregeling',
  shadow: true,
})
export class OpengemeentenIconComputerregeling {
  render() {
    return (
      <opengemeenten-icon-container>
        <svg fill="CurrentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path d="m42.011 35.654-3-9.113V10.952c0-1.63-1.343-2.952-3-2.952h-24c-1.657 0-3 1.322-3 2.952v15.589l-3 9.113a1.73 1.73 0 0 0 0 .394c0 1.63 1.343 2.952 3 2.952h30c1.657 0 3-1.322 3-2.952a1.73 1.73 0 0 0 0-.394zm-7.04-6.614 1.81 5.96h-25.55l1.79-5.96h21.95zM36.011 11v15h-24V11h24zm-27 24.976 2.87-8.021h24.23l2.9 8.021h-30z" />
        </svg>
      </opengemeenten-icon-container>
    );
  }
}