import React, { ChangeEvent, ReactElement } from 'react';
import { Input, InputGroup, InputLeftElement, InputProps } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useAppDispatch, IRootState } from '../../store/store';
import { setCriteria } from '../../store/slices/search/search-slice';
import { useSelector } from 'react-redux';

export interface ISearchProps extends InputProps {

}

/**
 * Search Component Description
 */
export const Search = ({ placeholder, onChange, ...restProps }: ISearchProps): ReactElement => {
  const dispatch = useAppDispatch();
  const criteria = useSelector<IRootState, string>(state => state.search.criteria);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setCriteria(event.target.value));
  };

  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300"/>}
      />
      <Input placeholder={placeholder || 'Search'} value={criteria} onChange={handleChange} {...restProps} />
    </InputGroup>
  );
};
