import { ClassroomContext, SchoolContext } from '@/contexts';
import { useDisable } from '@/hooks';
import { Button, Input, Title } from '@/styles';
import { SetStateAction, useContext, useState } from 'react';
import { GoPlus } from 'react-icons/go';
import styled from 'styled-components';
import { AddClassroom } from './AddClassroom';
import { Classroom } from './Classroom';
import { Dropzone } from './Dropzone';
import { SchoolInput } from './Schools';
import { Switch } from './Switch';
import { TeachersSelect } from './TeachersSelect';

export type Teacher = {
  id: number,
  name: string
}

export type ClassroomInput = {
  name: string,
  capacity: number,
  blocked: boolean,
  teachers: Teacher[],
  school: string,
  classes: string,
  protocol: string
}

type Props = {
  creating: boolean,
  setCreating: React.Dispatch<SetStateAction<boolean>>
}

export function Classrooms({ creating, setCreating }: Props) {
  const { disabled, disable } = useDisable();

  const ClassroomsContext = useContext(ClassroomContext);
  const teachers = ClassroomsContext?.teachers as Teacher[];
  const classrooms = ClassroomsContext?.classrooms as ClassroomInput[];

  const SchoolsContext = useContext(SchoolContext);
  const currentSchool = SchoolsContext?.school as SchoolInput;

  const [classroom, setClassroom] = useState<ClassroomInput>({
    name: '',
    capacity: 0,
    blocked: false,
    teachers: [],
    school: '',
    classes: '',
    protocol: ''
  });
  const [checked, setChecked] = useState<boolean>(false);

  const classroomsFromCurrentSchool = classrooms.filter(classroom => classroom.school === currentSchool.name);

  function handleInputChange(e: React.FormEvent<HTMLInputElement>) {
    setClassroom({
      ...classroom,
      [e.currentTarget.name]: e.currentTarget.value
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    disable();
  }

  return (
    <>
      {
        creating ?
          <Container creating={creating}>
            <Title>Salas: {currentSchool.name}</Title>
            <AddClassroom onSubmit={handleSubmit}>
              <h1>Informações:</h1>
              <Input
                placeholder='Nome'
                type='text'
                name='name'
                onChange={handleInputChange}
                value={classroom.name}
                disabled={disabled}
                required
              />
              <Input
                placeholder='Capacidade'
                type='number'
                name='capacity'
                onChange={handleInputChange}
                disabled={disabled}
                required
              />
              <Input
                placeholder='Colégio'
                type='text'
                name='school'
                onChange={handleInputChange}
                value={classroom.school}
                disabled={disabled}
                required
              />
              <TeachersSelect teachers={teachers} disabled={disabled as boolean}/>
              <Dropzone small disabled={disabled}>Grade de aulas</Dropzone>
              <Dropzone small disabled={disabled}>Protocolo</Dropzone>
              <SwitchPosition>
                <Switch checked={checked} setChecked={setChecked} creating>Sala Bloqueada</Switch>
              </SwitchPosition>
              <Button disabled={disabled}>Cadastrar</Button>
            </AddClassroom>
          </Container>
          :
          <Container creating={creating}>
            <GoPlus onClick={() => setCreating(true)} className='plus' />
            <Title>Salas: {currentSchool.name}</Title>
            {
              classroomsFromCurrentSchool.map((classroom, index) => (
                <Classroom key={index + 1} classroom={classroom} />
              ))
            }
          </Container>
      }
    </>
  );
}

type StyledProps = {
  creating: boolean
}

const Container = styled.div<StyledProps>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ creating }) => creating ? `
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
  `
    :
    `
      padding: 100px 0 90px 40px;
      gap: 5px 10px;
      flex-wrap: wrap;
    `
}

  .plus {
    width: 40px;
    height: 40px;
    padding: 8px;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 3px;
    color: #333;
    transition: all .3s ease;
    cursor: pointer;

    &:hover {
      background-color: rgba(170, 170, 170, 0.5);
      color: #000;
    }
  }
`;

const SwitchPosition = styled.div`
  width: 100%;
  padding-left: 15px;
  display: flex;
  justify-content: start;
`;