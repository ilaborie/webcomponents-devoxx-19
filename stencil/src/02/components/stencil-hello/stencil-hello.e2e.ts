import { newE2EPage } from '@stencil/core/testing';

const tag = process.env.IS_SOLUTION
    ? 'stencil-hello-solution'
    : 'stencil-hello';
const content = `<${tag}></${tag}>`;

describe('02 stencil-hello', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(content);

    const element = await page.find(tag);
    expect(element.innerHTML.trim()).toEqual('<div>0</div>');
    await delay(3100);
    await page.waitForChanges();
    expect(element.innerHTML.trim()).toEqual('<div>3</div>');
  });

});


function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}