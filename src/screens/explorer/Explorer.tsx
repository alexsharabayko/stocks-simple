import React, { ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import { Search } from '../../components/search/Search';

export interface IExplorerProps {
}

/**
* Explorer Component Description
*/
export const Explorer = ({}: IExplorerProps): ReactElement => {
  return (
    <Box p={5}>
      <Search />
    </Box>
  );
};
