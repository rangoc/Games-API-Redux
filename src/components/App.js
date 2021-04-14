import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGames } from 'actions/gamesAction';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  });
  return <div>Hello from App.js</div>;
};

export default App;
