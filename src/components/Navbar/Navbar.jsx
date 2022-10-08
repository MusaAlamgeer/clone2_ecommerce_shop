/* eslint-disable react/no-unknown-property */
/* eslint-disable arrow-body-style */
import React from 'react';
import './style.css';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

import logo from '../../assets/commercelogo.png';

const drawerWidth = 0;

const Navbar = () => {
  return (
    <div>
      <AppBar
        position="fixed"
        sm={{
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: `${drawerWidth}`,
        }}
        className="appBar"
        color="inherit"
      >
        <Toolbar>
          <Typography variant="h6" className="title" color="inherit">
            <img src={logo} alt="Commerce.js" height="25px" className="image" />
            Commerce.js
          </Typography>
          <div className="grow" />
          <div className="button" spacing={2} sm={{ display: 'none' }}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {/* </ThemeProvider> */}
    </div>
  );
};

export default Navbar;
