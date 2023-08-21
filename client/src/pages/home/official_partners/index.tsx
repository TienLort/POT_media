
import React, { useEffect, useState } from 'react';
import './styles.css';
import { Box, Container, Typography } from '@mui/material';

const OfficialPartner = () => {

  return (
    <Container maxWidth="lg" sx={{ height: '100%', maxWidth: '1480px !important', paddingBottom: '50px' }}>
      <Typography variant="body1" className='otherNewsTitle'>
        Official Partners
      </Typography>
      <Box className="official_wrap">
        <Box className="official_image">
          <img src={require("src/assets/images/rockstar.png")} alt="rockstar" />
          <Box className="official_deal">
            12 Deals
          </Box>
        </Box>
        <Box className="official_image">
          <img src={require("src/assets/images/rockstar.png")} alt="rockstar" />
          <Box className="official_deal">
            12 Deals
          </Box>
        </Box>
        <Box className="official_image">
          <img src={require("src/assets/images/rockstar.png")} alt="rockstar" />
          <Box className="official_deal">
            12 Deals
          </Box>
        </Box>
        <Box className="official_image">
          <img src={require("src/assets/images/rockstar.png")} alt="rockstar" />
          <Box className="official_deal">
            12 Deals
          </Box>
        </Box>
        <Box className="official_image">
          <img src={require("src/assets/images/rockstar.png")} alt="rockstar" />
          <Box className="official_deal">
            12 Deals
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default OfficialPartner






