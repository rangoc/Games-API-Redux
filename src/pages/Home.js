import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGames } from 'actions/gamesAction';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  });
  return <div>Home</div>;
};

export default Home;
