import React, { ReactElement } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Main } from './screens/main/Main';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const theme = extendTheme({
  styles: {
    global: {
      html: {
        height: '100%',
      },
      body: {
        height: '100%',
      },
      '#root': {
        height: '100%',
      }
    },
  },
});

export const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <Router>
        <ChakraProvider theme={theme}>
          <Main/>
        </ChakraProvider>
      </Router>
    </Provider>
  );
};
