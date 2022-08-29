import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectVisible, setVisible } from '../redux/gameSlice';
import Rules from '../assets/image-rules.svg';
import { GrFormClose } from 'react-icons/gr';

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const visible = useSelector(selectVisible);
  return (
    <ModalWrap>
      <Flex>
        <GrFormClose size={'30px'} opacity={'0.5'} onClick={() => dispatch(setVisible(!visible))} />
        <img src={Rules} alt="rules" />
      </Flex>
    </ModalWrap>
  );
};

const ModalWrap = styled.div`
  background-color: rgba(46, 46, 46, 0.526);
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  div {
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Flex = styled.div`
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.5);
  svg {
    align-self: flex-end;
    cursor: pointer;
  }
  img {
    width: 100%;
  }
`;

export default Modal;
