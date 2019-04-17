import { expect } from 'chai';

describe('<hello-world>', function() {
    const host = document.querySelector('.test-playground');

    it("should contains 'Hello World!'", function() {
        host.innerHTML = '<hello-world></hello-world>';
        const wc = host.querySelector('hello-world');

        const content = wc.innerHTML;
        expect(content).equal('<div>Hello World!</div>', 'Invalid content');
    });
});