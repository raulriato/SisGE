import { SchoolContext } from '@/contexts/SchoolContext';
import { useDisable } from '@/hooks';
import { getCitiesByUF, getStates } from '@/services';
import { Button, Input, Title } from '@/styles';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AddSchool } from './AddSchool';
import { GoPlus } from 'react-icons/go';
import { School } from './School';
import { Dropzone } from './Dropzone';

export type SchoolInput = {
  name: string,
  state: string,
  city: string,
};

export type State = {
  id: number,
  sigla: string,
  nome: string,
  regiao: {
    id: string,
    sigla: string,
    nome: string
  }
};

export type city = {
  id: number,
  nome: string,
  microrregiao: {
    id: number,
    nome: string,
    UF: State,
  }
}

type Props = {
  creating: boolean,
  setCreating: React.Dispatch<React.SetStateAction<boolean>>,
  setScreen: React.Dispatch<React.SetStateAction<string>>
}

export function Schools({ creating, setCreating, setScreen }: Props) {
  const SchoolsContext = useContext(SchoolContext);
  const schools = SchoolsContext?.schools;
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<city[]>([]);
  const [school, setSchool] = useState<SchoolInput>({
    name: '',
    state: '',
    city: ''
  });
  const { disabled, disable } = useDisable();

  useEffect(() => {
    getStates()
      .then((res) => res.json())
      .then((data) => setStates(data))
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }, []);

  function handleInputChange(e: React.FormEvent<HTMLInputElement>) {
    setSchool({
      ...school,
      [e.currentTarget.name]: e.currentTarget.value
    });
  }

  function handleSelectChange(e: React.FormEvent<HTMLSelectElement>) {
    setSchool({
      ...school,
      [e.currentTarget.name]: e.currentTarget.value
    });
    if (e.currentTarget.value.length === 2) fetchCities(e.currentTarget.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    disable();
    setTimeout(() => setCreating(false), 1000);
  }

  function fetchCities(uf: string) {
    getCitiesByUF(uf)
      .then((res) => res.json())
      .then((data) => setCities(data))
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }

  return (
    <>
      {
        creating ?
          <Container creating={creating}>
            <Title>Colégios</Title>
            <AddSchool onSubmit={handleSubmit}>
              <h1>Informações:</h1>
              <Input
                placeholder='Nome'
                type='text'
                name='name'
                onChange={handleInputChange}
                value={school.name}
                disabled={disabled}
                required
              />
              <select defaultValue='Estado' onChange={handleSelectChange} required>
                <option>Estado</option>
                {
                  states.map(state => (
                    <option key={state.id} value={state.sigla}>{state.nome}</option>
                  ))
                }
              </select>
              <select defaultValue='Cidade' onChange={handleSelectChange} required>
                <option>Cidade</option>
                {
                  cities.map(city => (
                    <option key={city.id} value={city.nome}>{city.nome}</option>
                  ))
                }
              </select>
              <Dropzone>Símbolo</Dropzone>
              <Button disabled={disabled} className='btn'>Cadastrar</Button>
            </AddSchool>
          </Container>
          :
          <Container creating={creating}>
            <GoPlus onClick={() => setCreating(true)} className='plus'/>
            <Title>Colégios</Title>
            {schools?.map((school, index) => (
              <School key={index + 1} school={school} setScreen={setScreen} />
            ))}
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

  .btn {
    width: 60px;
    height: 45px;
    position: absolute;
    top: calc(50% - 60px/2);
    left: calc(50% - 45px/2);
  }
`;