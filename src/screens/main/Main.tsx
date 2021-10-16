import React, { ReactElement } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Header } from '../header/Header';
import { Home } from '../../pages/home/Home';
import { Route, Switch } from 'react-router';
import { StockDetails } from '../../pages/stock-details/StockDetails';

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
      templateColumns="100%"
    >
      <GridItem colSpan={2} bg="papayawhip">
        <Header>Stock Homework App</Header>
      </GridItem>

      <GridItem>
        <Switch>
          <Route path="/stock-details/:symbol">
            <StockDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </GridItem>
    </Grid>
  );
};
