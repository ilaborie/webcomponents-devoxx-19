import { expect } from 'chai';

describe('DOM', function () {
    const playground = document.querySelector('.playground');

    it("should display 'Hello 42!'", function () {
        const div = playground.firstChild as Element;

        expect(div).not.equal(null, 'Missing a inner child');
        expect(div.tagName).equal('DIV', 'Invalid tag');
        expect(div.textContent).equal('Hello 42!', 'Invalid content');
    });
});
