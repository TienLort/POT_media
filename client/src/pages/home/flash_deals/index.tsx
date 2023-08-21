import { Box } from '@mui/system';
import { Button, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IGameHome } from 'src/types/game';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import './styles.css';
interface IProps {
  gamesHome: IGameHome[]
}
const minCardWidth = 330;
const FlashDeals = ({ gamesHome }: IProps) => {
  const navigate = useNavigate();
  const handleDetail = (id: string) => {
    navigate(id);
  };

  return (
    <Container maxWidth="lg" sx={{ height: '100%', maxWidth: '1480px !important' }}>
      <Typography variant="body1" className="otherNewsTitle">
        Spring Sale Flash Deals
      </Typography>
      <Box sx={{
        display: 'flex',
        gap: '20px',
        justifyContent: 'space-between'
      }}>
        {gamesHome.map((newItem, index) => (
          <Box flex={1 / 4} key={index} className="figure">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample41.jpg" alt="sample41" />
            <figcaption>
              <h2>I think <span>nighttime</span> is dark</h2>
              <p>So you can imagine your fears with less distraction.</p>
              <a href="#"></a>
            </figcaption>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default FlashDeals






