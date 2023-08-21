
import React, { useEffect, useState } from 'react';
import './styles.css';
import { Container } from '@mui/material';

const arr = [
  {
    img: 'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    img: 'https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    img: 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    img: 'https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    img: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  }
]
const FeatureGames = () => {
  const [selected, setSelected] = useState(2);
  const [activeBackground, setActiveBackground] = useState(arr[selected].img);

  const handleClick = (i: number) => {
    if (i != selected) {
      setSelected(i);
      setActiveBackground(arr[i].img)
    }
  }

  return (
    <Container maxWidth="lg" sx={{ height: '100%', maxWidth: '1480px !important', paddingBottom: '50px' }}>

      <div className="feature-games">
        {
          arr.map((val, i) => (
            <div
              key={i}
              className={i === selected ? "slide active" : "slide"}
              style={{
                display: "flex",
              }}
              onClick={() => handleClick(i)}
            >
              <div style={{
                backgroundImage: i === selected ? `url(${activeBackground})` : `url(${val.img})`,
                flex: "1",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}>

              </div>
              <div className="game-info" >
                {
                  arr.map((val, i) => (
                    <img
                      src={val.img}
                      key={i}
                      style={{ width: "80px", cursor: 'pointer' }}
                      onMouseEnter={() => setActiveBackground(val.img)}
                      onMouseLeave={() => setActiveBackground(arr[selected].img)}
                    />
                  ))
                }
                <h3>Spring</h3>
              </div>
            </div>
          ))
        }

      </div >
    </Container>
  );
}

export default FeatureGames






