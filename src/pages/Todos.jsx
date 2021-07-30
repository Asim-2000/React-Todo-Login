import { useState, useEffect } from "react"
import { Box } from "@material-ui/core"
import Header from "../Components/Header"
import TodoList from "../Components/TodoList"
import Form from "../Components/Form"
import { TodoContext } from "../context/todoContext"

export default function Todos() {
  const [todos, setTodos] = useState([])

  const [status, setStatus] = useState("all")

  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  function filterHandler() {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break
      case "incompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }
  //save to localStorage

  function saveLocalTodos() {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  //get local todos

  function getLocalTodos() {
    if (localStorage.getItem("todos") !== null) {
      let todolocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todolocal)
    }
  }

  return (
    <TodoContext.Provider value={todos}>
      <Box>
        <Header />
        <Form status={status} setTodos={setTodos} setStatus={setStatus} />
        <TodoList setTodos={setTodos} filteredTodos={filteredTodos} />
      </Box>
    </TodoContext.Provider>
  )
}
