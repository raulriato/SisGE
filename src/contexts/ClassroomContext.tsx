import { ClassroomInput, Teacher } from '@/components';
import React, { createContext, useState } from 'react';

type ClassroomContextValue = {
  classrooms: ClassroomInput[],
  setClassrooms: React.Dispatch<React.SetStateAction<ClassroomInput[]>>,
  teachers: Teacher[],
  setTeachers: React.Dispatch<React.SetStateAction<Teacher[]>>
}

export const ClassroomContext = createContext<ClassroomContextValue | null>(null);

type Props = {
  children: React.ReactNode
}

export function ClassroomProvider({ children }: Props) {
  const [classrooms, setClassrooms] = useState<ClassroomInput[]>([
    {
      name: 'A',
      capacity: 40,
      blocked: false,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 1',
      classes: '',
      protocol: ''
    },
    {
      name: 'A',
      capacity: 40,
      blocked: true,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 2',
      classes: '',
      protocol: ''
    },
    {
      name: 'A',
      capacity: 40,
      blocked: true,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 3',
      classes: '',
      protocol: ''
    },
    {
      name: 'A',
      capacity: 40,
      blocked: false,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 4',
      classes: '',
      protocol: ''
    },
    {
      name: 'A',
      capacity: 40,
      blocked: true,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 5',
      classes: '',
      protocol: ''
    },
    {
      name: 'A',
      capacity: 40,
      blocked: false,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 6',
      classes: '',
      protocol: ''
    },
    {
      name: 'A',
      capacity: 40,
      blocked: false,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 7',
      classes: '',
      protocol: ''
    },
    {
      name: 'A',
      capacity: 40,
      blocked: true,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 8',
      classes: '',
      protocol: ''
    },
    {
      name: 'B',
      capacity: 40,
      blocked: true,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 1',
      classes: '',
      protocol: ''
    },
    {
      name: 'B',
      capacity: 40,
      blocked: false,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 2',
      classes: '',
      protocol: ''
    },
    {
      name: 'B',
      capacity: 40,
      blocked: true,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 3',
      classes: '',
      protocol: ''
    },
    {
      name: 'B',
      capacity: 40,
      blocked: true,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 4',
      classes: '',
      protocol: ''
    },
    {
      name: 'B',
      capacity: 40,
      blocked: false,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 5',
      classes: '',
      protocol: ''
    },
    {
      name: 'B',
      capacity: 40,
      blocked: false,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 6',
      classes: '',
      protocol: ''
    },
    {
      name: 'B',
      capacity: 40,
      blocked: true,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 7',
      classes: '',
      protocol: ''
    },
    {
      name: 'B',
      capacity: 40,
      blocked: false,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 8',
      classes: '',
      protocol: ''
    },
    {
      name: 'C',
      capacity: 40,
      blocked: true,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 1',
      classes: '',
      protocol: ''
    },
    {
      name: 'C',
      capacity: 40,
      blocked: false,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 2',
      classes: '',
      protocol: ''
    },
    {
      name: 'C',
      capacity: 40,
      blocked: true,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 3',
      classes: '',
      protocol: ''
    },
    {
      name: 'C',
      capacity: 40,
      blocked: false,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 4',
      classes: '',
      protocol: ''
    },
    {
      name: 'C',
      capacity: 40,
      blocked: false,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 5',
      classes: '',
      protocol: ''
    },
    {
      name: 'C',
      capacity: 40,
      blocked: false,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 6',
      classes: '',
      protocol: ''
    },
    {
      name: 'C',
      capacity: 40,
      blocked: false,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 7',
      classes: '',
      protocol: ''
    },
    {
      name: 'C',
      capacity: 40,
      blocked: false,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 8',
      classes: '',
      protocol: ''
    },
    {
      name: 'D',
      capacity: 40,
      blocked: false,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 1',
      classes: '',
      protocol: ''
    },
    {
      name: 'D',
      capacity: 40,
      blocked: false,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 2',
      classes: '',
      protocol: ''
    },
    {
      name: 'D',
      capacity: 40,
      blocked: true,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 3',
      classes: '',
      protocol: ''
    },
    {
      name: 'D',
      capacity: 40,
      blocked: false,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 4',
      classes: '',
      protocol: ''
    },
    {
      name: 'D',
      capacity: 40,
      blocked: true,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 5',
      classes: '',
      protocol: ''
    },
    {
      name: 'D',
      capacity: 40,
      blocked: false,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 6',
      classes: '',
      protocol: ''
    },
    {
      name: 'D',
      capacity: 40,
      blocked: false,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 7',
      classes: '',
      protocol: ''
    },
    {
      name: 'D',
      capacity: 40,
      blocked: false,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 8',
      classes: '',
      protocol: ''
    },
    {
      name: 'E',
      capacity: 40,
      blocked: false,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 1',
      classes: '',
      protocol: ''
    },
    {
      name: 'E',
      capacity: 40,
      blocked: false,
      teachers: [
        {
          id: 1,
          name: 'José Antônio'
        },
        {
          id: 5,
          name: 'Fernando Gotardo'
        }
      ],
      school: 'Escola 2',
      classes: '',
      protocol: ''
    },
  ]);

  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: 'José Antônio'
    },
    {
      id: 2,
      name: 'Maria Fernandes'
    },
    {
      id: 3,
      name: 'Sandra Rosa'
    },
    {
      id: 4,
      name: 'Fábio Campos'
    },
    {
      id: 5,
      name: 'Fernando Gotardo'
    }
  ]);

  return (
    <ClassroomContext.Provider value={{ classrooms, setClassrooms, teachers, setTeachers }}>
      {children}
    </ClassroomContext.Provider>
  );
}