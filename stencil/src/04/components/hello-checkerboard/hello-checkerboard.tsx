import { Component, Prop } from '@stencil/core';

interface Cell {
  i: number;
  j: number;
  dark: boolean;
}

@Component({
  tag: 'hello-checkerboard',
  styleUrl: 'hello-checkerboard.css',
  // @todo 2
})
export class HelloCheckerBoard {

  @Prop() size: number = 4;
  // @todo 3

  get cells(): Cell[] {
    const result: Cell[] = [];
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        result.push({ i, j, dark: (i + j) % 2 === 1 });
      }
    }
    return result;
  }

  render() {

    const gridTemplate = `repeat(${this.size}, 1fr)`;
    const gridStyle = {
      "grid-template": `${gridTemplate} / ${gridTemplate}`,
    }
    const cellClass = (cell: Cell) => cell.dark ? 'dark' : 'light';
    const style = `
    :host {
      // @todo 5
    }
    `;

    return (
      <div>
        <style>{style}</style>
        <div class="checkerboard" style={gridStyle}>
          {this.cells.map((cell, index) => (
            <div class={cellClass(cell)}>{index}</div>
          ))}
        </div>
      </div>
    );
  }
}