import React from 'react';
import { useSelector } from 'react-redux';
import { selectPage, selectVisible } from '../redux/gameSlice';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Game from '../components/Game';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Play from '../components/Play';

const App: React.FC = () => {
  const page = useSelector(selectPage);
  const visible = useSelector(selectVisible);
  return (
    <Wrapper>
      <Header />
      {page ? <Game /> : <Play />}
      {visible && <Modal />}
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 790px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 24px);
`;

export default App;
