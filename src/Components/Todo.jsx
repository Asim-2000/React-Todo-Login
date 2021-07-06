import { Button, ButtonGroup, Container, ListItem } from "@material-ui/core";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";

const Todo = ({ text, todo, todos, setTodos, isAdmin }) => {

  
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );

  };

  return (
    <Container maxWidth="xs">
      <ListItem className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </ListItem>
      {!isAdmin && (
        <ButtonGroup>
          <Checkbox
            onChange={completeHandler}
            checked={todo.completed}
            
            icon={<CircleUnchecked />}
            checkedIcon={<CircleCheckedFilled />}
          />
          <Button onClick={deleteHandler} className="trash-btn">
            <DeleteIcon />
          </Button>
        </ButtonGroup>
      )}
    </Container>
  );
};

export default Todo;
