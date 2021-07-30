import { Button, Typography, Box, withStyles } from "@material-ui/core"
import React from "react"
import { Link } from "react-router-dom"

const styles = (theme) => ({
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

const Header = ({ classes }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box>
        <Typography
          className={classes.heading}
          variant="h4"
          color="textSecondary"
        >
          ToDo List
        </Typography>
      </Box>

      <Box mr="10px">
        <Link className={classes.link} to="/">
          <Button variant="contained" size="small" color="secondary">
            Logout
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default withStyles(styles)(Header)
