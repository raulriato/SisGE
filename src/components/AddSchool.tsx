import styled from 'styled-components';

export const AddSchool = styled.form`
  width: 90%;
  gap: 35px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 0 0 0px;;
  position: relative;

  h1 {
    width: 100%;
    text-align: start;
    font-size: 35px;
  }

  select {
    width: 48%;
    height: 40px;
    font-size: 25px;
    border: 1px solid #555;
    background-color: inherit;;
    color: #000;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    
    &:hover {
      border: 1px solid rgba(0,0,0,0.4);
    }

    &:focus {
      outline: 0;
    }
  }
`;