import React, { useEffect, useState } from "react"
import "./App.css"
import Form from "./Components/Form"
import Header from "./Components/Header"
import TodoList from "./Components/TodoList"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "./Components/Login"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import { orange, red } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: red,
  },
})

function App() {
  const [inputText, setInputText] = useState("")

  const [todos, setTodos] = useState([])

  const [status, setStatus] = useState("all")

  const [filteredTodos, setFilteredTodos] = useState([])
  const [inputName, setInputName] = useState("")
  const [inputpassword, setinputpassword] = useState("")

  const [isAdmin, setIsAdmin] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [alert, setAlert] = useState(false)

  const loginhandler = (e) => {
    e.preventDefault()
    if (inputName === "asim" && inputpassword === "asim") {
      //redirected to App.js
      setIsAdmin(false)
      setRedirect(true)
      setAlert(false)

      //  return <Redirect to="/todo" true/>;
    } else if (inputName === "admin" && inputpassword === "admin") {
      setIsAdmin(true)
      setRedirect(true)
      setAlert(false)
      //  return <Redirect to="/todo" true/>
    } else {
      setAlert(true)
    }
  }

  const nameChangeHandler = (e) => {
    setInputName(e.target.value)
  }

  const passwordChangeHandler = (e) => {
    setinputpassword(e.target.value)
  }

  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  const filterHandler = () => {
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

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  //get local todos

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      let todolocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todolocal)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login
              alert={alert}
              redirect={redirect}
              isAdmin={isAdmin}
              inputName={inputName}
              setInputName={setInputName}
              nameChangeHandler={nameChangeHandler}
              passwordChangeHandler={passwordChangeHandler}
              loginhandler={loginhandler}
            />
          </Route>
          <Route path="/todo">
            <Header />
            <Form
              status={status}
              isAdmin={isAdmin}
              inputText={inputText}
              todos={todos}
              setTodos={setTodos}
              setInputText={setInputText}
              setStatus={setStatus}
            />
            <TodoList
              isAdmin={isAdmin}
              todos={todos}
              setTodos={setTodos}
              filteredTodos={filteredTodos}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
