import type { Components, JSX } from "../types/components";

interface UtrechtIconManege extends Components.UtrechtIconManege, HTMLElement {}
export const UtrechtIconManege: {
  prototype: UtrechtIconManege;
  new (): UtrechtIconManege;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
