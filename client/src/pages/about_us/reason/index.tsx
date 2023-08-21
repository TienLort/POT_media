import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import './styles.css';

const Story = () => {
    return (
        <div className="reason_wrap">
            <Container maxWidth="lg" className="reason_container">
                <div className="reason_left">

                </div>
                <div className="reason_right">
                    <div className="reason_title">
                        WHY WE'RE FANATICAL
                    </div>
                    <p className='reason_desc'>
                        Fanatical is powered by a passionate team of gamers. Whether we're putting a smile on your face by saving you money, or creating engaging content showcasing the games you want to play, we will always strive to be one of your favourite gaming destinations.
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default Story