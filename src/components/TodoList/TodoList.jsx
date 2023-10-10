import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({todo, setTodo, todoFilter}) => {

  const deleteOneTodo = (id) => {
    setTodo(prev => prev.filter(item => item.id !== id));
  }

  const setImportantOneTodo = (id) => {
    setTodo(prev => prev.map(item => {
      if (item.id === id) {
        return {...item, isImportant: !item.isImportant};
      }
      return item;
    }))
  }

  const setDoneOneTodo = (id) => {
    setTodo(prev => prev.map(item => {
      if (item.id === id) {
        return {...item, isDone: !item.isDone};
      }
      return item;
    }))
  }

  const setChangeOneTodo = (id, text) => {
    setTodo(prev => prev.map(item => {
      if (item.id === id) {
        return {...item, text: text};
      }
      return item;
    }))
  }

  return (
    <ul className="Todo-List">
      {
        todo.filter(item => todoFilter==="All" ? item : item[todoFilter])
          .map((item) => (
          <TodoItem setChangeOneTodo={setChangeOneTodo} setDoneOneTodo={setDoneOneTodo}
                    deleteOneTodo={deleteOneTodo}
                    setImportantOneTodo={setImportantOneTodo} key={item.id} item={item} setTodo={setTodo}/>
        ))
      }
    </ul>
  )
}

export default TodoList;