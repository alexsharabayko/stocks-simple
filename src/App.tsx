import React, { ReactElement } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Main } from './screens/main/Main';

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
    <ChakraProvider theme={theme}>
      <Main />
    </ChakraProvider>
  );
};
