import { GlobalStyle } from '@/styles';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import { SchoolProvider, ClassroomProvider } from '@/contexts';

function App() {

  return (
    <>
      <GlobalStyle />
      <ClassroomProvider>
        <SchoolProvider>
          <RouterProvider router={router} />
        </SchoolProvider>
      </ClassroomProvider>
    </>
  );
}

export default App;
