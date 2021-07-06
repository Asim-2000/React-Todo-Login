import { Button } from '@material-ui/core';
import { Box } from '@material-ui/core';
import React from 'react';

const Header = () => {
    return (
      <Box display="flex" flexDirection="row" justifyContent="center">
      
          <h1 className="header text-right"> Asim's ToDo List</h1>
  
        
          <Button href="/" variant="contained" size="small">
            Logout
          </Button>
      </Box>
    );
}

export default Header;