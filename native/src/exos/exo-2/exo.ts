class HelloLiveCycle extends HTMLElement {
    constructor() {
        super();
    }

    // Step 1
    connectedCallback() {
        this.render();
        console.log('connected');
    }

    // Step 2
    disconnectedCallback() {
        console.log('disconnected');
    }

    render() {
        this.innerHTML = '<div>Connected!</div>';
    }
}

export default function () {
    customElements.define('hello-live-cycle', HelloLiveCycle);

    // At last we insert the web component into the playground element.
    const playground = document.querySelector('.playground');

    // Add content to test your web component
    const btn = document.createElement('button');
    btn.textContent = 'Toggle the HelloLiveCycle web component';

    const wcHolder = document.createElement('div');
    wcHolder.style.marginLeft = '1em';

    playground.appendChild(btn);
    playground.appendChild(wcHolder);

    btn.onclick = () => {
        wcHolder.innerHTML = wcHolder.innerHTML ?
            '' :
            '<hello-live-cycle></hello-live-cycle>';
    };

}