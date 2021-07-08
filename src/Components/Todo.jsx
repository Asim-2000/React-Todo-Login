import React from "react"
import {
  CircleUnchecked,
  CircleCheckedFilled,
  DeleteIcon,
} from "@material-ui/icons"
import {
  Typography,
  Paper,
  Checkbox,
  Button,
  ButtonGroup,
  ListItem,
  makeStyles,
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
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
    <Paper className={classes.root} variant="elevation" elevation={24}>
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
    </Paper>
  )
}

export default Todo
