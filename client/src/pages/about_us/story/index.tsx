import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import './styles.css';
import { ReactComponent as Fanatical } from "src/assets/svg/fanatical-icon.svg";
import { ReactComponent as StarDeal } from "src/assets/svg/star-deal-icon.svg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Reason = () => {
    return (
        <Container maxWidth="lg" className="story_wrap">
            <div className="story_title">
                OUR STORY
            </div>
            <p className=''>
                We began our story in the 90s, making affordable software and games available to all on PC CD-ROM. In 2012 we launched Bundle Stars to satisfy the growing global demand for digital games. Our online store has since sold over 100 million keys to gamers in over 200 countries, all sourced from official publishers.
            </p>
            <p className=''>
                Fast forward to today and our journey continues with Fanatical, now part of the Fandom family, where our goal remains the same; providing the best quality, choice and value in digital entertainment.
            </p>
            <div className="story_svg">
                <Fanatical className="fanatical_icon" />
                <ArrowForwardIosIcon />
                <StarDeal className='star_icon' />
                <ArrowForwardIosIcon />
                <Fanatical className="fanatical_icon" />
            </div>
        </Container>
    )
}

export default Reason