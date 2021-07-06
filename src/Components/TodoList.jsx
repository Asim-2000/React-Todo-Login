import { List,Container } from "@material-ui/core";
import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos, isAdmin }) => {

  return (
    <Container maxWidth="xs">
      <List>
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
      </List>
    </Container>
  );
};

export default TodoList;
