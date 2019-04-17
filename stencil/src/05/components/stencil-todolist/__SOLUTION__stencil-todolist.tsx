import { Component, State, Listen } from '@stencil/core';

interface TodoItem {
    uid: number;
    text: string;
    completed: boolean;
}

@Component({
    tag: 'stencil-todolist-solution',
    styleUrl: 'stencil-todolist.css',
})
export class StencilTodolistSolution {
    @State() list: TodoItem[] = [
        { uid: 1, text: 'Learn about Web Components', completed: true },
        { uid: 2, text: 'Learn about Stencil', completed: false },
        { uid: 3, text: 'Share my knowledge', completed: false }
    ];

    @Listen('todoCompleted')
    todoCompletedHandler(event: CustomEvent) {
        this.toggleTodoItem(event.detail)
    }

    toggleTodoItem(uid: number) {
        const index = this.list.findIndex((element) => element.uid == uid);
        const list = [...this.list]; // shallow copy
        list[index] = { ...list[index], completed: !this.list[index].completed } // update selected item
        this.list = list // replacing reference
    }

    render() {
        return this.list.map((item) => (
            <stencil-todoitem-solution
                uid={item.uid}
                text={item.text}
                completed={item.completed}
            ></stencil-todoitem-solution>
        ));
    }
}