import { List, Container, makeStyles } from "@material-ui/core"
import React from "react"
import { useContext } from "react"
import { AdminContext } from "../context/adminContext"
import Todo from "./Todo"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}))

const TodoList = ({ setTodos, filteredTodos }) => {
  const classes = useStyles()

  const isAdmin = useContext(AdminContext)
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
