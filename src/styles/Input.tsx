import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  width: 90%;
  height: 3rem;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: inset 0 0 3px #333;
  margin-bottom: 10px;
  padding-left: 10px;
  font-size: 20px;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
  }
`;