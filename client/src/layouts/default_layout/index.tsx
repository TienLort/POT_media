import React from 'react';
import ErrorBoundary from 'src/components/error_boundaries';
import Footer from 'src/components/footer';
import Header from 'src/components/header';
import { useStyles } from './styles';
import { Box } from '@mui/material';

interface IProps {
  children: JSX.Element;
}

const DefaultLayout = (props: IProps) => {
  const classes = useStyles();
  return (
    <ErrorBoundary>
      <Box className={classes.root}>

        <Header />
        <div style={{ paddingTop: '125px' }}>
          {props.children}
        </div>
        <Footer />
      </Box>
    </ErrorBoundary>
  );
};

export default DefaultLayout;
