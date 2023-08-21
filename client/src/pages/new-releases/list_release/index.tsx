import { Container, Pagination } from '@mui/material'
import React from 'react'
import "./styles.css"
import Product from 'src/components/product';

const ListRelease = () => {
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
                <Product sx={{ width: '32%' }} />
                <Product sx={{ width: '32%' }} />
                <Product sx={{ width: '32%' }} />
                <Product sx={{ width: '32%' }} />
                <Product sx={{ width: '32%' }} />
                <Product sx={{ width: '32%' }} />
                <Product sx={{ width: '32%' }} />
                <Product sx={{ width: '32%' }} />
                <Product sx={{ width: '32%' }} />
                <Product sx={{ width: '32%' }} />
                <Product sx={{ width: '32%' }} />
                <Product sx={{ width: '32%' }} />
            </div>
            <Pagination count={10} variant="outlined" />
        </div>
    )
}

export default ListRelease