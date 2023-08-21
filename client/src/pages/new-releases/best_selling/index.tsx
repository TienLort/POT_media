import { Container } from '@mui/material'
import React from 'react'
import "./styles.css"
import Product from 'src/components/product'
const BestSelling = () => {
    return (
        <div>
            <div className="release_title">
                Best Selling New Releases
            </div>
            <div className="release_products">
                <Product sx={{ width: '32%' }} />
                <Product sx={{ width: '32%' }} />
                <Product sx={{ width: '32%' }} />
                <Product sx={{ width: '32%' }} />
                <Product sx={{ width: '32%' }} />
                <Product sx={{ width: '32%' }} />
            </div>
        </div>
    )
}

export default BestSelling