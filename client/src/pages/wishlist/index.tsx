import React from 'react'
import "./profile.css"
import { Container } from '@mui/material'
import FooterBanner from 'src/components/footer_banner'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Wishlist = () => {
  return (
    <div>
      <Container maxWidth="lg" sx={{ maxWidth: '1480px !important' }}>
        <div className="wishlist_title">
          My Wishlist
        </div>
        <div className="wishlist_box">
          <div className="wishlist_box-title">
            Your Wishlist is currently empty
          </div>
          <p className="wishlist_box-intro">
            Your Wishlist is a great way to keep track of the games you want. Create your own Wishlist now by clicking on the "Add to Wishlist" icon  from the product page, or when you hover over a product on the front page (desktop only).
          </p>
          <div className="wishlist_selling-container">
            <div className="wishlist-sell-box">
              <div className="wishlist-sell-icon">
                <FavoriteBorderIcon sx={{ fontSize: 50 }} />
              </div>
              <div>
                <div className="wishlist-sell-title">
                  ADD TO YOUR WISHLIST
                </div>
                <div className="wishlist-sell-subtitle">Discover new games and bundles and keep track of all your favourites</div>
              </div>
            </div>
            <div className="wishlist-sell-box">
              <div className="wishlist-sell-icon">
                <FavoriteBorderIcon sx={{ fontSize: 50 }} />
              </div>
              <div>
                <div className="wishlist-sell-title">
                  ADD TO YOUR WISHLIST
                </div>
                <div className="wishlist-sell-subtitle">Discover new games and bundles and keep track of all your favourites</div>
              </div>
            </div>
            <div className="wishlist-sell-box">
              <div className="wishlist-sell-icon">
                <FavoriteBorderIcon sx={{ fontSize: 50 }} />
              </div>
              <div>
                <div className="wishlist-sell-title">
                  ADD TO YOUR WISHLIST
                </div>
                <div className="wishlist-sell-subtitle">Discover new games and bundles and keep track of all your favourites</div>
              </div>
            </div>
          </div>

        </div>
      </Container>
      <FooterBanner />
    </div>
  )
}

export default Wishlist