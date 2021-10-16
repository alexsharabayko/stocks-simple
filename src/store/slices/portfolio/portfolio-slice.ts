import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAppThunk, IRootState } from '../../store';
import { Selector } from 'react-redux';
import { IStockItem } from '../../../domains/stocks-domain';
import {
  apiAddPortfolioStock,
  apiFetchPortfolioStocks,
  apiRemovePortfolioStock
} from '../../../apis/portfolio-stocks-api';

export interface IPortfolioState {
  stocks: IStockItem[];
}

const initialState: IPortfolioState = {
  stocks: [],
};

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setStocks: (state: IPortfolioState, action: PayloadAction<IStockItem[]>) => {
      state.stocks = action.payload;
    },
  },
});

export const { setStocks } = portfolioSlice.actions;

export const selectPortfolioStocks: Selector<IRootState, IStockItem[]> = state => state.portfolio.stocks;

export const fetchPortfolioStocks = (): IAppThunk => (dispatch) => {
  apiFetchPortfolioStocks().then((newStocks) => {
    dispatch(setStocks(newStocks));
  });
};

export const addPortfolioStock = (item: IStockItem): IAppThunk => (dispatch, getState) => {
  apiAddPortfolioStock(item).then(() => {
    const stocks = selectPortfolioStocks(getState());

    dispatch(setStocks([...stocks].concat([item])));
  });
};

export const removePortfolioStock = (symbol: string): IAppThunk => (dispatch, getState) => {
  apiRemovePortfolioStock(symbol).then(() => {
    const stocks = selectPortfolioStocks(getState());

    dispatch(setStocks(stocks.filter(stock => stock.symbol !== symbol)));
  });
};
