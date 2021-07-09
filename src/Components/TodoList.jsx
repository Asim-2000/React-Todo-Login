import { List, Container, makeStyles } from "@material-ui/core"
import React from "react"
import Todo from "./Todo"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}))

const TodoList = ({ setTodos, filteredTodos }) => {
  const classes = useStyles()
  return (
    <Container maxWidth="xs">
      <List className={classes.root}>
        {filteredTodos.map(
          (todo) =>
            todo.text.trim() !== "" && (
              <Todo
                key={todo.id}
                text={todo.text}
                setTodos={setTodos}
                todo={todo}
              />
            )
        )}
      </List>
    </Container>
  )
}

export default TodoList
