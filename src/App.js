import React,{useEffect, useState} from 'react';
import './App.css';
import Form from './Components/Form';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './Components/Login';

function App() {

  const [inputText, setInputText] = useState("");

  const [todos, setTodos] = useState([]);

  const [status,setStatus] = useState("all")

  const [filteredTodos, setFilteredTodos] = useState([])
   const [inputName, setInputName] = useState("");
   const [inputpassword, setinputpassword] = useState("");

  const [isAdmin, setIsAdmin] = useState(false)
  const [redirect, setRedirect] = useState(false)
  
  
  

   const loginhandler = (e) => {
     e.preventDefault();
     if (inputName === "asim" && inputpassword === "asim") {
       //redirected to App.js
      setIsAdmin(false)
      setRedirect(true)
       
      //  return <Redirect to="/todo" true/>;
     }
     else if (inputName === "admin" && inputpassword === "admin") {
       
       setIsAdmin(true);
       setRedirect(true)
      //  return <Redirect to="/todo" true/>
     }
     else {
       alert("Invalid Credentials")
     }
     
   };

   const nameChangeHandler = (e) => {
     setInputName(e.target.value);
   };

   const passwordChangeHandler = (e) => {
     setinputpassword(e.target.value);
   };

  useEffect(()=>{getLocalTodos()},[])

  useEffect(() => {
    filterHandler()
    saveLocalTodos()}, [todos, status]);
  
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case "incompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

//save to localStorage
  
  const saveLocalTodos = () => {
      localStorage.setItem("todos",JSON.stringify(todos))
  }

  //get local todos

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todolocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todolocal)
    }
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login
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
          <div className="container">
            <Header />
            <Form
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
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
