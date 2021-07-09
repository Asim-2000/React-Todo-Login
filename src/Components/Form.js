import React, { useState } from "react"
import { BsFillPlusCircleFill } from "react-icons/bs"
import {
  ButtonGroup,
  Button,
  Select,
  MenuItem,
  Container,
  TextField,
} from "@material-ui/core"

const Form = ({ setTodos, todos, setStatus, isAdmin, status }) => {
  const [inputText, setInputText] = useState("")

  function inputTextHandler(e) {
    setInputText(e.target.value)
  }

  function SubmitHandler(e) {
    e.preventDefault()
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ])
    setInputText("")
  }

  function statusHandler(e) {
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
              <Button type="submit">
                <BsFillPlusCircleFill />
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
