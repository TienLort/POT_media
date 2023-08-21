import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { ReactComponent as AppStore } from "src/assets/images/appstorebadge.svg";
import { ReactComponent as Logo } from "src/assets/images/logo1.svg";
import styles from './Footer.module.css';
const FooterBanner = () => {
  return (
    <Box className={styles.FooterBanner}>
      <img src={require("src/assets/images/footer_banner.jpg")} alt="product image" />
      <Box className={styles.FooterSubBanner}>
        <img src={require("src/assets/images/title.png")} alt="product image" />
      </Box>
    </Box>
  );
};

export default FooterBanner;
