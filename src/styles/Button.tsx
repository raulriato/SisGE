import styled from 'styled-components';

export const Button = styled.button`
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
`;