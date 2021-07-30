import React, { useContext, useState } from "react"
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
  withStyles,
  Grid,
} from "@material-ui/core"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import { Alert } from "@material-ui/lab"
import { Redirect } from "react-router"
import { AdminContext } from "../context/adminContext"

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.dark,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
})
const Login = ({ classes }) => {
  const [inputName, setInputName] = useState("")
  const [inputpassword, setinputpassword] = useState("")
  const [redirect, setRedirect] = useState(false)
  const [alert, setAlert] = useState(false)
  const { setIsAdmin } = useContext(AdminContext)
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
    <>
      {redirect ? (
        <Redirect to="/todo" />
      ) : (
        <Container maxWidth="xs">
          <CssBaseline />
          <Grid className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate onSubmit={loginhandler}>
              <TextField
                onChange={nameChangeHandler}
                value={inputName}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Username"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                onChange={passwordChangeHandler}
                value={inputpassword}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              {alert ? (
                <Alert variant="outlined" severity="error">
                  Invalid Credentials! Please Try Again
                </Alert>
              ) : (
                <></>
              )}
            </form>
          </Grid>
        </Container>
      )}
    </>
  )
}

export default withStyles(styles)(Login)
