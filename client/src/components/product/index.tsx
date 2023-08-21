import React from 'react'
import styles from './styles.module.css';
import { Box, SxProps } from '@mui/material';

interface IProps {
    sx?: SxProps;
    isBig?: boolean;
}

const Product = (props: IProps) => {
    const { sx, isBig = false } = props;
    return (
        <Box className={styles.wrap_product} sx={sx}>
            <div className={styles.product_content}>
                <img src={require("src/assets/images/product.jpeg")} alt="product image" />
            </div>
            <div className={isBig ? "big-card-desc" : "big-card-none"}>
                Starfield is the first new universe in over 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4.
            </div>
            <div className={styles.product_footer}>
                <div className={styles.product_platform}>
                    Steam
                </div>
                <div className={styles.product_price}>
                    <span className={styles.discount}>
                        -17%
                    </span>
                    <span className={styles.price}>
                        From đ237,208
                    </span>
                </div>
            </div>

            <button className={styles.button}>Button 1</button>
            <button className={styles.button}>Button 2</button>
        </Box>
    )
}
export default Product