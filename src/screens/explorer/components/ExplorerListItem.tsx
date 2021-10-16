import React, { ReactElement } from 'react';
import { ListItem, Box, IconButton, Flex, Spacer } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { IStockItem } from '../../../domains/stocks-domain';

export interface IExplorerListItemProps {
  item: IStockItem;
  onAdd: () => void;
}

/**
* Explorer Component Description
*/
export const ExplorerListItem = ({ item, onAdd }: IExplorerListItemProps): ReactElement => {
  return (
    <ListItem>
      <Flex align="center">
        <Box>{item.symbol} - {item.name}</Box>
        <Spacer />
        <IconButton aria-label="Add item" icon={<AddIcon />} onClick={onAdd} />
      </Flex>
    </ListItem>
  );
};
