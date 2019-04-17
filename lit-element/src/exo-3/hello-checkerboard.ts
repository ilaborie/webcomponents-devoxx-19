import { LitElement, html, customElement, css, property } from "lit-element";

interface Cell {
    i: number;
    j: number;
    dark: boolean;
}

@customElement("hello-checkerboard")
export class HelloCheckerBoard extends LitElement {

    // TODO Step 1
    size;

    get cells(): Cell[] {
        const result: Cell[] = [];
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                result.push({ i, j, dark: (i + j) % 2 === 1 });
            }
        }
        return result;
    }

    static get styles() {
        return css`
.checkerboard {
    display: grid;
    border: .5em outset;
    text-align: center;
}

.checkerboard .dark,
.checkerboard .light {
    font-family: monaco, monospace;
    padding: .125em;
    min-width: 3ch;
    min-height: 3ch;
    line-height: 3ch;
    font-size: .75em;
    display: flex;
    justify-content: center;
}
.checkerboard .dark {
    /* Step 3 */
    background-color: var(--dark, black);
    color: hsla(0, 100%, 100%, .35);
}
.checkerboard .light {
    /* Step 3 */
    background-color: var(--light, white);
    color: rgba(0, 0, 0, .25);
}`;
    }

    render() {
        // TODO Step 2
        const gridTemplate = `repeat(${this.size}, 1fr)`;
        const gridStyle = `grid-template: ${gridTemplate} / ${gridTemplate};`;
        const cellClass = (cell: Cell) => cell.dark ? 'dark' : 'light';

        return html`
        <style>
:host {
     /* TODO Step 3 */
}
        </style>
        <div class="checkerboard" style=${gridStyle}>
            ${this.cells.map((cell, index) =>
                html`<div class=${cellClass(cell)}>${index}</div>`
            )}
        </div>`;
    }
}
