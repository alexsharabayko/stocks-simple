import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { searchSlice } from './slices/search/search-slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type IRootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type IAppDispatch = typeof store.dispatch;
export type IAppThunk<T = void> = ThunkAction<T, IRootState, unknown, Action<string>>;

export const useAppDispatch = () => useDispatch<IAppDispatch>();
