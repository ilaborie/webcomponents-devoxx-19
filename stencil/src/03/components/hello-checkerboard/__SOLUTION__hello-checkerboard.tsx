import { Component, Prop } from '@stencil/core';

interface Cell {
  i: number;
  j: number;
  dark: boolean;
}

@Component({
  tag: 'hello-checkerboard-solution',
  styleUrl: 'hello-checkerboard.css'
})
export class HelloCheckerBoardSolution {

  @Prop() size: number = 4;

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

    return (
      <div class="checkerboard" style={gridStyle}>
        {this.cells.map((cell, index) => (
          <div class={cellClass(cell)}>{index}</div>
        ))}
      </div>
    );
  }
}