import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos,isAdmin}) => {
  console.log(todos);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {
          (filteredTodos.map((todo) => (
              todo.text.trim()!==""&&
              <Todo
                isAdmin={isAdmin}
              key={todo.id}
              text={todo.text}
              todos={todos}
              setTodos={setTodos}
              todo={todo}
            />
          )))
        }
      </ul>
    </div>
  );
};

export default TodoList;
