import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import {  green } from '@mui/material/colors';

//hardcoded user details
const userDetails: {
  firstName: string
  lastName: string
  email: string
} = {
      firstName: "Durga",
      lastName: "Sannala",
      email: "durga@example.com"
    };

export default function MenuAppBar() {
  

  return (
    <Box sx={{ flexGrow: 1}}>
      
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ backgroundColor: green[200] }}>
          
          {/* App title setup*/}
          <Typography variant="h5"
            noWrap
            component="div" 
          sx={{ flexGrow: 1 ,
            fontFamily: 'unset',
            fontWeight: 700,
            color: 'black'}
          
          }>
            Country Info
          </Typography>
          {
            <div>
              {/*user icon setup to display userdetails in tooltip when hovered*/}
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                sx={{p:0}}
                
              >
                <Tooltip title={userDetails.firstName + ' ' + userDetails.lastName  + ' ' + userDetails.email}>
              <IconButton >
              <Avatar sx={{ bgcolor:  green[900] }}>D</Avatar>
               
              </IconButton>
            </Tooltip>
              </IconButton>
              
            </div>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
