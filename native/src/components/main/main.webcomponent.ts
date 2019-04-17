import {Exercise, exos, prefix} from '../../exos';

const codelabsUrl = 'https://devoxx-fr-2019-webcomponents.firebaseapp.com/codelabs';

export class MainComponent extends HTMLElement {
    useShadowDom = true;

    private shadowStyle = `
ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: .5rem;
    padding: .25rem;
    padding-left: 0;
}

h2 {
    margin: .5em;
    color: white;
}
a {
    margin: .5em;
    color: var(--col3);
}

.finish {
  display: flex;
  flex-direction: column;
  margin: .5em;
  color: white;
  text-align: center;
}

.previous,
.next,
.start {
    margin: .5em;
    padding: .5em;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
    background: forestgreen;
    border-radius: .25em;
    border: thin solid transparent;
    transition: all .4s;
}

.next:hover,
.previous:hover {
    border: thin solid hsla(0, 100%, 100%, .5);
    background-image: linear-gradient(transparent, rgba(0, 0, 0, .05) 40%, rgba(0, 0, 0, .1));
}

.previous::before {
    content: '◀︎';
    margin-right: .5em;
}
.next::before {
    content: '▶️';
    margin-right: .5em;
}`;

    private _current: number | null = null;
    private get current(): number | null {
        return this._current;
    }

    private set current(newCurrent: number | null) {
        if (this._current !== newCurrent) {
            this._current = newCurrent;
            this.update();
            this.runCode();
        }
    }

    private get exo(): Exercise | null {
        return typeof this.current === 'number' ? exos[this.current] : null;
    }

    private get visited(): Exercise[] {
        return exos.slice(0, this.current + 1);
    }

    private ok = false;
    private finish = false;
    private runner: any;

    constructor() {
        super();
        if (this.useShadowDom) {
            this.attachShadow({mode: 'open'});
        }
    }

    get host() {
        return (this.useShadowDom) ? this.shadowRoot : this;
    }

    // Observe
    static observedAttributes: string[] = ['current'];

    // Life cycles
    connectedCallback() {
        this.update();
    }

    attributeChangedCallback(attrName: string, oldValue: string | null, newValue: string | null) {
        switch (attrName) {
            case 'current':
                const tryCast = +newValue;
                this.current = isNaN(tryCast) ? null : tryCast;
                break;
        }
    }

    // Render
    update() {
        this.host.innerHTML = this.template();
    }

    template() {
        const {shadowStyle, current, exo} = this;
        const finish = current === 8;

        return `<style>${shadowStyle}</style>
        <dvx-navbar names=""></dvx-navbar>
        
        
        ${exo ? `<h2>[${current}] CodeLab #${current + 2} - ${exo.name}</h2>` : ``}
        ${exo ? `<a href="${codelabsUrl}/web-component-native/${exo.codelab}/">CodeLabs Instructions</a>` : ``}
        ${!finish && current > 0 ? `<a href="${prefix}${current - 1}" class="previous">Previous</a>` : ``}
        ${current !== null && !finish ? `<a href="${prefix}${current + 1}" class="next">Next</a>` : ``}
        ${current === null ? `<a href="${prefix}0" class="next">Start</a>` : ``}
        ${finish ? `<section class="finish">
<h2>👏 Congratulations ! 🎉</h2>
  <p>You have ended the 'native' web component' tutorial.</p>
  <p>You can continue with the <a href="${codelabsUrl}/web-components-stencil/installation/">Stencil tutorial</a> or the <a href="${codelabsUrl}/web-component-lit-element/installation/">LitElement tutorial</a></p>
</section>` : ``}`;
    }

    runCode() {
        const {exo} = this;
        if (exo !== null) {
            console.log('run code', exo.name);
            document.querySelector('.playground').innerHTML = '';
            exo.runner();
            // Eval test
            this.runTest(exo);
        }
    }

    runTest(exo: Exercise) {
        // Clear tests result
        document.querySelector('#mocha').innerHTML = '';
        mocha.suite.suites = [];

        return exo.tests()
            .then(() => {
                this.runner = mocha.run();
                this.runner.on('end', () => this.afterTest())
            });
    }

    afterTest() {
        const {passes, failures} = this.runner.stats
        const hasNoFailures = (passes > 0) && (failures === 0);
        if (this.ok !== hasNoFailures) {
            this.ok = hasNoFailures;
            this.finish = (this.current === (exos.length - 1));
            this.update();
        }
    }

}
