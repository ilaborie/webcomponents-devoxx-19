import { LitElement, html, customElement, property } from "lit-element";


@customElement("hello-timer")
export class HelloTimer extends LitElement {
    private intervalId: number;

    @property() time = 0;

    render() {
        return html`<div>${this.time}</div>`;
    }

    // Step 1
    connectedCallback() {
        super.connectedCallback();
        this.intervalId = setInterval(() => this.time++, 1000);
    }

    // Step 2
    disconnectedCallback() {
        clearInterval(this.intervalId);
        super.disconnectedCallback();
    }
}