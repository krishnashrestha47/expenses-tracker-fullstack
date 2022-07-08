import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    test: 0,
  },
});

export default store;
