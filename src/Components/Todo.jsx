import React from "react"
import DeleteIcon from "@material-ui/icons/Delete"
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked"
import CircleCheckedFilled from "@material-ui/icons/CheckCircle"
import {
  Typography,
  Paper,
  Checkbox,
  Button,
  ButtonGroup,
  ListItem,
  makeStyles,
} from "@material-ui/core"
import { useContext } from "react"
import { AdminContext } from "../context/adminContext"

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 12,
    backgroundColor: theme.palette.primary.light,
  },
  btn: {
    "&:active": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  checkbox: {
    color: "green",
  },
}))

const Todo = ({ text, todo, todos, setTodos }) => {
  const classes = useStyles()
  const isAdmin = useContext(AdminContext)

  function deleteHandler() {
    setTodos(todos.filter((el) => el.id !== todo.id))
  }

  function completeHandler() {
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
    <Paper className={classes.root} variant="elevation" elevation={24}>
      <ListItem>
        {!isAdmin ? (
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
        ) : (
          <></>
        )}
        <Typography className={classes.root}>{text}</Typography>
      </ListItem>
    </Paper>
  )
}

export default Todo
