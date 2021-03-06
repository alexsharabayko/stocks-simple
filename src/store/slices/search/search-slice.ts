import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAppThunk, IRootState } from '../../store';
import { Selector } from 'react-redux';
import { IStockItem } from '../../../domains/stocks-domain';
import { searchStocks } from '../../../apis/search-stocks-api';

export interface ISearchState {
  criteria: string;
  stocks: IStockItem[];
}

const initialState: ISearchState = {
  criteria: '',
  stocks: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setCriteria: (state: ISearchState, action: PayloadAction<string>) => {
      state.criteria = action.payload;
    },
    setStocks: (state: ISearchState, action: PayloadAction<IStockItem[]>) => {
      state.stocks = action.payload;
    },
  },
});

export const { setCriteria, setStocks } = searchSlice.actions;

export const selectSearchCriteria: Selector<IRootState, string> = state => state.search.criteria;
export const selectSearchStocks: Selector<IRootState, IStockItem[]> = state => state.search.stocks;

export const fetchStocks = (): IAppThunk => (dispatch, getState) => {
  const criteria = selectSearchCriteria(getState());

  if (criteria) {
    searchStocks(criteria).then((newStocks) => {
      dispatch(setStocks(newStocks));
    });
  } else {
    dispatch(setStocks([]));
  }
};
