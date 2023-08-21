import React from 'react'
import { Button, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import Typewriter from "typewriter-effect"
import { useStyles } from './styles';

const home = [
    {
        text1: "Books, Softwares, and Games",
        text2: "Let's explore with us",
        text3: "Choose attractive games and books",
        desc: 'FREE BONUS! Get a scratchcard with a free game or coupon',
    },
]
const Banner = () => {
    const classes = useStyles();
    return (
        <Box className={classes.hero}>
            <Container maxWidth="lg" sx={{
                height: '280px',
                display: 'flex',
                justifyContent: 'center',
            }} >
                {home.map((val, i) => (
                    <Box className={classes.heroContent} key={i}>
                        <Box className={classes.heroDesc}>
                            <Typewriter
                                options={{
                                    strings: [`${val.text1}`, `${val.text2}`, `${val.text3}`],
                                    autoStart: true,
                                    loop: true,
                                }} />
                        </Box>
                        <Typography variant='h6' > {val.desc} </Typography>
                    </Box>
                ))}

            </Container>
        </Box >

    )
}
export default Banner 