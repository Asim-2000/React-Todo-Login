import { Button, Grid,Typography,makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({

  btn: {
    textAlign: 'right',
    paddingRight:10
  }

})

const Header = () => {

  const classes = useStyles();
  return (
    <Grid container direction="row" alignItems="center">

      <Grid item xs={6}>
        <Typography variant="h4" color="textSecondary"> Asim's ToDo List</Typography>
      </Grid>

      <Grid className={classes.btn} item xs={6}>
        <Button href="/" variant="contained" size="small" color="primary">
          Logout
        </Button>
      </Grid>
    </Grid>
  );
}

export default Header;