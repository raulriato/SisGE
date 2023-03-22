import { SchoolContext } from '@/contexts/SchoolContext';
import { useContext } from 'react';
import styled from 'styled-components';
import { SchoolInput } from './Schools';

type Props = {
  school: SchoolInput,
  setScreen: React.Dispatch<React.SetStateAction<string>>
}

export function School({ school, setScreen }: Props) {
  const SchoolsContext = useContext(SchoolContext);
  const setSchool = SchoolsContext?.setSchool as React.Dispatch<React.SetStateAction<SchoolInput>>;
  const currentSchool = SchoolsContext?.school;

  function handleClick() {
    if (SchoolContext) {
      setSchool({
        ...currentSchool,
        name: school.name,
        city: school.city,
        state: school.state
      });
      setTimeout(() => setScreen('classrooms'), 500);
    }
  }
  return (
    <Container onClick={handleClick}>
      <img src="https://super.abril.com.br/wp-content/uploads/2005/11/escola-2.png" alt="" />
      <h1>{school.name}</h1>
      <div>
        <span>{school.city}</span>
        <span>{school.state}</span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 15%;
  height: 264px;
  background-color: #6a9dc4;
  /* background: linear-gradient(110deg, #59bfff 0%, #f1ffd3 100%); */
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 5px;
  cursor: pointer;

  h1 {
    font-size: 25px;
  }

  div {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  span {
    font-size: 15px;
    color: #333;
  }

  img {
    width: 90%;
    height: 50%;
    object-fit: cover;
    border-radius: 15px;
  }
`;