import { LitElement, html, customElement } from "lit-element";

// Steps 1 & 2
@customElement("hello-world")
export class HelloWorld extends LitElement {

    // Step 3
    render() {
        return html`<div>Hello World!</div>`;
    }
}
