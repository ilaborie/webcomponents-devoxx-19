declare global {
    interface ShadyCssType {
        styleElement(elt: HTMLElement): void
        prepareTemplate(template: HTMLTemplateElement, id: string): void
    }
    interface Window {
        ShadyCSS?: ShadyCssType;
    }
}

export class Card extends HTMLElement {

    private _depth = 4;
    get depth(): number {
        return this._depth;
    }
    set depth(newDepth: number) {
        this._depth = newDepth;
        this.update();
    }

    private innerContent: Node[] = [];

    constructor() {
        super();
        // TODO Step 1
    }

    connectedCallback() {
        this.innerContent = Array.from(this.childNodes);
        // FIXME ShadyCSS does not work
        // window.ShadyCSS && window.ShadyCSS.styleElement(this);

        this.update();
    }

    static get observedAttributes() {
        return ['depth'];
    }
    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        switch (name) {
            case 'depth':
                this.depth = +newValue || 2;
                break;
        }
    }

    update() {
        // TODO Step 2
        this.innerHTML = this.template();
    }

    template() {
        // TODO Step 3
        return `
            <!-- Step 3 -->
           
            <div class="${`card depth-${this.depth}`}">
                <slot></slot>
            </div>
        `;
    }

}

export default function () {
    customElements.define('hello-card', Card);

    const playground = document.querySelector('.playground');

    playground.innerHTML = `
    <hello-card depth="2">
        <details>
            <summary>Title</summary>
            <p>lorem ipsum ...</p>
        </details>
    </hello-card>
    <input type="range" min="1" max="5" value="2">`;
    playground.querySelector('input').onchange = (event: Event) =>
        playground.querySelector('hello-card')
            .setAttribute('depth', (event.target as HTMLInputElement).value);
}