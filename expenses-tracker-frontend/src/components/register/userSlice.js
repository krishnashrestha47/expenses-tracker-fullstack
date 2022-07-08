import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  res: {
    status: "",
    message: "",
  },
  isLoading: false,
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    isLoadingPending: (state) => {
      state.isLoading = true;
    },
    setResponse: (state, action) => {
      state.res = action.payload;
      state.isLoading = false;
    },
  },
});

const { actions, reducer } = userSlice;

export const { isLoadingPending, setResponse } = actions;

export default reducer;
