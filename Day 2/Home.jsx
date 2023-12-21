import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { green,amber,lightGreen,blue} from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Add this import
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
// Footer component
const Footer = () => (
  <Box sx={{ textAlign: 'center', padding: '1rem', backgroundColor: '#b71c1c', flexShrink: '0' }}>
    <Typography variant="body2" color="textSecondary">
      © 2023 SFOODA. All rights reserved.
    </Typography>
  </Box>
);

export default function CombinedAppBarWithDrawer() {
  const [state, setState] = React.useState({
    left: false,
    darkMode: false,
  });
//   const toggleDarkMode = () => {
//     setState({ ...state, darkMode: !state.darkMode });
//   };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const icons = [<InfoIcon />,<AddAlertIcon />,<MonetizationOnIcon />,<BusinessCenterIcon /> ];
  const icons1 = [<SettingsIcon />,<AccountCircleIcon />,<PowerSettingsNewIcon /> ];
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer('left', false)}
      onKeyDown={toggleDrawer('left', false)}
    >
      <List>
        {['More Info', 'Orders', 'Pricing', 'About us'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              {icons[index % icons.length]}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  const theme = createTheme({
    palette: {
      primary: {
        main: '#f44336', // Green color
      },
      secondary: {
        main: '#f44336', // Amber color
      },
      success: {
        main: '#8BC34A', // Light green color
      },
      info: {
        main: '#2196F3', // Blue color
      },
    //   mode: state.darkMode ? 'dark' : 'light',
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '95rem' }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer('left', true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                SFOODA
              </Typography>
              <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                <img
                  src="/flat-lay-boxes-with-salad-yellow-background_23-2148247885.avif"
                  alt="Background"
                  style={{ width: '100%', height: 'auto', position: 'absolute', top: 0, left: 0, zIndex: -1 }}
                />
              </Box>
            </Toolbar>
          </AppBar>
        </Box>

        <SwipeableDrawer
          anchor="left"
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {list()}
          <List>
            {/* <ListItemButton onClick={toggleDarkMode}> */}
              {/* <ListItemIcon> */}
                {/* <Brightness4Icon /> {/* Dark mode icon
              </ListItemIcon>
              <ListItemText primary={`Switch to ${state.darkMode ? 'Light' : 'Dark'} Mode`} />
            </ListItemButton> */}
          </List>
        </SwipeableDrawer>

        <Box sx={{ flexGrow: 1, overflow: 'hidden', padding: '2rem', color: theme.palette.secondary.main }}>
          {/* Page content goes here */}
          <div>
            <Typography variant="h1" gutterBottom>
              We are the Sfoodies!!  
            </Typography>
            <Typography variant="h4" paragraph>
            Satisfy your cravings, just a click away!
            </Typography>  
            <Typography variant="h4" paragraph>
            Click, order, delight. The perfect recipe for your day
            </Typography>
            <Typography variant="h4" paragraph>
            Elevate your dining experience with an order that wows.
            </Typography>
          </div>
          <Button variant="contained" color="error" size="large" sx={{ marginTop: '2rem' }}>
            Order Now
          </Button>
        </Box>
         
        {/* Include the Footer component */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}