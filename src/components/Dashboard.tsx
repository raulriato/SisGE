import styled from 'styled-components';

export function Dashboard() {
  return (
    <Container>
      <h1>Em breve você poderá monitorar seus colégios através de um dashboard</h1>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 35px;
  }
`;