import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import './styles.css';

const Talk = () => {
    return (
        <Container maxWidth="lg" className="talk_wrap">
            <div className="talk_title">
                TALK TO US
            </div>
            <p className=''>
                We always love feedback from our community. Get in touch with us on <a href='#'>Twitter</a>, <a href='#'>Facebook</a> or our<a href='#'> Steam Community Group</a>.
            </p>
            <p className=''>
                Feel free to browse our <a href='#'>Support pages</a> for answers to common questions our users have. If you can’t find what you’re looking for, then our in-house Support team will be happy to help.
            </p>
            <div className="contact_block">
                <div>
                    <div className="contact_block-heading">
                        <div className="title">
                            MARKETING & PR
                        </div>
                        <div className="desc">
                            Partnership opportunities
                        </div>
                    </div>
                    <div className="contact_block-email">
                        marketing@fanatical.com
                    </div>
                </div>
                <div>
                    <div className="contact_block-heading">
                        <div className="title">
                            MARKETING & PR
                        </div>
                        <div className="desc">
                            Partnership opportunities
                        </div>
                    </div>
                    <div className="contact_block-email">
                        marketing@fanatical.com
                    </div>
                </div>
                <div>
                    <div className="contact_block-heading">
                        <div className="title">
                            MARKETING & PR
                        </div>
                        <div className="desc">
                            Partnership opportunities
                        </div>
                    </div>
                    <div className="contact_block-email">
                        marketing@fanatical.com
                    </div>
                </div>
            </div>
            <p className=''>
                Based in the United Kingdom, Fanatical is owned and operated by Fandom, the world's largest fan platform with more than 330 million monthly users. For over 25 years, Focus has been successfully partnering with PC developers and publishers of all sizes. Over 30 employees work at our base in Staffordshire.
            </p>
            <p className=''>
                We are members of UKIE, trade body for the UK’s games and interactive entertainment industry.
            </p>
            <img src={require("src/assets/images/ukie-logo.png")} alt="product image" />
        </Container>
    )
}

export default Talk