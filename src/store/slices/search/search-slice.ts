import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISearchState {
  criteria: string;
}

const initialState: ISearchState = {
  criteria: '',
};

export const searchSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCriteria: (state: ISearchState, action: PayloadAction<string>) => {
      state.criteria = action.payload;
    },
  },
});

export const { setCriteria } = searchSlice.actions;
