import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectClick, setBotChoose, setClick, setMyChoose, setPage } from '../redux/gameSlice';
import Paper from '../assets/icon-paper.svg';
import Scissors from '../assets/icon-scissors.svg';
import Rock from '../assets/icon-rock.svg';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { scaleMap } from '../utils/animations';

const Play: React.FC = () => {
  const dispatch = useDispatch();
  const click = useSelector(selectClick);
  const variants = [
    { items: 'rock', image: Rock, style: 'red' },
    { items: 'paper', image: Paper, style: 'blue' },
    { items: 'scissors', image: Scissors, style: 'green' },
  ];

  const toggle = (elem: string) => {
    dispatch(setClick(!click));
    dispatch(setMyChoose(elem));
    dispatch(setBotChoose(variants[Math.floor(Math.random() * 3)].items));
    dispatch(setPage(true));
  };

  return (
    <List initial="hidden" whileInView="show">
      {variants.map((elem, index) => (
        <ListItem
          custom={index + 1}
          variants={scaleMap}
          onClick={() => toggle(elem.items)}
          key={index}
          className={elem.style}>
          <img src={elem.image} alt="game icon" />
        </ListItem>
      ))}
    </List>
  );
};

const List = styled(motion.ul)`
  padding: 2rem 0;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 760px) {
    max-width: 320px;
  }
`;

const ListItem = styled(motion.li)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 50%;
  width: 160px;
  height: 160px;
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  border: 0.5rem solid rgba(0, 0, 0, 0.3);
  &.red {
    border: 0.5rem solid rgba(200, 33, 39, 0.8);
  }
  &.blue {
    border: 0.5rem solid rgba(20, 70, 151, 0.8);
  }
  &.green {
    border: 0.5rem solid rgba(97, 218, 45, 0.8);
  }
  @media (max-width: 760px) {
    width: 110px;
    height: 110px;
  }
`;

export default Play;
