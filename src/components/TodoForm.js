
import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  
  const [input, setInput] = useState('');

  const handleChange = (item) => setInput(item.target.value);

  const handleSubmit = (item) => {
    item.preventDefault(); 
    addTodo(input); 
    setInput(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="할 일을 입력해주세요"
        className="todo-input"
      />
      
      <button className="add-btn" type="submit">
        Add +
      </button>
    </form>
  );
}

export default TodoForm;