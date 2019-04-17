import { newE2EPage } from '@stencil/core/testing';

const tag = process.env.IS_SOLUTION
  ? 'stencil-todolist-solution'
  : 'stencil-todolist';
const tagChildren = process.env.IS_SOLUTION
  ? 'stencil-todoitem-solution'
  : 'stencil-todoitem';

describe('stencil-todolist', () => {
  it('should display 3 stencil-todoitem by default', async () => {
    const page = await newE2EPage();
    await page.setContent(`<${tag}></${tag}>`);

    const element = await page.findAll(tag + ' > ' + tagChildren);
    expect(element.length).toEqual(3);
  });
});
