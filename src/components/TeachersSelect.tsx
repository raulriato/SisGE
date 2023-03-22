import styled from 'styled-components';
import { Multiselect } from 'react-widgets';
import { useState } from 'react';
import 'react-widgets/styles.css';

type Teacher = {
  id: number,
  name: string
}

type Props = {
  teachers: Teacher[],
  disabled: boolean
}

export function TeachersSelect({ teachers, disabled }: Props) {
  const options = teachers.map(teacher => ({ id: teacher.id, name: teacher.name }));
  const [selected, setSelected] = useState<Teacher[]>([]);

  function handleChange(selected: Teacher[]) {
    setSelected(selected);
  }

  return (
    <Container>
      <Multiselect<Teacher>
        data={options}
        textField="name"
        dataKey="id"
        value={selected}
        onChange={handleChange}
        containerClassName='multi-select'
        placeholder='Professores'
        disabled={disabled}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  .multi-select {
    background-color: inherit;
    box-shadow: none;
    border: 1px solid #555;
  }
`;