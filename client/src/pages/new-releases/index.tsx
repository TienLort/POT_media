import { Container } from '@mui/material'
import React from 'react'
import "./styles.css"
import BestSelling from './best_selling'
import Ranking from './rankings'
import ListRelease from './list_release'
import FooterBanner from 'src/components/footer_banner'
const NewRelease = () => {
    return (
        <div>
            <Container maxWidth="lg" sx={{ maxWidth: '1480px !important' }}>
                <div className="release_title">
                    New Game Releases
                </div>
                <p className="release_desc">
                    If you’re looking for the latest new game releases you’ve come to the right place! Here you’ll find all the newest chart-topping games, including our best sellers. See which games are most wanted by gamers just like you, or check out game review scores on Metacritic.
                </p>
                <BestSelling />
                <Ranking />
                <ListRelease />
            </Container>
            <FooterBanner />
        </div>
    )
}

export default NewRelease