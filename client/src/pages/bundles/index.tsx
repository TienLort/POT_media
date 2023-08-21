import React from 'react'
import "./profile.css"
import { Container } from '@mui/material'
import FooterBanner from 'src/components/footer_banner'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Product from 'src/components/product';

const Bundles = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Container maxWidth="lg" sx={{ maxWidth: '1480px !important' }}>
        <div className="bundles_title">
          My Wishlist
        </div>
        <p>Find all upcoming games and grab some sweet bonuses when you pre-order. You can also use the dropdown menu to sort by Top Sellers, Release Date, or Price! Pre-order or wishlist for later so you don’t miss out on release day.</p>
        <div>
          <div>
            <button>All</button>
            <button>Available to Preorder</button>
            <button>Available Soon</button>
          </div>
          <div>
            <span>Sort by:</span>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="">
                  None
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="bundles_list">
          <Product sx={{ width: "calc(33.33% - 20px)" }} />
          <Product sx={{ width: "calc(33.33% - 20px)" }} />
          <Product sx={{ width: "calc(33.33% - 20px)" }} />
          <Product sx={{ width: "calc(33.33% - 20px)" }} />
          <Product sx={{ width: "calc(33.33% - 20px)" }} />
          <Product sx={{ width: "calc(33.33% - 20px)" }} />
          <Product sx={{ width: "calc(33.33% - 20px)" }} />
          <Product sx={{ width: "calc(33.33% - 20px)" }} />
          <Product sx={{ width: "calc(33.33% - 20px)" }} />
          <Product sx={{ width: "calc(33.33% - 20px)" }} />
          <Product sx={{ width: "calc(33.33% - 20px)" }} />
          <Product sx={{ width: "calc(33.33% - 20px)" }} />
          <Product sx={{ width: "calc(33.33% - 20px)" }} />
          <Product sx={{ width: "calc(33.33% - 20px)" }} />
          <Product sx={{ width: "calc(33.33% - 20px)" }} />
          <Product sx={{ width: "calc(33.33% - 20px)" }} />
          <Product sx={{ width: "calc(33.33% - 20px)" }} />
          <Product sx={{ width: "calc(33.33% - 20px)" }} />
          <Product sx={{ width: "calc(33.33% - 20px)" }} />
          <Product sx={{ width: "calc(33.33% - 20px)" }} />
          <Product sx={{ width: "calc(33.33% - 20px)" }} />
          <Product sx={{ width: "calc(33.33% - 20px)" }} />
          <Product sx={{ width: "calc(33.33% - 20px)" }} />
          <Product sx={{ width: "calc(33.33% - 20px)" }} />
        </div>
      </Container>
      <FooterBanner />
    </div>
  )
}

export default Bundles