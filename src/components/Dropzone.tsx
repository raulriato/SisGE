import styled from 'styled-components';
import { Input } from '@/styles';
import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  small?: boolean
}

export function Dropzone({ children, small, disabled }: Props) {
  return (
    <Container small={small} disabled={disabled as boolean}>
      <label htmlFor='picture-input'>
        <span>{children}</span>
      </label>
      <Input
        type='file'
        name='symbol'
        disabled={disabled}
        file={true}
        id='picture-input'
      />
    </Container>
  );
}

type StyledProps = {
  small?: boolean,
  disabled: boolean
}

const Container = styled.div<StyledProps>`
  width: ${({ small }) => small ? '48%' : '100%'};
  aspect-ratio: ${({ small }) => small ? '2.5/1' : '3/1'};
  color: #aaa;
  border:2px dashed;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ disabled }) => disabled ? '' : '#777'};
    cursor: ${({ disabled }) => disabled && 'wait'};
  }

  span {
    cursor: pointer;
  }

  ${({ disabled }) => disabled && `
    &:hover {
      color: #aaa;
      cursor: wait;
    }

    span {
      cursor: wait;
    }
  `}
`;