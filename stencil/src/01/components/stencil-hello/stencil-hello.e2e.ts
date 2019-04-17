import { newE2EPage } from '@stencil/core/testing';

const tag = process.env.IS_SOLUTION
    ? 'stencil-hello-solution'
    : 'stencil-hello';
const content = `<${tag}></${tag}>`;

describe('app-home', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(content);

    const element = await page.find(tag);
    expect(element.innerHTML.trim()).toEqual('<div>Hello World</div>');
  });

});
