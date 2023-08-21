import React from 'react'
import "./styles.css"
import { Container } from '@mui/material'
const Banner = () => {
    return (
        <div className='banner_container'>
            <div className="banner_background">
                <div className="background_title">
                    WE ARE FANATICAL
                </div>
                <div className="background_subtitle">
                    CHOSEN BY OVER 3 MILLION GAMING FANS ACROSS THE GLOBE
                </div>
            </div>
            <Container maxWidth="lg" sx={{ maxWidth: '1480px !important' }} className='about_container'>
                <div>
                    ENTERTAINMENT UNLOCKED
                </div>
                <p>
                    We're on a mission to help gamers from all over the world find amazing games at amazing prices. Fanatical lets you quickly find what you want from a selection of over 10,000 officially licensed digital games from over 1,100+ publishers.
                </p>
            </Container>
        </div>
    )
}

export default Banner