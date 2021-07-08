import React from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
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
