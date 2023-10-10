import React from 'react';

const TodoFilter = ({todoFilter, setTodoFilter}) => {
  return (
    <div className="Todo-Filter">
      <button className={`Btn${todoFilter==="isDone" ? ' Btn_active' : ''}`}
              onClick={() => setTodoFilter(prev => "isDone")}>Done</button>
      <button className={`Btn${todoFilter==="isImportant" ? ' Btn_active' : ''}`} onClick={() => setTodoFilter(prev => "isImportant")}>Important</button>
      <button className={`Btn${todoFilter==="All" ? ' Btn_active' : ''}`} onClick={() => setTodoFilter(prev => "All")}>All</button>
    </div>
  );
};

export default TodoFilter;