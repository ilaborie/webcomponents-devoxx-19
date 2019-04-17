import { expect } from 'chai';
import { Card } from './exo';

describe('<hello-card>', () => {
    const host = document.querySelector('.test-playground');

    it("should have shadowRoot", () => {
        host.innerHTML = '<hello-card></hello-card>';
        const wc = host.querySelector<Card>('hello-card');

        expect(wc.shadowRoot).not.equal(null, 'Shadow DOM missing');
    });

    it("should have custom style", () => {
        host.innerHTML = '<hello-card></hello-card>';
        const wc = host.querySelector<Card>('hello-card');

        const style = getComputedStyle(wc.shadowRoot.querySelector('.card'));
        expect(style.paddingTop).equal('4px', 'Inner style not applied');
    });

    it("should have copied inner code", () => {
        const inner = '<h1>Plop!</h1>';
        host.innerHTML = `<hello-card>${inner}</hello-card>`;
        const wc = host.querySelector<Card>('hello-card');

        expect(wc.shadowRoot.innerHTML).not.equal(inner, 'Content not copied');
    });

});