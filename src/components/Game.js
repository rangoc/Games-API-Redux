import React from 'react';
import { Link } from 'react-router-dom';
// Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { popup } from '../animations';
// Redux
import { useDispatch } from 'react-redux';
import { fetchGameDetails } from 'actions/detailsAction';
// util
import { smallImage } from '../util';
const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString(); // converting to string for animation to work, coz it has to be the same like the layoutId in Game Detail
  // Load Details
  const dispatch = useDispatch();
  const fetchDetailsHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(fetchGameDetails(id));
  };
  return (
    <StyledGame
      layoutId={stringPathId}
      variants={popup}
      initial="hidden"
      animate="show"
      onClick={fetchDetailsHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;
