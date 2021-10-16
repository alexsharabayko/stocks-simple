import React, { ReactElement } from 'react';
import { Td, Tr, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { IStockItem } from '../../../domains/stocks-domain';

export interface IPortfolioItemProps {
  item: IStockItem;
  onRemove: () => void;
  onView: () => void;
}

/**
 * PortfolioItem Component Description
 */
export const PortfolioItem = ({ item, onRemove, onView }: IPortfolioItemProps): ReactElement => {
  return (
    <Tr>
      <Td>{item.name}</Td>
      <Td>{item.symbol}</Td>
      <Td>
        <Button colorScheme="teal" variant="outline" size="sm" mr={2} onClick={onRemove}>
          Remove
        </Button>
        <Button rightIcon={<ArrowForwardIcon />} colorScheme="teal" variant="solid" size="sm" onClick={onView}>
          View
        </Button>
      </Td>
    </Tr>
  );
};
