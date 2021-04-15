import React from 'react';
import { Link } from 'react-router-dom';
// Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Redux
import { useDispatch } from 'react-redux';
import { fetchGameDetails } from 'actions/detailsAction';
const Game = ({ name, released, image, id }) => {
  // Load Details
  const dispatch = useDispatch();
  const fetchDetailsHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(fetchGameDetails(id));
  };
  return (
    <StyledGame onClick={fetchDetailsHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={name} />
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
