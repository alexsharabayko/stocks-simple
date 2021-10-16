import React, { ReactElement } from 'react';
import { ListItem, Box, IconButton, Flex, Spacer } from '@chakra-ui/react';
import { AddIcon, CheckIcon } from '@chakra-ui/icons';
import { IStockItem } from '../../../domains/stocks-domain';

export interface IExplorerListItemProps {
  item: IStockItem;
  isChecked: boolean;
  onAdd: () => void;
}

/**
* Explorer Component Description
*/
export const ExplorerListItem = ({ item, isChecked, onAdd }: IExplorerListItemProps): ReactElement => {
  const icon = isChecked ? <CheckIcon /> : <AddIcon />;
  const variant = isChecked ? 'solid' : 'outline';

  return (
    <ListItem>
      <Flex align="center">
        <Box>{item.symbol} - {item.name}</Box>
        <Spacer />
        <IconButton
          aria-label="Item"
          colorScheme="green"
          disabled={isChecked}
          icon={icon}
          variant={variant}
          onClick={() => !isChecked && onAdd()}
        />
      </Flex>
    </ListItem>
  );
};
