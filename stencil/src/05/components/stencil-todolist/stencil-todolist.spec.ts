import { StencilTodolist } from './stencil-todolist';
import { StencilTodolistSolution } from './__SOLUTION__stencil-todolist';

const ComponentToBeTested = process.env.IS_SOLUTION
    ? StencilTodolistSolution
    : StencilTodolist;

describe('stencil-todolist', () => {
    it('builds', () => {
        expect(new ComponentToBeTested()).toBeTruthy();
    });

    describe('toggleTodoItem', () => {
        it('should toggle completed on the selected item', () => {
            const component = new ComponentToBeTested();
            expect(component.list.find((element) => element.uid == 1).completed).toEqual(true);
            component.toggleTodoItem(1)
            expect(component.list.find((element) => element.uid == 1).completed).toEqual(false);
        });
    });
});
