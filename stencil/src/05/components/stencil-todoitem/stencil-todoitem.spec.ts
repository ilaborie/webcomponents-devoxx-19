import { StencilTodoItem } from './stencil-todoitem';
import { StencilTodoItemSolution } from './__SOLUTION__stencil-todoitem';

const ComponentToBeTested = process.env.IS_SOLUTION
    ? StencilTodoItemSolution
    : StencilTodoItem;

describe('stencil-todolist', () => {
    it('builds', () => {
        expect(new ComponentToBeTested()).toBeTruthy();
    });
});
