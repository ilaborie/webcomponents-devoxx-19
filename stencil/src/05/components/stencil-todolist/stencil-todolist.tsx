import { Component, State, /* Listen */ } from '@stencil/core';

interface TodoItem {
    uid: number;
    text: string;
    completed: boolean;
}

@Component({
    tag: 'stencil-todolist',
    styleUrl: 'stencil-todolist.css',
})
export class StencilTodolist {
    @State() list: TodoItem[] = [
        { uid: 1, text: 'Learn about Web Components', completed: true },
        { uid: 2, text: 'Learn about Stencil', completed: false },
        { uid: 3, text: 'Share my knowledge', completed: false }
    ];
    // @todo 6

    toggleTodoItem(_uid: number) { /* @todo 7 */ }

    render() {
        return this.list.map((item) => (
            <stencil-todoitem
                uid={item.uid}
                text={item.text}
                completed={item.completed}
            ></stencil-todoitem>
        ));
    }
}