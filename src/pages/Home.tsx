import styled from 'styled-components';
import { Sidebar, Board } from '@/components';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

export function Home() {
  const [show, setShow] = useState<boolean>(false);
  const [screen, setScreen] = useState<string>('');

  return (
    <Container show={show} >
      <DashboardContainer onClick={() => show && setShow(false)} show={show}>
        <Board show={show} screen={screen} setScreen={setScreen}/>
      </DashboardContainer>
      <Sidebar show={show} setShow={setShow} setScreen={setScreen}/>
      <FaBars onClick={() => setShow(!show)} className='bars'/>
    </Container>
  );
}

type StyledProps = {
  show: boolean
}

const Container = styled.div<StyledProps>`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #5ddfe6 0%, #004aad 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .bars {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 30px;
    color: ${({ show }) => show ? '#000' : '#ddd'};
    cursor: pointer;
  }
`;

const DashboardContainer = styled.div<StyledProps>`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    ${({ show }) => show && 'filter: blur(5px);'}
`;