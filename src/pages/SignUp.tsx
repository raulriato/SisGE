import styled from 'styled-components';
import logo from '@/assets/logo.svg';
import { Button, Form, Input } from '@/styles';
import { Link } from 'react-router-dom';

export function SignUp() {
  return (
    <Container>
      <LeftBlock>
        <img src={logo} alt="loading..." />
      </LeftBlock>
      <RightBlock>
        <Form onSubmit={e => e.preventDefault()}>
          <Input placeholder='Nome' />
          <Input placeholder='E-mail' />
          <Input placeholder='Senha' />
          <Button>Entrar</Button>
        </Form>
        <Link to='/signin'>Já tem cadastro? Faça login!</Link>
      </RightBlock>

    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const LeftBlock = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #59a1ff;

  img {
    width: 100%;
  }
`;

const RightBlock = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    margin-top: 40px;
    font-size: 20px;
    text-decoration: underline;
    color: #1591ff;
  }
`;