import React from 'react';
import { useHistory } from 'react-router-dom';
// Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Redux
import { useSelector } from 'react-redux';
// util
import { smallImage } from '../util';
// Images
import playstation from 'assets/playstation.svg';
import steam from 'assets/steam.svg';
import xbox from 'assets/xbox.svg';
import nintendo from 'assets/nintendo.svg';
import apple from 'assets/apple.svg';
import gamepad from 'gamepad.svg';
// Star images
import starEmpty from 'assets/star-empty.png';
import starFull from 'assets/star-full.png';

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  // Data
  const { game, screenshots, isLoading } = useSelector(
    (state) => state.details
  );
  // Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  };
  // Get stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull} />);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty} />);
      }
    }
    return stars;
  };
  // Get platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case 'Playstation 4':
        return playstation;
      case 'Xbox One':
        return xbox;
      case 'PC':
        return steam;
      case 'Nintendo Switch':
        return nintendo;
      case 'iOS':
        return apple;
      default:
        return gamepad;
    }
  };
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt="platform"
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.div
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt="background"
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screenshots.results.map((screen) => (
                <img
                  key={screen.id}
                  src={smallImage(screen.image, 1280)}
                  alt="screenshot"
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};
const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  z-index: 5;
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
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  z-index: 10;
  left: 10%;

  color: black;
  img {
    width: 100%;
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;
export default GameDetail;
