import { Component, State } from '@stencil/core';

@Component({
  tag: 'stencil-hello-solution',
  styleUrl: 'stencil-hello.css',
})
export class StencilHelloSolution {
  timer: number;

  @State() time: number = 0;

  componentDidLoad() {
    this.timer = window.setInterval(() => {
      this.time++;
    }, 1000);
  }

  componentDidUnload() {
    window.clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        {this.time}
      </div>
    );
  }
}