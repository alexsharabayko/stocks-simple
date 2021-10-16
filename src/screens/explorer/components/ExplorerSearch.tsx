import React, { ChangeEvent, ReactElement, useCallback, useEffect } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Search } from '../../../components/search/Search';
import { useAppDispatch } from '../../../store/store';
import { useSelector } from 'react-redux';
import { fetchStocks, selectSearchCriteria, setCriteria } from '../../../store/slices/search/search-slice';
import { debounce } from '../../../utils/timer-util';

export interface IExplorerSearchProps {
}

/**
* ExplorerSearch Component Description
*/
export const ExplorerSearch = ({}: IExplorerSearchProps): ReactElement => {
  const dispatch = useAppDispatch();
  const criteria = useSelector(selectSearchCriteria);

  const debouncedFetch = useCallback(debounce(() => {
    dispatch(fetchStocks());
  }, 500), []);

  useEffect(debouncedFetch, [criteria]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCriteria(event.target.value));
  };

  return (
    <Box mb={5}>
      <Heading size="sm" mb={2}>Company Name</Heading>
      <Search placeholder="Example Apple" onChange={handleChange} />
    </Box>
  );
};
