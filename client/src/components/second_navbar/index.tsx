import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './styles';


const SecondNavbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const ref = useRef(null);

  return (
    <div className={classes.SecondNavbar}>
      <div className={classes.NavbarContainer} >
        <div className={classes.LeftNav}>
          <div className={classes.LinkButton} >
            <span className={classes.NavLink} onClick={() => navigate("/search")}>
              Discover
              <div className={classes.Arrow}>
              </div>
              <div className={classes.DropDownContent}>
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            </span>

          </div>

          <div className={classes.LinkButton}>
            <a className={classes.NavLink}>
              Categories<div className={classes.Arrow}>
              </div>
            </a>
          </div>
          <div className={classes.LinkButton}>
            <span className={classes.NavLink} onClick={() => navigate("/bundles")}>
              Bundles
              <div className={classes.Arrow}>
              </div>
              <div className={classes.DropDownContent}>
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            </span>

          </div>
          <span className={classes.NavLink} onClick={() => navigate("/upcoming-games")}>
            Upcomming Games
          </span>
          <span className={classes.NavLink} onClick={() => navigate("/new-releases")}>
            New Releases
          </span>
        </div>
        <div className={classes.LeftNav}>
          <a href="https://support.fanatical.com/hc" target="_blank" rel="noopener noreferrer" className={classes.NavLink}>
            Support</a>
          <a className={classes.NavLink} href="/blog">
            Blog</a>
          <span className={classes.NavLink} onClick={() => navigate("/about-us")}>
            About Us
          </span>
        </div>
      </div>
    </div>
  );
}

export default SecondNavbar;
