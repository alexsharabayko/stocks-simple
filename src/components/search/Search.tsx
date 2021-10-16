import React, { ReactElement } from 'react';
import { Input, InputGroup, InputLeftElement, InputProps } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export interface ISearchProps extends InputProps {

}

/**
 * Search Component Description
 */
export const Search = ({ placeholder, ...restProps }: ISearchProps): ReactElement => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300"/>}
      />
      <Input placeholder={placeholder || 'Search'} {...restProps} />
    </InputGroup>
  );
};
