import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import stepReducer from '../components/step/stepSlice';
import registerReducer from '../pages/registerPage/registerAccount/registerAccountSlice';
import registerCompanyReducer from '../pages/registerPage/registerCompany/registerCompanySlice';

export const store = configureStore({
  reducer: {
    step: stepReducer,
    register: registerReducer,
    registerCompany: registerCompanyReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
