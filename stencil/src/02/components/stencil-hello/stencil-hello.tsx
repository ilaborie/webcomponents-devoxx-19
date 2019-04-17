import { Component, State } from '@stencil/core';

@Component({
  tag: 'stencil-hello',
  styleUrl: 'stencil-hello.css',
})
export class StencilHello {
  timer: number; // Timer reference to clear on componentDidUnload

  // @TODO Step 2 @state

  // @TODO Step 3 componentDidLoad

  // @TODO Step 5 componentDidUnload

  render() {
    return (
      <div>
        {/* @TODO Step 4 */}
      </div>
    );
  }
}