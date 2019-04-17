import { newE2EPage } from '@stencil/core/testing';

const tag = process.env.IS_SOLUTION
  ? 'stencil-todoitem-solution'
  : 'stencil-todoitem';

describe('stencil-todoitem', () => {

  it('should display the right default content', async () => {
    const page = await newE2EPage();
    await page.setContent(`<${tag}></${tag}>`);

    const element = await page.find(tag + ' > div');
    expect(element).not.toHaveClass('completed');
    await page.$eval(tag, (elm: any) => {
      elm.completed = true;
    });
    await page.waitForChanges();
    expect(element).toHaveClass('completed');
  });

  it('should display text in a span', async () => {
    const page = await newE2EPage();
    await page.setContent(`<${tag}></${tag}>`);

    const element = await page.find(tag + ' span');
    expect(element.textContent).toEqual('');
    element.innerText = 'My text';
    await page.waitForChanges();
    expect(element.textContent).toEqual('My text');
  });

  it('should trigger the right event when button clicked', async () => {
    const page = await newE2EPage();
    const uid = 12345;
    await page.setContent(`<${tag} uid="${uid}"></${tag}>`);

    const element = await page.find(tag);
    const button = await page.find(tag + ' button');
    const todoCompleted = await element.spyOnEvent('todoCompleted');

    button.click();

    await page.waitForChanges();

    expect(todoCompleted).toHaveReceivedEventDetail(uid);
  });

});
