import React, { ReactElement } from 'react';
import { Box, Heading, List } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectSearchStocks } from '../../../store/slices/search/search-slice';
import { ExplorerListItem } from './ExplorerListItem';

export interface IExplorerListProps {
}

/**
 * Explorer Component Description
 */
export const ExplorerList = ({}: IExplorerListProps): ReactElement => {
  const stocks = useSelector(selectSearchStocks);

  if (!stocks.length) {
    return null;
  }

  return (
    <Box>
      <Heading size="sm" mb={2}>Company Name</Heading>

      <List p={3} spacing={3} border="1px" borderColor="gray.200" borderRadius="md">
        {stocks.map(stock => {
          return <ExplorerListItem key={stock.symbol} item={stock}/>;
        })}
      </List>
    </Box>
  );
};
