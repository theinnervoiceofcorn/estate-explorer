import { configureStore } from "@reduxjs/toolkit";
import { bayutAPI } from "./api/bayutAPI";

export const store = configureStore({
  reducer: {
    [bayutAPI.reducerPath]: bayutAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bayutAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
