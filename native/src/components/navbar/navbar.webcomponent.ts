import {prefix} from '../../exos';

export class NavbarComponent extends HTMLElement {
    useShadowDom = true;

    private _names: string[] = [];
    private get names(): string[] {
        return this._names;
    }

    private set names(newNames: string[]) {
        this._names = newNames;
        this.update();
    }

    private shadowStyle = `
nav {
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    border-bottom: .25rem solid var(--col2);
    background-image: var(--logo);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center right;
    background-origin: content-box;
}

h1 {
    margin: 0;
    padding: .25em;
}
a {
    color: var(--col3);
    text-decoration: none;
    margin: .125em .5em;
    padding: .25em .5em;
    display: flex;
    justify-content: center;
    align-items: center;
    background: hsla(0, 100%, 100%, .15);
    transition: all .2s;
    border-radius: .125em;
}
a.home {
    width: 2em;
    height: 2em;
    display: inline-block;
    position: relative;
}
a.home::before {
    content: '';
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: var(--bgHome);
    background-size: cover;
}`;

    constructor() {
        super();
        if (this.useShadowDom) {
            this.attachShadow({mode: 'open'});
        }
    }

    get host() {
        return (this.useShadowDom) ? this.shadowRoot : this;
    }

    //
    static observedAttributes: string[] = ['names'];

    // Life cycles
    connectedCallback() {
        this.update();
    }

    attributeChangedCallback(attrName: string, oldValue: string | null, newValue: string | null) {
        switch (attrName) {
            case 'names':
                this.names = (newValue || '')
                    .split('|')
                    .map(name => name.trim());
        }
    }

    // Render
    update() {
        this.host.innerHTML = this.template();
    }

    template() {
        const {shadowStyle, names} = this;

        return `
            <style>${shadowStyle}</style>
            <nav>
                <a class="home" href="/" aria-label="Home"></a>
                <h1>Web Component - Native</h1>
                ${names.map((name, index) => `<a href="${prefix}${index}">${name}</a>`).join('')}
            </nav>`;
    }

}