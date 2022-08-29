import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  selectScore,
  setBotChoose,
  setClick,
  setMyChoose,
  setPage,
  setPlayerWin,
  setScore,
} from '../redux/gameSlice';
import Theme from './Theme';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const score = useSelector(selectScore);
  const reset = () => {
    dispatch(setScore(0));
    dispatch(setBotChoose(''));
    dispatch(setMyChoose(''));
    dispatch(setPlayerWin(''));
    dispatch(setPage(false));
    dispatch(setClick(false));
  };

  return (
    <HeaderWrap>
      <h1>
        Rock
        <br />
        paper
        <br />
        scissor
      </h1>
      <Flex>
        <Score>
          <p>Score</p>
          <h2>{score}</h2>
        </Score>
        <FlexIn>
          <button onClick={reset}>Reset</button>
          <Theme />
        </FlexIn>
      </Flex>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 0.5rem;
  border: 3px solid rgba(137, 137, 137, 0.315);
  border-radius: 1rem;
  h1 {
    text-transform: uppercase;
    font-size: 2.2rem;
    line-height: 2rem;
    margin: 0;
  }
  p {
    font-size: 1rem;
  }
  h2 {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    h1 {
      font-size: 1.5rem;
      line-height: 1.5rem;
    }
    h2 {
      font-size: 2rem;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexIn = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.3rem;
  button {
    padding: 0.1rem 0.5rem;
    border-radius: 1rem;
    text-align: center;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: var(--ui-background);
    color: var(--ui-text);
    transition: 0.2s ease-in-out;
    &:active {
      transition: 0.2s ease-in-out;
      transform: scale(0.95);
    }
  }
`;

const Score = styled.div`
  background-color: var(--ui-background);
  color: var(--ui-text);
  width: 110px;
  height: 110px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 0.5rem;
  transition: 0.2s ease;
  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;

export default Header;
