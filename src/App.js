import React, { useState } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { ThemeProvider } from "@material-ui/core"
import { theme } from "./theme/theme"
import Login from "./Components/Login"
import Todos from "./pages/Todos"

function App() {
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
          </Route>
          <Route path="/todo">
            <Todos isAdmin={isAdmin} />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
