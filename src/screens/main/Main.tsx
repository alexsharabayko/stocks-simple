import React, { ReactElement } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Explorer } from '../explorer/Explorer';
import { Portfolio } from '../portfolio/Portfolio';
import { Header } from '../header/Header';

export interface IMainProps {
}

/**
* Main Component Description
*/
export const Main = ({}: IMainProps): ReactElement => {
  return (
    <Grid
      h="100%"
      templateRows="70px auto"
      templateColumns="repeat(2, 1fr)"
    >
      <GridItem colSpan={2} bg="papayawhip">
        <Header>Stock Homework App</Header>
      </GridItem>

      <GridItem>
        <Explorer />
      </GridItem>

      <GridItem borderColor="gray.200" borderLeft="1px">
        <Portfolio />
      </GridItem>
    </Grid>
  );
};
