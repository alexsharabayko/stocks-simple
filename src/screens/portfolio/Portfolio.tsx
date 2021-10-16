import React, { ReactElement, useEffect } from 'react';
import { Box, Heading, Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import { useAppDispatch } from '../../store/store';
import {
  fetchPortfolioStocks,
  removePortfolioStock,
  selectPortfolioStocks
} from '../../store/slices/portfolio/portfolio-slice';
import { useSelector } from 'react-redux';
import { PortfolioItem } from './components/PortfolioItem';
import { IStockItem } from '../../domains/stocks-domain';

export interface IPortfolioProps {
}

/**
 * Portfolio Component Description
 */
export const Portfolio = ({}: IPortfolioProps): ReactElement => {
  const dispatch = useAppDispatch();
  const items = useSelector(selectPortfolioStocks);

  useEffect(() => {
    dispatch(fetchPortfolioStocks());
  }, []);

  const removeItem = (item: IStockItem): void => {
    dispatch(removePortfolioStock(item.symbol));
  };

  return (
    <Box p={5}>
      <Heading size="sm" mb={2}>Your Portfolio</Heading>

      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Company Name</Th>
            <Th>Symbol</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>

        <Tbody>
          {items.map(item => {
            return <PortfolioItem key={item.symbol} item={item} onRemove={() => removeItem(item)} onView={() => {
            }}/>;
          })}
        </Tbody>
      </Table>
    </Box>
  );
};
