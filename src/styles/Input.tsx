import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #555;
  width: 90%;
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
`;