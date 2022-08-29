import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseIcon, result, style, styleBot, stylePlayer } from '../utils/functions';
import {
  selectBotChoose,
  selectMyChoose,
  selectPlayerWin,
  selectClick,
  setClick,
  setPage,
} from '../redux/gameSlice';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { scale } from '../utils/animations';

const Game: React.FC = () => {
  const dispatch = useDispatch();
  const myChoose = useSelector(selectMyChoose);
  const botChoose = useSelector(selectBotChoose);
  const click = useSelector(selectClick);
  const playerWin = useSelector(selectPlayerWin);

  React.useEffect(() => {
    dispatch(setClick(false));
    if (click) {
      result(myChoose, botChoose, dispatch);
    }
    // eslint-disable-next-line
  }, [click, myChoose]);

  return (
    <div>
      <GameWrap initial="hidden" whileInView="show" variants={scale} transition={{ duration: 0.7 }}>
        <Image className={`${style(myChoose)} ${stylePlayer(playerWin)}`}>
          <h3>My choise</h3>
          <img src={chooseIcon(myChoose)} alt="content" />
        </Image>
        <ButtonContainer>
          <h2>{playerWin}</h2>
          <button onClick={() => dispatch(setPage(false))}>Repeat</button>
        </ButtonContainer>
        <Image className={`${style(botChoose)} ${styleBot(playerWin)}`}>
          <h3>Bot choise</h3>
          <img src={chooseIcon(botChoose)} alt="content" />
        </Image>
      </GameWrap>
    </div>
  );
};

const GameWrap = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 760px) {
    gap: 0.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 1rem;
  }
  button {
    background-color: var(--ui-background);
    color: var(--ui-text);
    border: 1px solid rgba(0, 0, 0, 0.3);
    max-width: 80px;
    padding: 0.3rem 0.3rem;
    border-radius: 1rem;
    cursor: pointer;
    width: 100%;
    transition: 0.2s ease;
    &:active {
      transition: 0.2s ease;
      transform: scale(0.95);
    }
  }
  @media (max-width: 760px) {
    h2 {
      font-size: 1.3rem;
    }
    button {
      font-size: 1rem;
    }
  }
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 50%;
  width: 160px;
  height: 160px;
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.5);
  transition: 0.2s ease;
  border: 0.5rem solid rgba(0, 0, 0, 0.3);
  position: relative;
  h3 {
    position: absolute;
    top: -40%;
  }
  &.red {
    border: 0.5rem solid rgba(200, 33, 39, 0.8);
  }
  &.blue {
    border: 0.5rem solid rgba(20, 70, 151, 0.8);
  }
  &.green {
    border: 0.5rem solid rgba(97, 218, 45, 0.8);
  }
  &.win {
    transform: scale(1.15);
    box-shadow: 0px 7px 25px rgb(70, 70, 70);
  }
  &.lose {
    background-color: rgba(123, 123, 123, 0.497);
    border: 0.5rem solid rgba(56, 56, 56, 0.497);
    transform: scale(0.8);
  }
  &.draw {
    background-color: rgba(123, 123, 123, 0.497);
    border: 0.5rem solid rgba(56, 56, 56, 0.497);
  }
  @media (max-width: 760px) {
    width: 110px;
    height: 110px;
  }
`;

export default Game;
