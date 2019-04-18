interface Cell {
    i: number;
    j: number;
    dark: boolean;
}

class Checkerboard2 extends HTMLElement {

    private size = 4;
    private dark = 'SaddleBrown';
    private light = 'PapayaWhip';

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
        // Step 1
        this.update();
    }

    // Step 2
    static get observedAttributes() {
        return ['size', 'dark', 'light'];
    }

    // Step 3
    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        switch (name) {
            case 'size':
                this.size = +newValue;
                this.update();
                break;
            case 'dark':
                this.dark = newValue;
                this.update();
                break;
            case 'light':
                this.light = newValue;
                this.update();
                break;
            default:
                console.warn('Unhandled attribute:', name);
        }
    }

    update() {
        const {size, dark, light} = this;

        const gridTemplate = `repeat(${size}, 1fr)`;
        const gridStyle = `grid-template: ${gridTemplate} / ${gridTemplate}; --dark: ${dark}; --light: ${light}`;
        const cellClass = (cell: Cell) => cell.dark ? 'dark' : 'light';

        this.innerHTML = `
        <div class="checkerboard" style="${gridStyle}">
            ${this.cells.map((cell, index) => `<div class="${cellClass(cell)}">${index}</div>`).join('')}
        </div>`;
    }
}

export default function () {
    customElements.define('hello-checkerboard2', Checkerboard2);

    const playground = document.querySelector('.playground');
    const updateAttribute = (attr: string) => (event: Event) => {
        const checkerboard = playground.querySelector('hello-checkerboard2');
        const value = (event.target as HTMLInputElement).value;
        checkerboard.setAttribute(attr, value);
    };

    // At last we insert the web component into the playground element.
    const defaultSize = '4';
    const defaultDarkColor = '#441a03';
    const defaultLightColor = '#b5915f';
    playground.innerHTML =
        `<hello-checkerboard2 size=${defaultSize} dark=${defaultDarkColor} light=${defaultLightColor}></hello-checkerboard2>
    <div class="form">
        <label>
            Dark Color
            <input id="dark" type="color" value="${defaultDarkColor}">
        </label>
        <label>
            Light Color
            <input id="light" type="color" value="${defaultLightColor}">
        </label>
        <label>
            Size
            <input id="size" type="range" value="${defaultSize}" min="2" max="16">
        </label>
    </div>`;

    ['dark', 'light', 'size'].forEach(attr => {
        const input = playground.querySelector(`input#${attr}`) as HTMLInputElement;
        input.onchange = updateAttribute(attr);
    });
}