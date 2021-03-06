

export class StickyNote extends HTMLElement {

    private stickyNotesTemplate: HTMLTemplateElement;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        // TODO Step 2
    }

    connectedCallback() {
        window.ShadyCSS && window.ShadyCSS.styleElement(this);

        // TODO Step 3
    }

}

export default function () {
    // load style and template using webpack
    const style = `
:host {
    padding: 1em;
}

.sticky-note {
    font: 2.5em 'Permanent Marker', cursive;
    line-height: 1.5;
    border: 0;
    border-radius: .125em;
    background: linear-gradient(#F9EFAF, #F7E98D);
    box-shadow: 0 .25rem .375rem rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: box-shadow .5s ease;
    width: 8em;
    height: 8em;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
}

.sticky-note:hover {
    box-shadow: 0 .375rem .5rem rgba(0, 0, 0, 0.15);
}

.sticky-note:focus {
    box-shadow: 0 .375rem .75rem rgba(0, 0, 0, 0.2);
    outline: none;
}

::slotted(*) {
    color: forestgreen;
}`;

    const htmlTemplate = `
<div class="sticky-note">
    <p>
        <slot name="note">A Sticky Note</slot>
    </p>
</div>`;

    // Create template
    const templateElt = document.createElement('template');
    // TODO Step 1
    
    document.body.appendChild(templateElt);

    // If we need a polyfill for ShadowDom and CSS
    window['ShadyCSS'] && window['ShadyCSS'].prepareTemplate(templateElt, 'sticky-note');

    // Define the custom element
    customElements.define('sticky-note', StickyNote);

    // Create playground content
    const playground = document.querySelector('.playground');
    playground.innerHTML = `
    <sticky-note>
        <!-- TODO Step 4 -->
    </sticky-note>`;
}