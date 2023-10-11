import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoAdd from "./components/TodoAdd/TodoAdd";
import TodoBottom from "./components/TodoBottom/TodoBottom";
import TodoFilter from "./components/TodoFilter/TodoFilter";
import "./styles/style.scss";
import Footer from "./components/Footer/Footer";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [todoFilter, setTodoFilter] = useState("All");

  useEffect(() => {
    if (localStorage.getItem("todo") !== null) {
      setTodo(JSON.parse(localStorage.getItem("todo")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <div className="Wrap">
      <div className="Todo">
        <TodoAdd todo={todo} setTodo={setTodo} />
        <TodoFilter todoFilter={todoFilter} setTodoFilter={setTodoFilter} />

        {todo.length ? (
          <>
            <TodoList todoFilter={todoFilter} todo={todo} setTodo={setTodo} />
            {todoFilter === "All" ? (
              <TodoBottom todo={todo} setTodo={setTodo} />
            ) : (
              ""
            )}
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            You haven't added any tasks yet
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
}

export default Todo;
