import styled from 'styled-components';
import logo from '@/assets/logo.svg';
import { Button, AuthForm, Input } from '@/styles';
import { Link } from 'react-router-dom';
import { useDisable } from '@/hooks';

export function SignUp() {
  const { disabled, disable } = useDisable();
  return (
    <Container>
      <LeftBlock>
        <img src={logo} alt="loading..." />
      </LeftBlock>
      <RightBlock>
        <img src={logo} alt="loading..." />
        <AuthForm onSubmit={e => e.preventDefault()}>
          <Input placeholder='Nome' disabled={disabled}/>
          <Input placeholder='E-mail' disabled={disabled}/>
          <Input placeholder='Senha' disabled={disabled}/>
          <Button disabled={disabled} onClick={() => disable()} >Entrar</Button>
        </AuthForm>
        <Link to='/signin'>Já tem cadastro? Faça login!</Link>
      </RightBlock>

    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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

  @media (max-width: 900px) {
    display: none;
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

  img {
    display: none;
  }

  @media (max-width: 900px) {
    width: 100%;

    img {
      display: initial;
      width: 30%;
      min-width: 250px;
      margin-bottom: 50px;
    }
  }
`;