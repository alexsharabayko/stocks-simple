import React, { ReactElement } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Search } from '../../../components/search/Search';

export interface IExplorerSearchProps {
}

/**
* ExplorerSearch Component Description
*/
export const ExplorerSearch = ({}: IExplorerSearchProps): ReactElement => {
  return (
    <Box mb={5}>
      <Heading size="sm" mb={2}>Company Name</Heading>
      <Search placeholder="Example Apple" />
    </Box>
  );
};
