import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import './styles.css';

const Trust = () => {
    return (
        <Container maxWidth="lg" className="trust_wrap">
            <div className="trust_title">
                TRUSTED BY YOU
            </div>
            <p className=''>
                We’re only as good as our customers say we are. With over 75,395 customer reviews and an "excellent" <b>4.7 out of 5 star</b> rating, Fanatical is one of the highest rated official game retailers on the leading independent review service, Trustpilot.
            </p>
            <img src={require("src/assets/images/Trustpilot_white.jpg")} alt="CounterLogo" />
        </Container>
    )
}

export default Trust