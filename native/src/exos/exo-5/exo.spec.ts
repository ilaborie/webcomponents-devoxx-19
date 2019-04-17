import { html, render } from 'lit-html';
import { spy } from 'sinon';
import { expect } from 'chai';

import { Countdown } from './exo';

describe('<hello-countdown>', function () {
    const host = document.querySelector('.test-playground');
    const spied = spy(console, "info");

    it("should listen count attribute", function () {
        render(html`<hello-countdown count="2"></hello-countdown>`, host);
        const wc = host.querySelector('hello-countdown');
        const input = wc.querySelector<HTMLInputElement>('input');
        const newCount = 10;

        wc.setAttribute('count', '' + newCount);

        expect(input.valueAsNumber).equal(newCount, 'Invalid input value');
    });

    it("could be update with JS", function () {
        render(html`<hello-countdown count="2"></hello-countdown>`, host);
        const wc = host.querySelector<Countdown>('hello-countdown');
        const input = wc.querySelector<HTMLInputElement>('input');
        const newCount = 10;

        wc.count = 10;

        expect(input.valueAsNumber).equal(newCount, 'Invalid input value');
    });

    it("should update the count with the input field", function () {
        render(html`<hello-countdown count="2"></hello-countdown>`, host);
        const wc = host.querySelector<Countdown>('hello-countdown');
        const input = wc.querySelector<HTMLInputElement>('input');
        const newCount = 10;

        input.value = '' + newCount;
        // XXX toggle change event
        const event = new Event('change', { bubbles: true });
        input.dispatchEvent(event);

        expect(wc.count).equal(newCount, 'Invalid input value');
    });

    it("should change to 'run' state after click on start button", function () {
        render(html`<hello-countdown count="2"></hello-countdown>`, host);
        const wc = host.querySelector<Countdown>('hello-countdown');
        const button = wc.querySelector<HTMLButtonElement>('.idle button');

        expect(wc.countdownState).equal('idle', 'Invalid initial state');
        button.click();

        expect(wc.countdownState).equal('run', 'Invalid run state');
    });

    it("should change to 'done' state after countdown", function () {
        render(html`<hello-countdown count="1"></hello-countdown>`, host);
        const wc = host.querySelector<Countdown>('hello-countdown');
        const button = wc.querySelector<HTMLButtonElement>('.idle button');

        expect(wc.countdownState).equal('idle', 'Invalid initial state');
        button.click();
        expect(wc.countdownState).equal('run', 'Invalid run state');
        this.timeout(2000);
        return new Promise(resolve => setTimeout(() => resolve(), 1000))
            .then(() => {
                expect(wc.countdownState).equal('done', 'Invalid final state');
            });
    });

    it("should trigger event when state change", function () {
        render(html`<hello-countdown count="1"></hello-countdown>`, host);
        const wc = host.querySelector<Countdown>('hello-countdown');
        const startBtn = wc.querySelector<HTMLButtonElement>('.idle button');
        const resetBtn = wc.querySelector<HTMLButtonElement>('.done button');

        spied.resetHistory();
        wc.addEventListener('state', (event: Event) => console.info((event as CustomEvent).detail));

        startBtn.click();

        this.timeout(2000);
        return new Promise(resolve => setTimeout(() => resolve(), 1010))
            .then(() => {
                expect(spied.calledWith('run')).equal(true, 'Invalid intermediate state');
                expect(spied.calledWith('done')).equal(true, 'Invalid final state');
            })
            .then(() => resetBtn.click())
            .then(() =>
                expect(spied.calledWith('idle')).equal(true, 'Invalid initial state')
            );
    });

});