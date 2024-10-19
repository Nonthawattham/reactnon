import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Todo } from './types';
import TodoList  from './TodoList';
import TodoItem from './TodoItem';

function App() {
  const [todos, setTodos] = React.useState<Todo[]>([{
    id: 1,
    text: "Buy Milk 🥛",
    completed: true
  },
  {
    id: 2,
    text: "Walk the dog 🐶",
    completed: false
  },
  {
    id: 3,
    text: "Do laundry 🧴",
    completed: false
  }
])

  const todoItems: JSX.Element[] = []
  for(const todo of todos){
    console.log('todo', todo)
    const item = <TodoItem todo={todo} />
    todoItems.push(item)
  }
  
  return (
    <div className='App'>
        <h1>TODO LIST</h1>
        <TodoList todos={todos} />
    </div>
  );
}

export default App;
