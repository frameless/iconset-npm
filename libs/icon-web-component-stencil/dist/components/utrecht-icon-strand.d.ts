import type { Components, JSX } from "../types/components";

interface UtrechtIconStrand extends Components.UtrechtIconStrand, HTMLElement {}
export const UtrechtIconStrand: {
  prototype: UtrechtIconStrand;
  new (): UtrechtIconStrand;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
