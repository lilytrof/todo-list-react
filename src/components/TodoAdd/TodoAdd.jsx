import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoAdd = ({todo, setTodo}) => {

  const addTodo = async (e) => {
    let text = e.target[0].value;
    let isInTodoList = todo.some((item) => item.text === text);

    e.preventDefault();

    if(!isInTodoList) {
      await setTodo((prev) => [...prev, {
        id: uuidv4(),
        text: e.target[0].value,
        isImportant: false,
        isDone: false
      }])

      e.target[0].value = '';
    } else {
      alert("This task already exists!")
    }
  }

  return (
    <form onSubmit={addTodo} className="Todo-Form" method="post">
      <input className="Todo-Input" required type="text"/>
      <button type="submit" className="Btn Btn_plus">+</button>
    </form>
  );
};

export default TodoAdd;