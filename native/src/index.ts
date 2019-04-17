import 'mocha/mocha.css';
import 'mocha/mocha.js'


import './style.css';
import { components } from './components/index';
import { prefix } from './exos/index';


// Register all components
Object.keys(components)
    .forEach(key => customElements.define(key, components[key]));

// Setup mocha
mocha.setup('bdd');

// Main
const main = document.querySelector('dvx-main');

const handleHash = () => {
    if (location.hash.startsWith(prefix)) {
        const current = location.hash.substring(prefix.length);
        main.setAttribute('current', current);
    } else {
        // TODO load from localstorage if exists
    }
};

onhashchange = handleHash;
handleHash();
