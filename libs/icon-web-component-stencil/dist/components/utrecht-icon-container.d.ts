import type { Components, JSX } from "../types/components";

interface UtrechtIconContainer extends Components.UtrechtIconContainer, HTMLElement {}
export const UtrechtIconContainer: {
  prototype: UtrechtIconContainer;
  new (): UtrechtIconContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
