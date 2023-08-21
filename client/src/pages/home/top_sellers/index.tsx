import React, { useEffect, useState } from 'react';
import './styles.css'
import { IGameHome } from 'src/types/game';
import { Box, Container, Typography } from '@mui/material';
import Product from 'src/components/product';

const TopSeller = () => {
  return (
    <Container maxWidth="lg" sx={{ height: '100%', maxWidth: '1480px !important', paddingBottom: '50px' }} className="WantedSlider">
      <Typography variant="body1" className='otherNewsTitle'>
        Top Sellers
      </Typography>
      <div className="top-seller-wrap">
        <Product sx={{ width: "calc(33.33% - 20px)" }} />
        <Product sx={{ width: "calc(33.33% - 20px)" }} />
        <Product sx={{ width: "calc(33.33% - 20px)" }} />
      </div>
      <div className="top-seller-subwrap">
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


export default TopSeller






