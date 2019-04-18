interface Cell {
    i: number;
    j: number;
    dark: boolean;
}

class Checkerboard extends HTMLElement {

    get size(): number {
        // Step 1
        const sSize = this.getAttribute('size');
        return +sSize;
    }

    get cells(): Cell[] {
        const result: Cell[] = [];
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                result.push({i, j, dark: (i + j) % 2 === 1});
            }
        }
        return result;
    }

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = this.template();
    }

    private template() {
        // Step 2
        const gridTemplate = `repeat(${this.size}, 1fr)`;
        const gridStyle = `grid-template: ${gridTemplate} / ${gridTemplate};`;

        const cellClass = (cell: Cell) => cell.dark ? 'dark' : 'light';

        return `
        <div class="checkerboard" style="${gridStyle}">
            ${this.cells.map((cell, index) =>
            `<div class="${cellClass(cell)}">${index}</div>`
        ).join('')}
        </div>`;
    }
}

export default function () {
    customElements.define('hello-checkerboard', Checkerboard);

    // At last we insert the web component into the playground element.
    const playground = document.querySelector('.playground');
    playground.innerHTML = '<hello-checkerboard size="8"></hello-checkerboard>';
}