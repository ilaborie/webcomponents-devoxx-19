import { newE2EPage } from '@stencil/core/testing';

const tag = process.env.IS_SOLUTION
  ? 'stencil-card-solution'
  : 'stencil-card';

const luck = {
  name: 'Luke Skywalker', location: 'Tatooine', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis posuere venenatis. Vivamus interdum sed justo nec porta. Sed ac sagittis diam. Praesent vestibulum efficitur porta. Aliquam commodo ultricies nibh, at faucibus orci condimentum non. Proin sed dignissim purus.'
}

describe('stencil-todolist', () => {
  it('should display 3 empty slots by default', async () => {
    const page = await newE2EPage();
    await page.setContent(`<${tag}></${tag}>`);

    const element = await page.find(tag + ' >>> div');
    expect(element.innerHTML.trim()).toEqual('<div class=\"header\"><h2><slot name=\"title\"></slot></h2><h3 class=\"subtitle\"><slot name=\"subtitle\"></slot></h3></div><div class=\"content\"><slot name=\"content\"></slot></div>');
  });
});
