import { Component, Prop /*, Event, EventEmitter */ } from '@stencil/core';

@Component({
    tag: 'stencil-todoitem',
    styleUrl: 'stencil-todoitem.css',
})
export class StencilTodoItem {
    @Prop() uid: number;
    @Prop() text: string;
    @Prop() completed: boolean;
    // @todo step 2

    handleOnComplete = () => { /* @todo step 3 */ };

    render() {
        return (
            <div class={"// @todo step 5"}>
                <button>{/*  @todo step 4 */} Toggle</button>
                <span>{this.text}</span>
            </div>
        );
    }
}