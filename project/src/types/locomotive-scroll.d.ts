declare module 'locomotive-scroll' {
  export interface LocomotiveScrollOptions {
    el: Element;
    smooth?: boolean;
    multiplier?: number;
    class?: string;
    lerp?: number;
    getDirection?: boolean;
    getSpeed?: boolean;
    inertia?: number;
    smoothMobile?: boolean;
    tablet?: {
      smooth?: boolean;
      breakpoint?: number;
    };
    smartphone?: {
      smooth?: boolean;
      breakpoint?: number;
    };
  }

  export default class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    destroy(): void;
    update(): void;
    stop(): void;
    start(): void;
    scrollTo(target: Element | string | number, options?: any): void;
  }
}