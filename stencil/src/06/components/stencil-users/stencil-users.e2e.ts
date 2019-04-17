import { newE2EPage } from '@stencil/core/testing';

const tag = process.env.IS_SOLUTION
  ? 'stencil-users-solution'
  : 'stencil-users';
const tagChildren = process.env.IS_SOLUTION
  ? 'stencil-card-solution'
  : 'stencil-card';

describe('stencil-users', () => {
  it('should display 3 stencil-todoitem by default', async () => {
    const page = await newE2EPage();
    await page.setContent(`<${tag}></${tag}>`);

    const element = await page.findAll(tag + ' >>> ' + tagChildren);
    expect(element[0].outerHTML.trim()).toEqual(`<${tagChildren} class=\"hydrated\"><span slot=\"title\">Luke Skywalker</span><span slot=\"subtitle\">Tatooine</span><span slot=\"content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis posuere venenatis. Vivamus interdum sed justo nec porta. Sed ac sagittis diam. Praesent vestibulum efficitur porta. Aliquam commodo ultricies nibh, at faucibus orci condimentum non. Proin sed dignissim purus.</span></${tagChildren}>`);
    expect(element[1].outerHTML.trim()).toEqual(`<${tagChildren} class=\"hydrated\"><span slot=\"title\">C-3PO</span><span slot=\"subtitle\">Tatooine</span><span slot=\"content\">Duis eleifend, elit vitae efficitur vestibulum, tellus eros sollicitudin dolor, a bibendum erat mauris vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In laoreet sodales commodo. Donec nec malesuada arcu, et luctus lacus. </span></${tagChildren}>`);
    expect(element[2].outerHTML.trim()).toEqual(`<${tagChildren} class=\"hydrated\"><span slot=\"title\">R2-D2</span><span slot=\"subtitle\">Naboo</span><span slot=\"content\">Duis eleifend, elit vitae efficitur vestibulum, tellus eros sollicitudin dolor, a bibendum erat mauris vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In laoreet sodales commodo. Donec nec malesuada arcu, et luctus lacus. </span></${tagChildren}>`);
    expect(element[3].outerHTML.trim()).toEqual(`<${tagChildren} class=\"hydrated\"><span slot=\"title\">Darth Vader</span><span slot=\"subtitle\">Tatooine</span><span slot=\"content\">Quisque vehicula, velit vel pretium consequat, enim nisl molestie tellus, vel ultricies ligula arcu ac ligula. Duis egestas, est vel lobortis faucibus, urna ligula porttitor sem, ornare faucibus nibh nibh et urna. Morbi ac consequat turpis.</span></${tagChildren}>`);
    expect(element[4].outerHTML.trim()).toEqual(`<${tagChildren} class=\"hydrated\"><span slot=\"title\">Leia Organa</span><span slot=\"subtitle\">Alderaan</span><span slot=\"content\">Sed eleifend sem a nulla finibus, mollis bibendum lacus congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Integer volutpat, metus tempor efficitur euismod, velit risus ultricies ante, quis semper felis est in purus. </span></${tagChildren}>`);
  });
});
