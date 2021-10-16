import React, { ReactElement } from 'react';
import { Explorer } from '../../screens/explorer/Explorer';
import { Portfolio } from '../../screens/portfolio/Portfolio';
import { Grid, GridItem, Flex, Box } from '@chakra-ui/react';

export interface IHomeProps {
}

/**
* Home Component Description
*/
export const Home = ({}: IHomeProps): ReactElement => {
  return (
    <Flex
      h={{ 'base': 'auto', md: '100%' }}
      direction={{ base: 'column-reverse', md: 'row' }}
    >
      <Box flex="1">
        <Explorer />
      </Box>

      <Box flex="1" borderColor="gray.200" borderLeftWidth={{ base: 0, md: 1 }}>
        <Portfolio />
      </Box>
    </Flex>
  );
};
