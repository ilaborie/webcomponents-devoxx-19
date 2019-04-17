import { StencilCard } from './stencil-card';
import { StencilCardSolution } from './__SOLUTION__stencil-card';

const ComponentToBeTested = process.env.IS_SOLUTION
    ? StencilCardSolution
    : StencilCard;

describe('stencil-card', () => {
    it('builds', () => {
        expect(new ComponentToBeTested()).toBeTruthy();
    });
});
