import React from "react"
import { TextField } from "@material-ui/core"
import { ButtonGroup, Button, Select, MenuItem } from "@material-ui/core"
import { Container } from "@material-ui/core"

const Form = ({
  setInputText,
  setTodos,
  todos,
  inputText,
  setStatus,
  isAdmin,
  status,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }

  const SubmitHandler = (e) => {
    e.preventDefault()
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ])
    setInputText("")
    console.log("Hey")
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <Container maxWidth="xs">
      <form onSubmit={SubmitHandler}>
        <ButtonGroup>
          {!isAdmin && (
            <ButtonGroup>
              <TextField
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                variant="outlined"
              />
              <Button className="todo-btn" type="submit">
                <i className="fa fa-plus-square"></i>
              </Button>
            </ButtonGroup>
          )}
          <Select onChange={statusHandler} value={status}>
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="incompleted">InCompelete</MenuItem>
          </Select>
        </ButtonGroup>
      </form>
    </Container>
  )
}

export default Form
