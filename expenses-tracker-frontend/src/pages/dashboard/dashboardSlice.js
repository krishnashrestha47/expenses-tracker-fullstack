import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
  res: {
    status: "",
    message: "",
  },
  isLoading: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    setResponse: (state, { payload }) => {
      state.res = payload;
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = dashboardSlice;

export const { requestPending, setResponse } = actions;

export default reducer;
