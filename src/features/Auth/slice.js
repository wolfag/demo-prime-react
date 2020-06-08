import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {
    login: (state, action) => {
      state = action.payload;
    },
  },
});

const { reducer, actions } = auth;

export const { login } = actions;
export default reducer;
