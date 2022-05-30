/* eslint-disable spaced-comment */
/* eslint-disable no-console */
import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { Product } from '../../types/global-types';

const PricingCard: React.FC<Product> = ({
  title, price, discount,
}) => (
  <Box sx={{ minWidth: 275, mr: 'auto' }}>
    <Card variant="outlined" sx={{ bgColor: 'light' }}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
          {price}
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
      </CardActions>
    </Card>
  </Box>
);

export default PricingCard;
