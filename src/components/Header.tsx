import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import { grey } from '@mui/material/colors';


//declared user details as hardcoded string
const userDetails: {
    firstName: string
    lastName: string
    email: string
 } = {
        firstName: "Durga",
        lastName: "Sannala",
        email: "durga@example.com"
      };
      
//Appbar to display app name and usericon with user details
function ResponsiveAppBar() {
 
  
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Country Info App
          </Typography>

          
          {/* Title setup in App bar */}
          
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Country Info App
          </Typography>
         
          {/* user icon setup to display user details in tooltip when hovered*/}  
          <Box sx={{ flexGrow: 0}}>
            <Tooltip title={userDetails.firstName + ' ' + userDetails.lastName  + ' ' + userDetails.email}>
              <IconButton  sx={{ p: 0 }} >
              <Avatar sx={{ bgcolor: grey[500] }}>D</Avatar>
               
              </IconButton>
            </Tooltip>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;