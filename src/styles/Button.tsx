import styled from 'styled-components';
import React, { ButtonHTMLAttributes } from 'react';
import { ThreeDots } from 'react-loader-spinner';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

export function Button({ children, disabled, onClick }: ButtonProps): JSX.Element {
  return (
    <Container onClick={onClick} disabled={disabled}>
      {disabled ?
        <ThreeDots
          height='30'
          width='60px'
          color='#fff'
        />
        :
        children
      }
    </Container>
  );
}

const Container = styled.button`
  width: 130px;
  height: 35px;
  border: none;
  border-radius: 5px;
  background: linear-gradient(135deg, #5ddfe6 0%, #004aad 100%);
  color: #fff;
  box-shadow: 0 3px 4px #333;
  cursor: pointer;
  font-size: 20px;

  &:active {
    box-shadow: 0 1px 4px #333;
    transform: translateY(2px);
  }

  &:hover {
    background: linear-gradient(135deg, #3ddfe6 0%, #002aad 100%);
  }

  ${({ disabled }) => disabled && `
    background: #59a1ff;
    cursor: wait;
    position: relative;
    box-shadow: 0 3px 4px #888;

    &:hover {
      background: #59a1ff;
      transform: translateY(0);
    }

    &:active {
      box-shadow: 0 3px 4px #888;
    }

    svg {
      width: 60px;
      height: 45px;
      position: absolute;
      right: calc(50% - 60px/2);
      bottom: calc(50% - 45px/2);
    }
  `}
`;