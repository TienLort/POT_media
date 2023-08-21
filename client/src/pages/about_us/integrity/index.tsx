import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import './styles.css';

const Integrity = () => {
    return (
        <div className="integrity_wrap">
            <Container maxWidth="lg" sx={{ maxWidth: '1480px !important' }} className='integrity_container'>
                <div className="integrity_block">
                    <div className="integrity_title">
                        OUR INTEGRITY
                    </div>
                    <p>
                        At Fanatical we’ve made the choice that we will always act with integrity. We ensure that all our products are officially licensed, benefiting our customers and our publishing partners.
                    </p>
                </div>
            </Container>

        </div>
    )
}

export default Integrity