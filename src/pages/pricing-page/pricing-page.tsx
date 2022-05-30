/* eslint-disable no-console */
import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { shopFetchItemsAction } from '../../store/features/shop/shop-actions';
import { selectShopItems } from '../../store/features/shop/shop-selectors';
import { useRootDispatch, useRootSelector } from '../../store/hooks/hooks';
import PricingCard from './pricing-page-card';

const PricingPage: React.FC = () => {
  const items = useRootSelector(selectShopItems);
  const dispatch = useRootDispatch();

  useEffect(() => {
    dispatch(shopFetchItemsAction);
  }, []);

  return (
    <Container sx={{
      display: 'flex', flexWrap: 'wrap', ml: 'auto', mr: 'auto',
    }}
    >
      {items.map(({ id, ...props }) => (
        <PricingCard key={id} {...props} />
      ))}
    </Container>
  );
};

export default PricingPage;
