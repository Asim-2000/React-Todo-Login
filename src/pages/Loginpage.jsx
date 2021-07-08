import Login from "../Components/Login"
import { useState } from "react"

export default function Loginpage({ isAdmin, setIsAdmin }) {
  const [inputName, setInputName] = useState("")
  const [inputpassword, setinputpassword] = useState("")
  const [redirect, setRedirect] = useState(false)
  const [alert, setAlert] = useState(false)

  function userLogin() {
    if (inputName === "asim" && inputpassword === "asim") {
      return true
    }
    return false
  }
  function adminLogin() {
    if (inputName === "admin" && inputpassword === "admin") {
      return true
    }
    return false
  }

  function loginhandler(e) {
    e.preventDefault()
    if (userLogin()) {
      //redirected to App.js
      setIsAdmin(false)
      setRedirect(true)
      setAlert(false)
    }
    //  return <Redirect to="/todo" true/>;
    else if (adminLogin()) {
      setIsAdmin(true)
      setRedirect(true)
      setAlert(false)
      //  return <Redirect to="/todo" true/>
    } else {
      setAlert(true)
    }
  }
  function nameChangeHandler(e) {
    setInputName(e.target.value)
  }

  function passwordChangeHandler(e) {
    setinputpassword(e.target.value)
  }

  return (
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
  )
}
