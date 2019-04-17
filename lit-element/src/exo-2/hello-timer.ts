import { LitElement, html, customElement, property } from "lit-element";


@customElement("hello-timer")
export class HelloTimer extends LitElement {
    private intervalId: number;

    @property() time = 0;

    render() {
        return html`<div>${this.time}</div>`;
    }

    // TODO Step 1

    // TODO Step 2
}