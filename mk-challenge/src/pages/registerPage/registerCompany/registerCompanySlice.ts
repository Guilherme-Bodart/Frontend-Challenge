import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import { fetchRegisterCompany } from './registerCompanyApi';

export interface RegisterState {
  segment: boolean;
  type: string;
  cnpj: string;
  corporateName: string;
  phone: string;
  cep: string;
  address: string;
  number: string;
  complement: string;
  district: string;
}
const initialState: RegisterState = {
  segment: true,
  type: '',
  cnpj: '',
  corporateName: '',
  phone: '',
  cep: '',
  address: '',
  number: '',
  complement: '',
  district: '',
};

export const registerCompanyAsync = createAsyncThunk(
  'createUser/fetchCreateCompany',
  async (company: any) => {
    const response = await fetchRegisterCompany(company);
    return response.data;
  }
)

export const registerCompany = createSlice({
  name: 'registerCompany',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerCompanyAsync.fulfilled, (state, action) => {
        const { segment, type, cnpj, corporateName, phone, cep, address, number, complement, district } = action.payload;
        state.segment = segment;
        state.type = type;
        state.cnpj = cnpj;
        state.corporateName = corporateName;
        state.phone = phone;
        state.address = address;
        state.cep = cep;
        state.complement = complement;
        state.number = number;
        state.district = district;
        Swal.fire(
          'Empresa cadastrada',
          'Continue o cadastro',
          'success'
        )
      })
  }
});

export const { } = registerCompany.actions;

export default registerCompany.reducer;
