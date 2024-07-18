import { router } from './router';
import { customeTheme } from './theme';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { RootContainer } from './components/root/RootContainer';

function App() {
  return (
    <>
      <ThemeProvider theme={customeTheme}>
        <RootContainer>
          <RouterProvider router={router} />
        </RootContainer>
      </ThemeProvider>
    </>
  );
}

export default App;