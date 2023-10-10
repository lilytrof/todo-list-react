import React from 'react';

const TodoBottom = ({todo, setTodo}) => {
  const deleteAllDoneTodos = () => {
    setTodo(prev => todo.filter(item => !item.isDone))
  }

  return (
    <div className="Todo-Bottom">
      <div>{todo.filter(item => item.isDone).length} of {todo.length} tasks done</div>
      <button className="Btn Btn_remove" onClick={() => {if (window.confirm('Do you really want to delete done tasks?')) deleteAllDoneTodos()}}>Delete done</button>
    </div>
  );
};

export default TodoBottom;