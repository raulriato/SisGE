import { useState } from 'react';
import styled from 'styled-components';
import { Classrooms } from './Classrooms';
import { Dashboard } from './Dashboard';
import { Schools } from './Schools';

type Props = {
  show: boolean,
  screen: string,
  setScreen: React.Dispatch<React.SetStateAction<string>>
}

type ContainerProps = Pick<Props, 'show'>

export function Board({ show, screen, setScreen }: Props) {
  const [creating, setCreating] = useState<boolean>(false);
  return (
    <Container show={show}>
      {
        screen === 'classrooms' ?
          <Classrooms creating={creating} setCreating={setCreating} />
          :
          screen === 'schools' ?
            <Schools 
              creating={creating}
              setCreating={setCreating}
              setScreen={setScreen}
            />
            :
            <Dashboard />
      }
    </Container>
  );
}

const Container = styled.div<ContainerProps>`
  width: 90%;
  height: 85%;
  background-color: #ddd;
  border-radius: 20px;
  box-shadow: 4px 4px 8px 5px rgba(0, 0, 0, 0.4);
  transition: all 0.1s linear;

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;