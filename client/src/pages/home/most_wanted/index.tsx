import React, { useEffect, useState } from 'react';
import './styles.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlickSlider } from 'src/components/slick_slider';
import { IGameHome } from 'src/types/game';
import { Box, Container, Typography } from '@mui/material';
interface IProps {
  gamesDeal: IGameHome[]
}
const MostWanted = ({ gamesDeal }: IProps) => {
  return (
    <Container maxWidth="lg" sx={{ height: '100%', maxWidth: '1480px !important', paddingBottom: '50px' }} className="WantedSlider">
      <Typography variant="body1" className='otherNewsTitle'>
        Wanted Slider
      </Typography>
      <SlickSlider infinite={true} slidesToScroll={2} slidesToShow={4} autoplay={true} autoplaySpeed={4000} pauseOnHover={true}>
        {gamesDeal.map((newItem, index) => (
          <Box key={index}>
            <img src={newItem.avatar} />
          </Box>
        ))}
      </SlickSlider>
    </Container>
  );
}


export default MostWanted






