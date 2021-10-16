import React, { ReactElement, MouseEvent } from 'react';
import { Td, Tr, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
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
  const handleRemove = (event: MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation();
    onRemove();
  };

  return (
    <Tr cursor="pointer" onClick={onView}>
      <Td>{item.name}</Td>
      <Td>{item.symbol}</Td>
      <Td>
        <IconButton
          icon={<CloseIcon />}
          aria-label="Remove"
          colorScheme="red"
          variant="outline"
          size="sm"
          mr={2}
          onClick={handleRemove}
        />
      </Td>
    </Tr>
  );
};
