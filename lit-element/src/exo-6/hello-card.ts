import { LitElement, html, customElement, css, property } from "lit-element";


@customElement("hello-card")
export class HelloCard extends LitElement {

    static get styles() {
        return css`
:host {
    display: block;
    position: relative;
    border-radius: .1em;
    background: white;
    box-sizing: border-box;
    margin-bottom: 15px;
}
:host > div {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all .3s cubic-bezier(.25, .8, .25, 1);
}

:host > div:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.header {
    margin: 0;
    display: inline-block;
    padding: 5px 15px;
}

.title{
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 18px;
}

.subtitle{
    margin-top: 0;
    margin-bottom: 0;
    color: gray;
    font-size: 15px;
    line-height: 15px;
}

.content{
    padding: 15px;
}`;
    }

    render() {
        return html`
<div>
    <div class="header">
        <h2>
            <!-- TODO Step 1 -->
        </h2>
        <h3 class="subtitle">
            <!-- TODO Step 1 -->
        </h3>
    </div>
    <div class="content">
        <!-- TODO Step 1 -->
    </div>
</div>`;
    }
}
