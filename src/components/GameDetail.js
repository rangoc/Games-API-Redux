import React from 'react';
// Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Redux
import { useSelector } from 'react-redux';
const GameDetail = () => {
  // Data
  const { game, screenshots } = useSelector((state) => state.details);
  return (
    <CardShadow>
      <Detail>
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {game.platforms.map((data) => (
                <h3 key={data.platform.id}>{data.platform}</h3>
              ))}
            </div>
          </div>
        </div>
        <div className="media">
          <img src={game.background_image} alt="background" />
        </div>
        <div className="description">
          <p>{game.description_raw}</p>
        </div>
        <div className="gallery">
          {screenshots.results.map((screen) => (
            <img key={screen.id} src={screen.image} alt="screenshot" />
          ))}
        </div>
      </Detail>
    </CardShadow>
  );
};
const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 20rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;
export default GameDetail;
