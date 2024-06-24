import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlide.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
