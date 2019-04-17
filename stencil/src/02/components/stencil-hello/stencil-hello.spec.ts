import { StencilHello } from './stencil-hello';
import { StencilHelloSolution } from './__SOLUTION__stencil-hello';

const ComponentToBeTested = process.env.IS_SOLUTION
  ? StencilHelloSolution
  : StencilHello;

describe('02 stencil-hello', () => {
  it('builds', () => {
    expect(new ComponentToBeTested()).toBeTruthy();
  });
});
