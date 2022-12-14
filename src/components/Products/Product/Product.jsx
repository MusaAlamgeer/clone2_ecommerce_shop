/* eslint-disable arrow-body-style */
import React from 'react';
import './style.css';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

const Product = ({ product, onAddToCart }) => {
  return (
    <div>
      <Card className="root">
        <CardMedia
          className="media"
          image={product.image.url}
          title={product.name}
        />

        <CardContent>
          <div className="cardContent">
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5">
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
          <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />
        </CardContent>

        <CardActions disableSpacing className="cardActions">
          <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
            <AddShoppingCart />
          </IconButton>
        </CardActions>

      </Card>
    </div>
  );
};

export default Product;
