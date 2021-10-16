import React, { ReactElement } from 'react';
import { Box, Heading, List } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectSearchStocks } from '../../../store/slices/search/search-slice';
import { ExplorerListItem } from './ExplorerListItem';
import { useAppDispatch } from '../../../store/store';
import { addPortfolioStock, selectPortfolioStocks } from '../../../store/slices/portfolio/portfolio-slice';
import { IStockItem } from '../../../domains/stocks-domain';

export interface IExplorerListProps {
}

/**
 * ExplorerList Component Description
 */
export const ExplorerList = ({}: IExplorerListProps): ReactElement => {
  const searchStocks = useSelector(selectSearchStocks);
  const portfolioStocksSymbols = useSelector(selectPortfolioStocks).map(s => s.symbol);
  const dispatch = useAppDispatch();

  if (!searchStocks.length) {
    return null;
  }

  const addItemToPortfolio = (item: IStockItem): void => {
    dispatch(addPortfolioStock(item))
  };

  return (
    <Box>
      <Heading size="sm" mb={2}>Company Name</Heading>

      <List p={3} spacing={3} border="1px" borderColor="gray.200" borderRadius="md">
        {searchStocks.map(stock => {
          const isChecked = portfolioStocksSymbols.includes(stock.symbol);

          return (
            <ExplorerListItem
              key={stock.symbol}
              item={stock}
              isChecked={isChecked}
              onAdd={() => addItemToPortfolio(stock)}
            />
          );
        })}
      </List>
    </Box>
  );
};
