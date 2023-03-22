import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

type Props = {
  show: boolean,
  setShow: Dispatch<SetStateAction<boolean>>,
  setScreen: Dispatch<SetStateAction<string>>
};

type ContainerProps = Pick<Props, 'show'>

export function Sidebar({ show, setShow, setScreen }: Props) {

  function handleScreen(screen: string) {
    setScreen(screen);
    setShow(false);
  }
  return (
    <Container show={show}>
      <h1 onClick={() => handleScreen('dashboard')}>Dashboard</h1>
      <h1 onClick={() => handleScreen('schools')}>Colégios</h1>
      <h1 onClick={() => handleScreen('classrooms')}>Salas</h1>
    </Container>
  );
}

const Container = styled.div<ContainerProps>`
  width: 80%;
  max-width: 300px;
  height: 100%;
  background-color: #eee;
  box-shadow: 4px 0 8px 3px rgba(0,0,0,0.3);
  gap: 15px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  padding: 100px 0;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.1s linear;
  transform: translateX(-300px);

  h1 {
    width: 100%;
    height: 50px;
    font-size: 25px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    cursor: pointer;
    transition: all 0.3s linear;

    &:hover {
      background-color: #fff;
    }
  }

  ${({ show }) => show && 'transform: translateX(0);'}
`;