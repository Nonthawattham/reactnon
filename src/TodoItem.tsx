//src/TodoItem.tsx
import React from 'react';
import { Todo } from './types';

interface TodoItemProps {
    todo: Todo;
}
const TodoItem: React.FC<TodoItemProps> = (props) => {
    return (
        <li
            style={{
                textDecoration: props.todo.completed ? 'line-through' : 'none', }}
        >
            {props.todo.text}
        </li>
    );
};

export default TodoItem;