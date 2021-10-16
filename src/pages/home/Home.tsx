import React, { ReactElement } from 'react';
import { Explorer } from '../../screens/explorer/Explorer';
import { Portfolio } from '../../screens/portfolio/Portfolio';
import { Grid, GridItem } from '@chakra-ui/react';

export interface IHomeProps {
}

/**
* Home Component Description
*/
export const Home = ({}: IHomeProps): ReactElement => {
  return (
    <Grid
      h="100%"
      templateRows="auto"
      templateColumns="50% 50%"
    >
      <GridItem>
        <Explorer />
      </GridItem>

      <GridItem borderColor="gray.200" borderLeft="1px">
        <Portfolio />
      </GridItem>
    </Grid>
  );
};
