// Step 1 & 2
class HelloWorld extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<div>Hello World!</div>`;
    }
}

export default function () {
    // Step 3
    customElements.define('hello-world', HelloWorld);

    // At last we insert the web component into the playground element.
    document.querySelector('.playground').innerHTML = `<hello-world></hello-world>`;
}