import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectMood, setMood, setTheme, selectTheme } from '../redux/gameSlice';
import Moon from '../assets/moon.svg';
import Sun from '../assets/sun.svg';

const Toggle: React.FC = () => {
  const dispatch = useDispatch();
  const mood = useSelector(selectMood);
  const theme = useSelector(selectTheme);

  const changeMood = () => {
    dispatch(setMood(theme ? 'light' : 'dark'));
  };

  React.useEffect(() => {
    document.body.setAttribute('theme', mood);
  }, [mood]);

  return (
    <div>
      <Label>
        <Input
          type="checkbox"
          checked={theme}
          onChange={(event) => dispatch(setTheme(event.target.checked))}
        />
        <Slider onClick={changeMood} />
      </Label>
    </div>
  );
};

const Label = styled.label`
  position: relative;
`;

const Input = styled.input`
  position: absolute;
  left: -9999px;
  top: -9999px;
  &:checked + span {
    background-color: #07fad5c5;
    &:before {
      left: calc(100% - 2px);
      transform: translateX(-100%);
      background-color: #ffffffdb;
      background-image: url(${Moon});
    }
  }

  &:focus + span {
    box-shadow: 0 0 0 2px #00000019;
  }

  &:focus:checked + span {
    box-shadow: 0 0 0 2px #0a887553;
  }
`;

const Slider = styled.span`
  display: flex;
  cursor: pointer;
  width: 50px;
  height: 25px;
  border-radius: 45px;
  background-color: #0404045a;
  position: relative;
  transition: background-color 0.2s, box-shadow 0.2s;
  &:before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    transition: 0.2s;
    background-color: #f9f9f96f;
    background-image: url(${Sun});
    background-size: 17px;
    background-position: center;
    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
    background-repeat: no-repeat;
  }

  &:active:before {
    width: 27px;
  }
`;
export default Toggle;
