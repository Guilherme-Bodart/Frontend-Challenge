import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import { useAppDispatch } from '../../../app/hooks';
import { increment } from '../../../components/step/stepSlice';
import { fetchRegister } from './registerAPI';

export interface RegisterState {
  email: string;
  name: string;
  phone: string;
}

const initialState: RegisterState = {
  email: '',
  name: '',
  phone: '',
};

export const registerAsync = createAsyncThunk(
  'createUser/fetchCreateUser',
  async (user: any) => {
    const response = await fetchRegister(user);
    return response.data;
  }
)

export const registerAccount = createSlice({
  name: 'registerAccount',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAsync.fulfilled, (state, action) => {
        const { email, name, phone } = action.payload;
        state.email = email;
        state.name = name;
        state.phone = phone;
        Swal.fire(
          'Conta criada',
          'Continue o cadastro',
          'success'
        )
      })
  }
});

export const { } = registerAccount.actions;

export default registerAccount.reducer;
