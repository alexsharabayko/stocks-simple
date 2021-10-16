import React, { ChangeEvent, ReactElement, useCallback, useEffect } from 'react';
import { Input, InputGroup, InputLeftElement, InputProps } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';
import { fetchStocks, selectSearchCriteria, setCriteria } from '../../store/slices/search/search-slice';
import { debounce } from '../../utils/timer-util';

export interface ISearchProps extends InputProps {

}

/**
 * Search Component Description
 */
export const Search = ({ placeholder, onChange, ...restProps }: ISearchProps): ReactElement => {
  const dispatch = useAppDispatch();
  const criteria = useSelector(selectSearchCriteria);

  const debouncedFetch = useCallback(debounce(() => {
    dispatch(fetchStocks());
  }, 500), []);

  useEffect(() => {
    criteria && debouncedFetch();
  }, [criteria]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
