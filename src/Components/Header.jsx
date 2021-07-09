import { Button, Grid, Typography, makeStyles } from "@material-ui/core"
import React from "react"
import { Link } from "react-router-dom"

const useStyles = makeStyles({
  btn: {
    textAlign: "right",
    paddingRight: 20,
  },
  heading: {
    paddingLeft: 20,
  },
  link: {
    textDecoration: "none",
  },
})

const Header = () => {
  const classes = useStyles()
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs={6}>
        <Typography
          className={classes.heading}
          variant="h4"
          color="textSecondary"
        >
          ToDo List
        </Typography>
      </Grid>

      <Grid className={classes.btn} item xs={6}>
        <Link className={classes.link} to="/">
          <Button variant="contained" size="small" color="secondary">
            Logout
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default Header
