import Scissors from '../assets/icon-scissors.svg';
import Rock from '../assets/icon-rock.svg';
import Paper from '../assets/icon-paper.svg';
import { setMinus, setPlayerWin, setPlus } from '../redux/gameSlice';
import { Dispatch, AnyAction } from '@reduxjs/toolkit';

export const result = (myChoose: string, botChoose: string, dispatch: Dispatch<AnyAction>) => {
  if (myChoose === botChoose) {
    dispatch(setPlayerWin('Draw🤝'));
  } else if (myChoose === 'rock' && botChoose === 'scissors') {
    dispatch(setPlayerWin('You win🤘'));
    dispatch(setPlus());
  } else if (myChoose === 'paper' && botChoose === 'rock') {
    dispatch(setPlayerWin('You win🤘'));
    dispatch(setPlus());
  } else if (myChoose === 'scissors' && botChoose === 'paper') {
    dispatch(setPlayerWin('You win🤘'));
    dispatch(setPlus());
  } else if (myChoose === 'rock' && botChoose === 'paper') {
    dispatch(setPlayerWin('You lose👎'));
    dispatch(setMinus());
  } else if (myChoose === 'scissors' && botChoose === 'rock') {
    dispatch(setPlayerWin('You lose👎'));
    dispatch(setMinus());
  } else if (myChoose === 'paper' && botChoose === 'scissors') {
    dispatch(setPlayerWin('You lose👎'));
    dispatch(setMinus());
  }
};

export const chooseIcon = (input: string) => {
  if (input === 'scissors') {
    return Scissors;
  } else if (input === 'rock') {
    return Rock;
  } else if (input === 'paper') {
    return Paper;
  }
};

export const style = (input: string) => {
  if (input === 'scissors') {
    return 'green';
  } else if (input === 'rock') {
    return 'red';
  } else if (input === 'paper') {
    return 'blue';
  }
};

export const stylePlayer = (input: string) => {
  if (input === 'You win🤘') {
    return 'win';
  } else if (input === 'You lose👎') {
    return 'lose';
  } else if (input === 'Draw🤝') {
    return 'draw';
  }
};

export const styleBot = (input: string) => {
  if (input === 'You win🤘') {
    return 'lose';
  } else if (input === 'You lose👎') {
    return 'win';
  } else if (input === 'Draw🤝') {
    return 'draw';
  }
};
