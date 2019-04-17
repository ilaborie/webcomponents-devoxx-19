import { StencilUsers } from './stencil-users';
import { StencilUsersSolution } from './__SOLUTION__stencil-users';

const ComponentToBeTested = process.env.IS_SOLUTION
    ? StencilUsersSolution
    : StencilUsers;

describe('stencil-todolist', () => {
    it('builds', () => {
        expect(new ComponentToBeTested()).toBeTruthy();
    });
});

