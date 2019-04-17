type CountdownState = 'idle' | 'run' | 'done';

export class Countdown extends HTMLElement {

    private input: HTMLInputElement;
    private _count = 4;
    get count(): number {
        return this._count;
    }

    set count(newCount: number) {
        this._count = newCount;
        // TODO Step 1
    }

    private div: HTMLDivElement;
    private _state: CountdownState = 'idle';
    private get state(): CountdownState {
        return this._state;
    }

    get countdownState(): CountdownState {
        return this.state;
    }

    private set state(newState: CountdownState) {
        this._state = newState;
        // TODO Step 1
        // TODO Step 7
    }

    constructor() {
        super();
    }

    triggerState() {
        // TODO Step 7
    }

    connectedCallback() {
        this.innerHTML = this.template();

        // bind event listeners
        const {updateCount, start, reset} = this;

        this.div = this.querySelector('div');

        // TODO Step 2

        // TODO Step 3

        // TODO Step 5
    }

    static get observedAttributes() {
        return ['count'];
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        switch (name) {
            case 'count':
                this.count = +newValue || 1; // default value is 1
                break;
        }
    }

    update() {
        // update count
        if (this.input) {
            this.input.value = '' + this._count;
        }
        // update state
        if (this.div) {
            this.div.classList.remove('idle', 'run', 'done');
            this.div.classList.add(this._state);
        }
    }

    start = () => {
        console.log('Start');
        // TODO Step 4

        setTimeout(() => {
            // TODO Step 4
        }, 1000 * this.count);
    };

    reset = () => {
        console.log('Reset');
        // TODO Step 6
    };
    updateCount = (event: Event) => {
        this.count = +(event.target as HTMLInputElement).value;
    };

    private template() {
        const {count, state} = this;

        return `
        <div class=${state}>
            <div class="idle">
                <header>Countdown</header>
                <label>
                    in seconds
                    <input type="number" min="1" max="10" value="${count}">
                </label>
                <button>Start</button>
            </div>
            <div class="run">
                <header>Running</header>
            </div>
            <div class="done">
                <header>Done</header>
                <button>Reset</button>
            </div>
        </div>`;
    }
}

export default function () {
    customElements.define('hello-countdown', Countdown);

    const playground = document.querySelector('.playground');

    playground.innerHTML = `
<hello-countdown></hello-countdown>
<div class="state idle"></div>`;

    playground.querySelector('hello-countdown')
        .addEventListener('state', (event: Event) => {
            const classes = playground.querySelector('.state').classList;
            classes.remove('idle', 'run', 'done');
            classes.add((event as CustomEvent<CountdownState>).detail);
        });

}