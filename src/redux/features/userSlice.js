import { createSlice } from "@reduxjs/toolkit";

/**
 * CREATE SLICE
 */
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  //3. REDUCERS
  reducers: {
    login: (state, actions) => {
      state.user = actions.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

/**
 * EXPORT REDUCERS
 * */
export const { login, logout } = userSlice.actions;

/**
 * EXPORT SELECTORS
 * */
export const selectUser = (state) => state.user?.user;

/**
 * EXPORT baseReducer
 * */
export default userSlice.reducer;
