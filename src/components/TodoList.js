import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggleTodo, onDelete }) {
  return (
    <div>
      {todos && todos.length === 0 ? (
        <p>입력된 할 일 없음</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleTodo={onToggleTodo}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;