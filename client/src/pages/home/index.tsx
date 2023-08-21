import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollTo } from 'framer-motion-scroll-to-hook';
import { IGame, IGameHome } from 'src/types/game';
import { Box } from '@mui/material';
import './styles.css'
import Banner from 'src/components/banner';
import { useAppDispatch, useAppSelector } from 'src/redux_store';
import { getGames } from "src/redux_store/games/games_action";
import FlashDeals from './flash_deals';
import FeatureGames from './feature_games';
import MostWanted from './most_wanted';
import GamersRecommend from './gamers_recommend';
import FanaticalBlog from './fanatical_blog';
import HomeCounter from 'src/components/home_counter';
import RandomChoice from './random_choice';
import GameFinder from './game_finder';
import TopSeller from './top_sellers';
import UpcomingGame from './upcoming_games';
import PopularGame from './popular_games';
import NewRelease from './new_releases';
import GreatDeal from './great_deals';
import BrowseGame from './browse_games';
import OfficialPartner from './official_partners';

const getRandomItems = (items: unknown[], length: number) => {
  const randomItems = new Set();
  while (randomItems.size < length) {
    const index = Math.floor(Math.random() * items.length);
    randomItems.add(items[index]);
  }
  return [...randomItems];
};

const Home = () => {
  const scrollTo = useScrollTo();

  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.gameSlice);
  const [gamesHome, setGamesHome] = useState<IGameHome[]>([]);
  const [gamesDeal, setGamesDeal] = useState<IGameHome[]>([]);
  useEffect(() => {
    dispatch(getGames()).unwrap().then((data) => {
      setGamesHome(getRandomItems(data, 4) as IGameHome[]);
      setGamesDeal(getRandomItems(data, 8) as IGameHome[]);
    });
    scrollTo();
  }, []);
  console.log(data);
  return (
    <Box>
      <Banner />
      <div className="Title">
        Visit Ubisoft universes
      </div>
      <FeatureGames />
      <HomeCounter />
      <RandomChoice />
      <TopSeller />
      <GameFinder />
      <UpcomingGame />
      <FlashDeals gamesHome={gamesHome} />
      <MostWanted gamesDeal={gamesDeal} />
      <BrowseGame />
      <NewRelease />
      <PopularGame />
      <OfficialPartner />
      <GamersRecommend gamesHome={gamesHome} />
      <GreatDeal />
      <FanaticalBlog />
    </Box >
  );
}

export default Home






