import { expect } from 'chai';
import { StickyNote } from './exo';

describe('HTML Template', function () {

    describe('document', function () {
        it("should a template #sticky-note-template", function() {
            const snTemplate = document.getElementById('sticky-note-template');

            expect(snTemplate).not.equal(null, 'Template #sticky-note-template missing');
        });
    });

    describe('<sticky-note>', function () {
        const host = document.querySelector('.test-playground');

        it("should render template", function() {
            host.innerHTML = `<sticky-note></sticky-note>`;

            const wc = host.querySelector<StickyNote>('sticky-note');
            
            expect(wc.shadowRoot).not.equal(null, 'Shadow DOM missing');
            const note = wc.shadowRoot.querySelector(".sticky-note")
            expect(note).not.equal(null, 'Invalid content');
        });

        it("should insert slot element", function() {
            const content = `<div slot="note">Plouf</div>`;
            host.innerHTML = `<sticky-note>${content}</sticky-note>`;

            const wc = host.querySelector<StickyNote>('sticky-note');

            expect(wc.shadowRoot).not.equal(null, 'Shadow DOM missing');
            const slot = wc.shadowRoot.querySelector<HTMLSlotElement>('slot[name=note]');
            const nodes = slot.assignedNodes()

            expect(nodes[0]).not.equal(null, 'Slot missing');
            expect(nodes[0].textContent).equal('Plouf', 'Slot content missing');
        });

    });
});

