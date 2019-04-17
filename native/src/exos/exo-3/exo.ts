interface Cell {
    i: number;
    j: number;
    dark: boolean;
}

class Checkerboard extends HTMLElement {

    get size(): number {
        // TODO Step 1
        return 42;
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
        // TODO Step 2
        const gridStyle = ``;

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