import { Container } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';
import FooterBanner from 'src/components/footer_banner';
import Product from 'src/components/product';
import "./styles.css";

const TopSellers = () => {

  return (
    <div>
      <Container maxWidth="lg" sx={{ maxWidth: '1480px !important' }}>
        <div className="top_seller-title">
          Top Sellers
        </div>
        <p>Are you searching for the hottest sales on the site? Look no further than Top Sellers! You can find all the hottest offers on games, bundles, eBooks and software. Don’t miss out, bag yourself a bargain with our range of deals.</p>
        <div>
          <div>
            <button>All Top Sellers</button>
            <button>Games</button>
            <button>Books</button>
            <button>Software</button>
          </div>
        </div>
        <ol className="top_seller-list">
          <li>
            <div className="seller-list-number">
              1
            </div>
            <div className="seller-list-image">
              <img src={require("src/assets/images/product.jpeg")} alt="product" />
            </div>
            <div className="seller-list-info">
              <div className="seller-list-title">
                Starfield Premium Edition
              </div>
              <div className="seller-list-intro">
                Starfield is the first new universe in over 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4.
              </div>
              <div className="seller-list-platform">
                <img src={require("src/assets/images/stream.png")} alt="product" />
              </div>
            </div>
            <div className="seller-list-checkout">
              <div className="top_seller-price">
                <span>-16%</span>
                <div>
                  <div>
                    đ1,423,926
                  </div>
                  <div>
                    đ1,196,926
                  </div>
                </div>
              </div>
              <div className="top_seller-button">
                <button>view</button>
                <button>add</button>
              </div>
            </div>
          </li>
        </ol>

      </Container>
      <FooterBanner />
    </div>
  )
}

export default TopSellers