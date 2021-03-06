/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface StencilHelloSolution {}
  interface StencilHelloSolutionAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'StencilHelloSolution': Components.StencilHelloSolution;
  }

  interface StencilIntrinsicElements {
    'stencil-hello-solution': Components.StencilHelloSolutionAttributes;
  }


  interface HTMLStencilHelloSolutionElement extends Components.StencilHelloSolution, HTMLStencilElement {}
  var HTMLStencilHelloSolutionElement: {
    prototype: HTMLStencilHelloSolutionElement;
    new (): HTMLStencilHelloSolutionElement;
  };

  interface HTMLElementTagNameMap {
    'stencil-hello-solution': HTMLStencilHelloSolutionElement
  }

  interface ElementTagNameMap {
    'stencil-hello-solution': HTMLStencilHelloSolutionElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
