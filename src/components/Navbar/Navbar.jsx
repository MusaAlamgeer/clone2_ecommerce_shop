/* eslint-disable react/no-unknown-property */
/* eslint-disable arrow-body-style */
import React from 'react';
import './style.css';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

import logo from '../../assets/commercelogo.png';

const drawerWidth = 0;

const Navbar = ({ totalItems }) => {
  const location = useLocation();

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
          <Typography component={Link} to="/" variant="h6" className="title" color="inherit">
            <img src={logo} alt="Commerce.js" height="25px" className="image" />
            Commerce.js
          </Typography>
          <div className="grow" />
          {
            location.pathname === '/'
            && (
              <div className="button" spacing={2} sm={{ display: 'none' }}>
                <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                  <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </div>
            )
          }
        </Toolbar>
      </AppBar>
      {/* </ThemeProvider> */}
    </div>
  );
};

export default Navbar;
