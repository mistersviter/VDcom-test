import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import { IContact, ICurrentUser } from '../interfaces/currentUserInterFace';

const initialState: ICurrentUser = {
  isLoggedIn: false,
  login: null,
  email: null,
  name: null,
  position: null,
  avatar: null,
  contacts: [],
  filteredContacts: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<ICurrentUser>) => {
      return { isLoggedIn: true, ...action.payload };
    },
    logout: (state) => {
      return initialState;
    },
    filterContacts: (state, action: PayloadAction<IContact[]>) => {
      state.filteredContacts = [...action.payload];
    },
  },
});

export const { login, logout, filterContacts } = userSlice.actions;

export const selectUserAuth = (state: RootState) => state.user.isLoggedIn;

export default userSlice.reducer;
