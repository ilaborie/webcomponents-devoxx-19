import { LitElement, html, customElement, property, css, TemplateResult } from "lit-element";
import "./exo-1/hello-world";
import "./exo-2/hello-timer";
import "./exo-3/hello-checkerboard";
import "./exo-4/hello-countdown";
import "./exo-5/hello-sun";
import "./exo-6/hello-card";
import "./exo-6/hello-users";

import "cypress-daywalker/cypress-daywalker";

// <!-- Testing WebComponent in Cypress -->
// <script src="./node_modules/cypress-daywalker/cypress-daywalker.js"></script>

interface Exercise {
  name: string;
  codelab: string;
  template: TemplateResult;
}

const codelabsUrl = 'https://devoxx-fr-2019-webcomponents.firebaseapp.com/codelabs';

const app = document.querySelector<MainApp>('main-app');

// Playground update for hello-checkerboard
const defaultSize = '4';
const defaultDarkColor = '#441a03';
const defaultLightColor = '#b5915f';

const updateAttribute = (attr: string) => (event: Event) => {
  if (app && app.shadowRoot) {
    const checkerboard = app.shadowRoot.querySelector('.playground hello-checkerboard');
    if (checkerboard) {
      const value = (event.target as HTMLInputElement).value;
      checkerboard.setAttribute(attr, value);
    }
  }
};

// Playground update for hello-countdown
const updateState = (event: Event) => {
  const app = document.querySelector('main-app');
  if (app && app.shadowRoot) {
    const state = app.shadowRoot.querySelector('.playground .state');
    if (state) {
      const classes = state.classList;
      classes.remove('idle', 'run', 'done');
      classes.add(event['detail']);
    }
  }
};

// Routing
function routing() {
  const ex = +location.hash.substring(1);
  app.current = ex;
}
window.addEventListener('hashchange', routing, false);
routing();

// Main App
@customElement("main-app")
export class MainApp extends LitElement {

  @property() exercises: Exercise[] = [
    {
      name: 'Hello World',
      codelab: 'hello-world',
      template: html`<hello-world></hello-world>`
    },
    {
      name: 'Lifecycle',
      codelab: 'lifecycle-hooks',
      template: html`<hello-timer></hello-timer>`
    },
    {
      name: 'Properties',
      codelab: 'properties',
      template: html`
      <hello-checkerboard
      size=${defaultSize}
      dark=${defaultDarkColor}
      light=${defaultLightColor}></hello-checkerboard>
      <div class="form">
        <label>
            Dark Color
            <input type="color" value=${defaultDarkColor} @change=${updateAttribute('dark')}>
        </label>
        <label>
            Light Color
            <input type="color" value=${defaultLightColor} @change=${updateAttribute('light')}>
        </label>
        <label>
            Size
            <input type="range" value=${defaultSize} min="2" max="16" @change=${updateAttribute('size')}>
        </label>
    </div>`
    },
    {
      name: 'Events',
      codelab: 'events',
      template: html`
      <hello-countdown @state=${updateState}></hello-countdown>
      <div class="state idle"></div>
      `
    },
    {
      name: 'Shadow DOM',
      codelab: 'shadow-dom',
      template: html`<hello-sun></hello-sun>`
    },
    {
      name: 'Slot',
      codelab: 'slot',
      template: html`<hello-users></hello-users>`
    }
  ];
  @property({ type: Number }) current: number;

  static get styles() {
    return css`
section {
  display: flex;
  flex-direction: column;
  margin: .5em;
  color: white;
}
section.done {
  text-align: center;
}
a.btn {
  padding: .5em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  background: var(--col3);
  border-radius: .25em;
  border: thin solid transparent;
  transition: all .4s;
  font-size: 1em;
}
a {
  margin: .5em 0;
  color: var(--col3, #4183C4);
}
.playground {
    margin: .5em 0;
    padding: .25rem;
    border: 1em solid transparent;
    background: linear-gradient(white, white) padding-box,
      repeating-linear-gradient(-45deg, black 0, black 25%,
      gold 0, gold 50%) 0 / 4em 4em;
    color: var(--col1);
    animation: ants 180s linear infinite;
    border-radius: .25em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 8em;
  }
.playground:empty::before {
  content: 'Fill .playground ...';
  color: rgba(0, 0, 0, .5);
}

@keyframes ants {
  to {
    background-position: 100% 100%
  }
}
.playground .form {
  margin: 0 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-self: stretch;
}

.playground .state {
	font-size: 3em;
}

.playground .state.idle::before {
	content: '😴';
}

.playground .state.run::before {
	content: '⏰';
}

.playground .state.done::before {
	content: '🎊';
}

.playground blockquote {
  width: 80vmin;
  height: 67vmin;
  padding: 2em;
  background: url('./assets/sun.jpg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.playground blockquote p::before {
  font-size: 2.5em;
  font-family:cursive;
  color: black;
  text-shadow: .1em .1em .1em white;
  content: 'Même la nuit la plus sombre prendra fin et le soleil se lèvera';
}

.playground blockquote footer::after {
  font-size: 1.5em;
  color: black;
  text-shadow: .1em .1em .1em white;
  content: ' Victor Hugo';
}

.playground blockquote span::before {
  color: rgba(0,0,0,.5);
  text-shadow: .1em .1em .1em white;
  content: 'Photo by Zwaddi on Unsplash';
}
`;
  }

  render() {
    const done = (this.current + 1) > this.exercises.length;
    const ex = this.exercises[this.current];
    const {current}=this;
    return done ? html`
<section class="done">
  <h2>👏 Congratulations ! 🎉</h2>
  <p>You have ended the 'LitElement' web component' tutorial.</p>
  <p>You can continue with the <a href="${codelabsUrl}/web-components-stencil/installation/">Stencil tutorial</a></p>
</section>
    `: html`
<section>
 
  <h2>[${current+1}] CodeLab #${current + 2} - ${ex.name}</h2>
  <a href="${codelabsUrl}/web-component-lit-element/${ex.codelab}/">CodeLabs Instructions</a>
  ${current === 0 ? html`` : html`<a class="btn" href=${'#' + (current - 1)}>◀︎ Previous</a>`}
  <div class="playground">
    ${ex.template}
  </div>
  <a class="btn" href=${'#' + (current + 1)}>Next ►</a>
</section>
    `;
  }
}
