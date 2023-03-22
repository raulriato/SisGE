import { SchoolInput } from '@/components';
import React, { createContext, useState } from 'react';

type SchoolContextValue = {
  schools: SchoolInput[],
  setSchools: React.Dispatch<React.SetStateAction<SchoolInput[]>>
  school: SchoolInput,
  setSchool: React.Dispatch<React.SetStateAction<SchoolInput>>
}

export const SchoolContext = createContext<SchoolContextValue | null>(null);

type Props = {
  children: React.ReactNode
}

export function SchoolProvider({ children }: Props) {
  const [schools, setSchools] = useState<SchoolInput[]>([
    {
      name: 'Escola 1',
      city: 'Itaí',
      state: 'São Paulo'
    },
    {
      name: 'Escola 2',
      city: 'Cornélio Procópio',
      state: 'Paraná'
    },
    {
      name: 'Escola 3',
      city: 'Londrina',
      state: 'Paraná'
    },
    {
      name: 'Escola 4',
      city: 'Arapongas',
      state: 'Paraná'
    },
    {
      name: 'Escola 5',
      city: 'Uraí',
      state: 'Paraná'
    },
    {
      name: 'Escola 6',
      city: 'Ibiporã',
      state: 'Paraná'
    },
    {
      name: 'Escola 7',
      city: 'Nova Fátima',
      state: 'Paraná'
    },
    {
      name: 'Escola 8',
      city: 'Sertanópolis',
      state: 'Paraná'
    }
  ]);

  const [school, setSchool] = useState<SchoolInput>({
    name: '',
    city: '',
    state: ''
  });

  return (
    <SchoolContext.Provider value={{ schools, setSchools, school, setSchool }}>
      {children}
    </SchoolContext.Provider>
  );
}