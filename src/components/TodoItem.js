import React from 'react';

function TodoItem({ todo, onToggleTodo, onDelete }) {
    
  return (
    <div className="todo-item">
      <p>{todo.text}</p>

      <div className="todo-action" style={{ color: todo.completed ? "green" : "red" }}>
        {todo.completed ? '완료' : '미완료'}
      </div>

        <button className="complete-btn" 
          onClick={() => onToggleTodo(todo.id)}>
          Complete V
        </button>

        <button className="delete-btn"
          onClick={() => onDelete(todo.id)}>
          Delete X
        </button>
    </div>
  );
}

export default TodoItem;