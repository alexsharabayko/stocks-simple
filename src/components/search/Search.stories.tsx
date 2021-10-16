import React from 'react';
import { withKnobs } from '@storybook/addon-knobs/dist';
import { Search } from './Search';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      html: {
        height: '100%',
      },
      body: {
        height: '100%',
      },
    },
  },
});

export default {
  title: 'REACT/Search',
  decorators: [withKnobs],
  component: Search,
};

export const withParameters = () => (
  <ChakraProvider theme={theme}>
    <Search />
  </ChakraProvider>
);
