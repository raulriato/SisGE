import { useState } from 'react';
import logo from '@/assets/logo.svg';
import styled from 'styled-components';
import { GlobalStyle } from '@/styles';
import { Button } from './styles/Button';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(8 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.read-the-docs {
  color: #888;
}
`;

export default App;
