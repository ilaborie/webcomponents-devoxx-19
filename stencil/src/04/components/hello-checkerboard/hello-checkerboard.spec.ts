import { HelloCheckerBoard } from './hello-checkerboard';
import { HelloCheckerBoardSolution } from './__SOLUTION__hello-checkerboard';

const ComponentToBeTested = process.env.IS_SOLUTION
    ? HelloCheckerBoardSolution
    : HelloCheckerBoard;

describe('hello-checkerboard', () => {
    it('builds', () => {
        expect(new ComponentToBeTested()).toBeTruthy();
    });
    describe('cells', () => {
        it('should return 4x4 cells by default', () => {
            const component = new ComponentToBeTested();
            expect(component.cells.length).toEqual(16);
        });
        it('should return 10x10 cells when size=10', () => {
            const component = new ComponentToBeTested();
            component.size = 10;
            expect(component.cells.length).toEqual(100);
        });
        it('should have dark=black and light=white as default', async () => {
            const component = new ComponentToBeTested();
            expect(component.light).toEqual('white');
            expect(component.dark).toEqual('black');
        });
        it('should set dark and light props', async () => {
            const component = new ComponentToBeTested();
            component.dark = 'red'
            component.light = '#eee'
            expect(component.light).toEqual('#eee');
            expect(component.dark).toEqual('red');
        });
    });
});
