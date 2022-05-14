import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import api, { IReposInfo, IUserInfo } from '../API/api';

interface IParams {
  userName: string,
  page: number,
}

export const getUser = createAsyncThunk<IUserInfo, string>('getUser', (user) => api.getUser(user));
export const getRepos = createAsyncThunk<IReposInfo[], IParams>('getRepos', (params) => api.getRepos(params.userName, params.page));

interface IUserSlice {
  userName: string,
  isLoadingUser: boolean,
  isLoadingRepos: boolean,
  isWarningUser: boolean,
  isWarningRepos: boolean,
  user: IUserInfo | null,
  repos: IReposInfo[] | [],
}

const initialState: IUserSlice = {
    userName: '',
    isLoadingUser: false,
    isLoadingRepos: false,
    isWarningUser: false,
    isWarningRepos: false,
    user: null,
    repos: []
  }

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    inputValue: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getUser.pending, (state) => {
      state.isWarningUser = false;
      state.isLoadingUser = true;
      state.user = null;
    })
    .addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoadingUser = false;
    })
    .addCase(getUser.rejected, (state) => {
      state.user = null;
      state.isLoadingUser = false;
      state.isWarningUser = true;
    })

    .addCase(getRepos.pending, (state) => {
      state.isWarningRepos = false;
      state.isLoadingRepos = true;
      state.repos = [];
    })
    .addCase(getRepos.fulfilled, (state, action) => {
      state.repos = action.payload;
      state.isLoadingRepos = false;
    })
    .addCase(getRepos.rejected, (state) => {
      state.repos = [];
      state.isLoadingRepos = false;
      state.isWarningRepos = true;
    })
  },
});

export const { inputValue } = userSlice.actions;
export default userSlice.reducer;
