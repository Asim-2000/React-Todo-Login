import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { ThemeProvider } from "@material-ui/core"
import { theme } from "./theme/theme"
import Login from "./pages/Login"
import Todos from "./pages/Todos"
import { AdminContainer } from "./container/AdminContainer"

function App() {
  return (
    <AdminContainer>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/todo" component={Todos}></Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </AdminContainer>
  )
}

export default App
