/* eslint-disable arrow-body-style */
import React from 'react';
import './style.css';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

const Product = ({ product }) => {
  return (
    <div>
      <Card className="root">
        <CardMedia
          className="media"
          image={product.image}
          title={product.name}
        />

        <CardContent>
          <div className="cardContent">
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5">
              {product.price}
            </Typography>
          </div>
          <Typography variant="body2" color="textSecondary">{product.description}</Typography>
        </CardContent>

        <CardActions disableSpacing className="cardActions">
          <IconButton aria-label="Add to Cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>

      </Card>
    </div>
  );
};

export default Product;
