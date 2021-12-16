import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../src/slice/studentSlice"

/**import all reducerslice here */



export const store = configureStore({
  reducer: {studentReducer},
});
