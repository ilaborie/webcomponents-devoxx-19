import { expect } from 'chai';

describe('<hello-checkerboard2>', function() {
    const host = document.querySelector('.test-playground');

    it("should observe size", function() {
        host.innerHTML = '<hello-checkerboard2 size="4"></hello-checkerboard2>';
        const wc = host.querySelector('hello-checkerboard2');
        const newSize = 10

        wc.setAttribute('size', '' + newSize);

        const children = wc.querySelectorAll('.dark, .light');
        expect(children.length).equal(newSize ** 2, 'Invalid content');
    });

    it("should observe dark", function() {
        host.innerHTML = '<hello-checkerboard2 size="4" dark="#000"></hello-checkerboard2>';
        const wc = host.querySelector('hello-checkerboard2');
        const newColor = 'rgb(139, 69, 19)'; // SaddleBrown

        wc.setAttribute('dark', newColor);

        const dark = wc.querySelector('.dark');
        const style = getComputedStyle(dark);
        expect(style.backgroundColor).equal(newColor, 'Invalid background');
    });

    it("should observe light", function() {
        host.innerHTML = '<hello-checkerboard2 size="4" light="#fff"></hello-checkerboard2>';
        const wc = host.querySelector('hello-checkerboard2');
        const newColor = 'rgb(255, 239, 213)'; // PapayaWhip

        wc.setAttribute('light', newColor);

        const dark = wc.querySelector('.light');
        const style = getComputedStyle(dark);
        expect(style.backgroundColor).equal(newColor, 'Invalid background');
    });

});