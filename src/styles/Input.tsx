import styled from 'styled-components';

type Props = {
  file?: boolean
}

export const Input = styled.input<Props>`
  border: none;
  border-bottom: 1px solid #555;
  width: 100%;
  height: 3rem;
  background-color: #ddd;
  margin-bottom: 10px;
  padding-left: 10px;
  font-size: 20px;
  transition: all 0.1s linear;

  &::placeholder {
    color: #555;
    transition: all 0.1s linear;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid #000
  }

  &:focus::placeholder {
    color: #000;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0px 100px #ddd inset;
  }

  ${({ disabled }) => disabled && `
    color: #aaa;
    border-bottom: 1px solid #aaa;
    cursor: wait;

    &::placeholder {
      color: #aaa;
    }
  `}

  ${({ file }) => file && `
    width: 100%;
    display: none;
  `}
`;