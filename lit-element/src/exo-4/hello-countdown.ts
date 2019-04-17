import { LitElement, html, customElement, css, property } from "lit-element";

type CountdownState = 'idle' | 'run' | 'done';

@customElement("hello-countdown")
export class HelloCountdown extends LitElement {

    @property() count: number = 4;
    @property({ reflect: false }) state: CountdownState = 'idle';

    private updateCount = (event: Event) => {
        this.count = +(event.target as HTMLInputElement).value;
    };

    start = () => {
        console.log('Start');
        // TODO Step 3

        setTimeout(() => {
            console.log('Done');
            // TODO Step 3
        }, 1000 * this.count);
    };

    reset = () => {
        console.log('Reset');
        // TODO Step 5
    };

    triggerState() {
        // TODO Step 6
    }

    // TODO Step 7
    
    render() {
        const { count, state, start, reset, updateCount } = this;
        return html`
        <div class=${state}>
            <div class="idle">
                <header>Countdown</header>
                <label>
                    in seconds
                    <!-- TODO Step 1 -->
                    <input type="number" min="1" max="10" value=${count}  >
                </label>
                <!-- TODO Step 2 -->
                <button  >Start</button>
            </div>
            <div class="run">
                <header>Running</header>
            </div>
            <div class="done">
                <header>Done</header>
                <!-- TODO Step 4 -->
                <button  >Reset</button>
            </div>
        </div>`;
    }

    static get styles() {
        return css`
* > div {
    display: none;
}

header {
    font-size: 2em;
}

.idle .idle,
.run .run,
.done .done {
    display: initial;
}

.run .run header {
    display: inline-block;
    overflow: hidden;
    height: 1.3em;
    margin-top: -0.3em;
    line-height: 1.5em;
    vertical-align: text-bottom;
}

.run .run header::after {
    margin-left: .25em;
    content: var(--waiting, "...");
    animation: spin4 1s steps(4) infinite;
    display: inline-table;
    white-space: pre;
    text-align: left;
}

@keyframes spin4 {
    to {
        transform: translateY(-6.0em);
    }
}`;
    }
}
