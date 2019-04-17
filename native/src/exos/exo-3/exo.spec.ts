import { expect } from 'chai';

describe('<hello-checkerboard>', function() {
    const host = document.querySelector('.test-playground');

    it("should display a 4x4 checkerboard", function() {
        host.innerHTML = '<hello-checkerboard size="4"></hello-checkerboard>';
        const wc = host.querySelector('hello-checkerboard');

        const children = wc.querySelectorAll('.dark, .light');
        expect(children.length).equal(16, 'Invalid content');
    });

    it("should display a 8x8 checkerboard", function() {
        host.innerHTML = '<hello-checkerboard size="8"></hello-checkerboard>';
        const wc = host.querySelector('hello-checkerboard');

        const children = wc.querySelectorAll('.dark, .light');
        expect(children.length).equal(64, 'Invalid content');
    });

    it("should display a 10x10 checkerboard", function() {
        host.innerHTML = '<hello-checkerboard size="8"></hello-checkerboard>';
        const wc = host.querySelector('hello-checkerboard');

        const children = wc.querySelectorAll('.dark, .light');
        expect(children.length).equal(64, 'Invalid content');
    });

});