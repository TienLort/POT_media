import React from 'react'
import styles from './styles.module.css';
import { Container } from '@mui/material';
const HomeCounter = () => {
    return (
        <div className={styles.wrap_counter}>
            <Container maxWidth="lg" className={styles.contain_counter}>
                <div className="left">
                    <div className={styles.bannerTop}>
                        <div className={styles.heading}>
                            10,000+
                        </div>
                        <div className={styles.desc}>
                            Officially Licensed Games
                        </div>
                    </div>
                    <div className="banner-bottom">
                        <div className={styles.heading}>
                            1,100+
                        </div>
                        <div className={styles.desc}>
                            Official Publishers
                        </div>
                    </div>
                </div>
                <div className="middle">
                    <img className={styles.image} src={require("src/assets/images/Trustpilot_black.jpg")} alt="CounterLogo" />
                    <div className={styles.desc}>
                        <b>75,386</b> Customer Reviews
                    </div>
                </div>
                <div className="right">
                    <div className={styles.bannerTop}>
                        <div className={styles.heading}>
                            3 Million+
                        </div>
                        <div className={styles.desc}>
                            Customers Worldwide
                        </div>
                    </div>
                    <div className="banner-bottom">
                        <div className={styles.heading}>
                            100 Million+

                        </div>
                        <div className={styles.desc}>
                            Official Keys Sold
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default HomeCounter