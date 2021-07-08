import React from "react"
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
} from "@material-ui/core"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import { makeStyles } from "@material-ui/core/styles"
import { Alert } from "@material-ui/lab"
import { Redirect } from "react-router"

const useStyles = makeStyles((theme) => ({
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
}))

export default function Login({
  loginhandler,
  inputName,
  inputpassword,
  nameChangeHandler,
  passwordChangeHandler,
  redirect,
  alert,
}) {
  const classes = useStyles()

  return (
    <>
      {redirect ? (
        <Redirect to="/todo" />
      ) : (
        <Container maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
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
              {alert && (
                <Alert variant="outlined" severity="error">
                  Invalid Credentials! Please Try Again
                </Alert>
              )}
            </form>
          </div>
        </Container>
      )}
    </>
  )
}
