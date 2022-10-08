/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import './style.css';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';

export const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {
  return (
    <Card>
      <CardMedia
        image={item.image.url}
        alt={item.name}
        className="media"
        />
      <CardContent className="cardContent">
        <Typography variant="h5">{item.name}</Typography>
        <Typography variant="h6">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className="cardActions">
        <div className="buttons">
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
          <Typography>{item.quantity}</Typography>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
      </CardActions>
    </Card>
  );
};
