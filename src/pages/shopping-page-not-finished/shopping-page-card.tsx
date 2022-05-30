/* eslint-disable spaced-comment */
import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { CartProduct } from '../../store/features/cart/cart-types';

const ShoppingPageCard: React.FC<CartProduct> = ({
  title, price, discount,
}) => (
  <Box sx={{ width: 275, m: 5 }}>
    <Card variant="outlined" sx={{ bgColor: 'light' }}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
          {price}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          per month
        </Typography>
        <Typography variant="body2">
          {`Save ${discount} off`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" sx={{ textTransform: 'none', width: '100%' }}>
          Dispose of 1
          {' '}
          {title}
        </Button>
        <Button variant="contained" sx={{ textTransform: 'none', width: '100%' }}>
          Remove Plan
        </Button>
      </CardActions>
    </Card>
  </Box>
);

export default ShoppingPageCard;
