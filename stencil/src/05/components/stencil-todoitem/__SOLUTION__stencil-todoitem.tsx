import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'stencil-todoitem-solution',
    styleUrl: 'stencil-todoitem.css',
})
export class StencilTodoItemSolution {
    @Prop() uid: number;
    @Prop() text: string;
    @Prop() completed: boolean;
    @Event() todoCompleted: EventEmitter;

    handleOnComplete = () => this.todoCompleted.emit(this.uid);

    render() {
        return (
            <div class={this.completed ? 'completed' : ''}>
                <button onClick={this.handleOnComplete}>Toggle</button>
                <span>{this.text}</span>
            </div>
        );
    }
}