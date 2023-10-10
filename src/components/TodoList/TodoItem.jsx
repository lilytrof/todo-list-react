import React from 'react';
import {useState} from "react";

const TodoItem = ({item, deleteOneTodo, setImportantOneTodo, setDoneOneTodo, setChangeOneTodo}) => {

  const [change, setChange] = useState(false);
  const [changeText, setChangeText] = useState(item.text || '');

  const changeFunc = (e) => {
    if (change === true) {
      setChangeOneTodo(item.id, changeText);
    }
    setChange(prev => !prev);
  }

  return (
    <li className="Todo-Item">
      <input checked={item.isDone} type="checkbox" onChange={() => setDoneOneTodo(item.id)}/>

      {
        change
          ? <input className="Todo-Input" type="text" value={changeText} onChange={(e) => setChangeText(e.target.value)}/>
          : <p className="Todo-Text" style={{opacity: item.isDone ? '0.2' : '1'}}>{item.text}</p>
      }

      <div className="Todo-ItemBtnsWrapper">
        <div className="Todo-ItemBtnsGroup">
          <button style={{color: item.isImportant ? '#CFFF46' : 'white', opacity: item.isImportant ? '1' : '0.2'}}
                  className="Btn Btn_important"
                  onClick={() => setImportantOneTodo(item.id)}>Important
          </button>
          <button className="Btn Btn_change" onClick={changeFunc} style={{opacity: change ? '1' : '0.2', color: change ? '#CFFF46' : 'white'}}>{change ? 'Save' : 'Edit'}</button>
        </div>
        <button className="Btn Btn_delete" onClick={() => deleteOneTodo(item.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill"
               viewBox="0 0 16 16">
            <path
              d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
          </svg>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;