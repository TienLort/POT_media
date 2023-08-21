import React, { useEffect, useState } from 'react';
import './styles.css'
import { IGameHome } from 'src/types/game';
import { Box, Container, Typography } from '@mui/material';
import Product from 'src/components/product';

const UpcomingGame = () => {
  return (
    <Container maxWidth="lg" sx={{ height: '100%', maxWidth: '1480px !important', paddingBottom: '50px' }} className="WantedSlider">
      <Typography variant="body1" className='otherNewsTitle'>
        Upcoming Games
      </Typography>
      <div className="wrap">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </Container>
  );
}


export default UpcomingGame






