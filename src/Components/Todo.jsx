import { Button, ButtonGroup, ListItem, makeStyles } from "@material-ui/core"
import React from "react"
import DeleteIcon from "@material-ui/icons/Delete"
import Checkbox from "@material-ui/core/Checkbox"
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked"
import CircleCheckedFilled from "@material-ui/icons/CheckCircle"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
  },
  btn: {
    "&:active": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  checkbox: {
    color: "green",
  }
}))

const Todo = ({ text, todo, todos, setTodos, isAdmin }) => {
  const classes = useStyles()
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id))
  }

  const completeHandler = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            completed: !el.completed,
          }
        }
        return el
      })
    )
  }

  return (
    <ListItem>
      {!isAdmin && (
        <ButtonGroup>
          <Checkbox
            className={classes.checkbox}
            edge="start"
            onChange={completeHandler}
            checked={todo.completed}
            icon={<CircleUnchecked />}
            checkedIcon={<CircleCheckedFilled />}
          />
          <Button onClick={deleteHandler} className={classes.btn}>
            <DeleteIcon />
          </Button>
        </ButtonGroup>
      )}
      <Typography className={classes.root}>{text}</Typography>
    </ListItem>
  )
}

export default Todo
