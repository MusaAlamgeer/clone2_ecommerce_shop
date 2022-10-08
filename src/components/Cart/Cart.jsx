/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable arrow-body-style */
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid } from '@mui/material';
import { CartItem } from './CartItem/CartItem';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
  const isEmpty = !(cart?.line_items?.length || 0);

  const EmptyCart = () => (// is a component but must be placed outside of this component
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link to="/" className="link">
        start adding some
      </Link>
      !
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>

      <div className="cartDetails">
        <Typography variant="h4">
          Subtotal: { cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>

          <Button
            xs={{ marginBottom: '5px', marginRight: '20px' }}
            className="emptyButton"
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>

          <Button
            sxs={{ marginBottom: '5px', marginRight: '20px' }}
            className="checkoutButton"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>

        </div>
      </div>
    </>
  );

  if (!cart.line_items) return <h4 style={{ marginTop: '5px' }}>Loading...</h4>;

  return (
    <Container>
      <div className="toolbar" />
      <Typography className="title" variant="h3" gutterBottom>Your Shopping Cart</Typography>
      {
        isEmpty ? <EmptyCart /> : <FilledCart />
      }
    </Container>
  );
};

export default Cart;
