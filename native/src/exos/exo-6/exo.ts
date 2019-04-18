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
        // Step 1
        this.attachShadow({mode:'open'});
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
        // Step 2
        this.shadowRoot.innerHTML = this.template();
    }

    template() {
        // Step 3
        return `
            <!-- Step 3 -->
            <style>
            .card {
    color: #333;
    padding: 4px;
    border-radius: .25em;
    border: thin solid rgba(0, 0, 0, .12);
}

.card.depth-1 {
    box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 
                0 1px 2px rgba(0, 0, 0, .24);
}

.card.depth-2 {
    box-shadow: 0 3px 6px rgba(0,0,0,.16), 
                0 3px 6px rgba(0,0,0,.23);
}

.card.depth-3 {
    box-shadow: 0 10px 20px rgba(0,0,0,.19), 
                0 6px 6px rgba(0,0,0,.23);
}

.card.depth-4 {
    box-shadow: 0 14px 28px rgba(0,0,0,.25), 
                0 10px 10px rgba(0,0,0,.22);
}

.card.depth-5 {
    box-shadow: 0 19px 38px rgba(0,0,0,.30),
                0 15px 12px rgba(0,0,0,.22);
}</style>
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