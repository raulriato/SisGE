import { useState } from 'react';
import styled from 'styled-components';
import { ClassroomInput } from './Classrooms';
import { Switch } from './Switch';

type Props = {
  classroom: ClassroomInput
}

export function Classroom({ classroom }: Props) {
  const [checked, setChecked] = useState<boolean>(classroom.blocked);
  
  return (
    <Container checked={checked}>
      <h1>Sala {classroom.name}</h1>
      <div>
        <span>
          <p>Capacidade: {classroom.capacity}</p>
        </span>
        <span>
          {
            classroom.teachers.map(teacher => (
              <p key={teacher.id}>{teacher.name}</p>
            ))
          }
        </span>
      </div>
      <SwitchPosition>
        <Switch checked={checked} setChecked={setChecked}/>
      </SwitchPosition>
    </Container>
  );
}

type StyledProps = {
  checked: boolean;
}

const Container = styled.div<StyledProps>`
  width: 15%;
  height: 264px;
  background-color: ${({ checked }) => checked ? '#E2939E' : '#59DE9A'};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 10px;
  cursor: pointer;
  position: relative;

  h1 {
    font-size: 25px;
    color: ${({ checked }) => checked && '#a00000'}
  }

  div {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  p {
    font-size: 15px;
    color: #333;
  }

  span {
    margin-top: 15px;
  }
`;

const SwitchPosition = styled.div`
  width: auto !important;
  position: absolute;
  bottom: 3px;
  right: 5px;
`;