import React, { useState } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { ThemeProvider } from "@material-ui/core"
import { theme } from "./theme/theme"
import Login from "./pages/Login"
import Todos from "./pages/Todos"
import { AdminContext } from "./context/adminContext"

function App() {
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <AdminContext.Provider value={isAdmin}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Login setIsAdmin={setIsAdmin} />
            </Route>
            <Route path="/todo">
              <Todos />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </AdminContext.Provider>
  )
}

export default App
