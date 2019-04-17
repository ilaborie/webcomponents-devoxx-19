import { expect } from 'chai';
import { spy } from 'sinon';

describe('<hello-live-cycle>', function () {
    const host = document.querySelector('.test-playground');
    const spied = spy(console, "log");

    it("should contains 'Connected!'", function () {
        host.innerHTML = '<hello-live-cycle></hello-live-cycle>';
        const wc = host.querySelector('hello-live-cycle');

        const content = wc.innerHTML;
        expect(content).equal('<div>Connected!</div>', 'Invalid content');
    });

    it("should log connected", function () {
        host.innerHTML = '';
        spied.resetHistory();
        host.innerHTML = '<hello-live-cycle></hello-live-cycle>';

        expect(spied.called).equal(true, 'No call to console.log()');
        expect(spied.lastCall.args[0]).equal('connected', `Invalid message, it should be 'connected'`);
    });

    it("should log disconnected", function () {
        host.innerHTML = '<hello-live-cycle></hello-live-cycle>';
        const wc = host.querySelector('hello-live-cycle');

        spied.resetHistory();
        wc.remove();
        expect(spied.called).equal(true, 'No call to console.log()');
        expect(spied.lastCall.args[0]).equal('disconnected', `Invalid message, it should be 'disconnected'`);
    });
});