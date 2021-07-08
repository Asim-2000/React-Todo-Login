import React, { useState } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import { orange, red } from "@material-ui/core/colors"
import Loginpage from "./pages/Loginpage"
import TodoPage from "./pages/Todopage"

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: red,
  },
})

function App() {
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Loginpage isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
          </Route>
          <Route path="/todo">
            <TodoPage isAdmin={isAdmin} />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
