import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  checked: boolean,
  setChecked: React.Dispatch<React.SetStateAction<boolean>>,
  creating?: boolean
}

export function Switch({ children, checked, setChecked, creating }: Props) {

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    setChecked(target.checked);
  }
  return (
    <Container>
      <Label creating={creating as boolean}>
        <input type='checkbox' checked={checked as boolean} onChange={handleChange}/>
        <Span creating={creating as boolean}/>
      </Label>
      <p>{children}</p>
    </Container>
  );
}

type StyledProps = {
  creating: boolean
}

const Container = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  gap: 3px;
`;

const Label = styled.label<StyledProps>`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20.4px;

  input {
    display: none;
  }

  input:checked + span {
    background-color: ${({ creating }) => creating ? 'rgba(81, 253, 154, 0.8)' : 'rgba(160, 0, 0, 0.3)'};
  }

  input:focus + span {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + span:before {
    -webkit-transform: translateX(15.6px);
    -ms-transform: translateX(15.6px);
    transform: translateX(15.6px);
  }
`;

const Span = styled.span<StyledProps>`
margin-top: 0 !important;
border-radius: 34px;
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: ${({ creating }) => creating ? '#ccc' : 'rgba(81, 253, 154, 0.8)'};
-webkit-transition: .4s;
transition: .4s;

&::before {
  border-radius: 50%;
  position: absolute;
  content: "";
  height: 15.6px;
  width: 15.6px;
  left: 2.4px;
  bottom: 2.4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
`;