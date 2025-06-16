import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';

function App() {  
  const getTodos = () => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  };

  const [todos, setTodos] = useState(getTodos); 
    useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (!text.trim()) return; 
    const newTodo = {
      id: Date.now(), 
      text,
      completed: false, 
    };
    setTodos([newTodo, ...todos]); 
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
 
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearTodos = () => {
    setTodos([]);
  };
 
  return (
    <div className="App">
      <div className="todo-header-row">
       <div style={{ flex: 1}}>
         <h1 className="todo-title">나의 할 일 목록</h1>    
       </div>
      </div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} onToggleTodo={toggleTodo}
        onDelete={deleteTodo} />
    </div>
  );
}

export default App;


