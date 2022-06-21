import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface StepState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: StepState = {
  value: 0,
  status: 'idle',
};

export const stepSlice = createSlice({
  name: 'step',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    selectStep: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, selectStep } = stepSlice.actions;

export default stepSlice.reducer;
