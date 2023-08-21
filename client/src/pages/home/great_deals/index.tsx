import React, { useEffect, useState } from 'react';
import './styles.css'
import { IGameHome } from 'src/types/game';
import { Box, Container, Typography } from '@mui/material';
import Product from 'src/components/product';

const GreatDeal = () => {
  return (
    <Container maxWidth="lg" sx={{ height: '100%', maxWidth: '1480px !important', paddingBottom: '50px' }} className="WantedSlider">
      <Typography variant="body1" className='otherNewsTitle'>
        More Great Deals
      </Typography>
      <div className="great-deal-wrap">
        <Product sx={{ width: "calc(25% - 22.5px)" }} />
        <Product sx={{ width: "calc(25% - 22.5px)" }} />
        <Product sx={{ width: "calc(25% - 22.5px)" }} />
        <Product sx={{ width: "calc(25% - 22.5px)" }} />
        <Product sx={{ width: "calc(25% - 22.5px)" }} />
        <Product sx={{ width: "calc(25% - 22.5px)" }} />
        <Product sx={{ width: "calc(25% - 22.5px)" }} />
        <Product sx={{ width: "calc(25% - 22.5px)" }} />
        <Product sx={{ width: "calc(25% - 22.5px)" }} />
        <Product sx={{ width: "calc(25% - 22.5px)" }} />
        <Product sx={{ width: "calc(25% - 22.5px)" }} />
        <Product sx={{ width: "calc(25% - 22.5px)" }} />
      </div>
    </Container>
  );
}


export default GreatDeal






