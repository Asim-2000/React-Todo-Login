import { List, Container } from "@material-ui/core"
import React from "react"
import Todo from "./Todo"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },

}))

const TodoList = ({ todos, setTodos, filteredTodos, isAdmin }) => {
  const classes = useStyles()

  return (
    <Container maxWidth="xs">
      <List className={classes.root}>
        {filteredTodos.map(
          (todo) =>
            todo.text.trim() !== "" && (
              <Todo
                isAdmin={isAdmin}
                key={todo.id}
                text={todo.text}
                todos={todos}
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
