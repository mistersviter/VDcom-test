import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import { ICurrentUser } from '../interfaces/currentUserInterFace';

const initialState: ICurrentUser = {
  isLoggedIn: false,
  login: null,
  email: null,
  name: null,
  position: null,
  avatar: null,
  contacts: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<ICurrentUser>) => {
      return { isLoggedIn: true, ...action.payload };
    },
    logout: (state) => {
      state = initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUserAuth = (state: RootState) => state.user.isLoggedIn;

export default userSlice.reducer;
