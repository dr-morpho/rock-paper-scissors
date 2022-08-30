import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectVisible, setVisible } from '../redux/gameSlice';

const Footer: React.FC = () => {
  const dispatch = useDispatch();
  const visible = useSelector(selectVisible);
  return (
    <FooterWrap>
      <div>
        <p>By</p>
        <a href="https://github.com/dr-morpho" target="_blank" rel="noreferrer">
          dr_morpho
        </a>
      </div>
      <button onClick={() => dispatch(setVisible(!visible))}>Info</button>
    </FooterWrap>
  );
};

const FooterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  p {
    font-family: 'Special Elite';
    font-size: 1.2rem;
  }
  a {
    text-decoration: none;
    font-family: 'Special Elite';
    color: var(--text);
    font-size: 1.2rem;
  }

  button {
    background-color: var(--ui-background);
    color: var(--ui-text);
    border: 1px solid rgba(0, 0, 0, 0.3);
    max-width: 70px;
    padding: 0.3rem 0.5rem;
    border-radius: 1rem;
    cursor: pointer;
    width: 100%;
    justify-self: end;
    transition: 0.2s ease;
    &:active {
      transition: 0.2s ease;
      transform: scale(0.95);
    }
  }
`;

export default Footer;
