/* eslint-disable no-console */
import React from 'react';
import { Box, Container } from '@mui/material';
import { useRootSelector } from '../../store/hooks/hooks';
import ShoppingPageCard from './shopping-page-card';
import CheckoutCard from './checkout-card';
import { CartProduct } from '../../store/features/cart/cart-types';

const ShoppingCart: React.FC<CartProduct> = () => {
  const shop = useRootSelector((state) => state.cart.products);
  console.log(shop);
  return (
    <Container sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {shop.map(({ id, ...props }) => (
          <ShoppingPageCard key={id} {...props} />
        ))}
      </Box>
      <CheckoutCard />
    </Container>
  );
};

export default ShoppingCart;
