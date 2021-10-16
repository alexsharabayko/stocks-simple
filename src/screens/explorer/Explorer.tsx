import React, { ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import { ExplorerList } from './components/ExplorerList';
import { ExplorerSearch } from './components/ExplorerSearch';

export interface IExplorerProps {
}

/**
 * Explorer Component Description
 */
export const Explorer = ({}: IExplorerProps): ReactElement => {
  return (
    <Box p={5}>
      <ExplorerSearch/>
      <ExplorerList/>
    </Box>
  );
};
