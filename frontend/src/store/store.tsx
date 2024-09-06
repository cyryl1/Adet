import { configureStore } from '@reduxjs/toolkit';
import jobReducer from '../features/jobSlice';
import userReducer from '../features/userSlice';
import authReducer from '../features/authSlice';

export const store = configureStore({
  reducer: {
    jobs: jobReducer,
    user: userReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // If you need to add custom middleware or Redux DevTools configuration, do it here.
  // For example:
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myMiddleware),
  // devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
