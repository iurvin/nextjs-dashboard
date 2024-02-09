import { createSlice } from "@reduxjs/toolkit";
import { fetchCardData } from '@/app/lib/data';

const initialState = {
  numberOfInvoices: 0,
  numberOfCustomers: 0,
  totalPaidInvoices: '',
  totalPendingInvoices: ''
}

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    fetch: (state) => {
      debugger;

      state.numberOfCustomers = initialState.numberOfCustomers;
      state.numberOfInvoices = initialState.numberOfInvoices;
      state.totalPaidInvoices = initialState.totalPaidInvoices;
      state.totalPendingInvoices = initialState.totalPendingInvoices;

      // fetchCardData().then((res) => {
      //   const {
      //     numberOfInvoices,
      //     numberOfCustomers,
      //     totalPaidInvoices,
      //     totalPendingInvoices,
      //   } = res;
      //   console.log('res', res);
      //   state.numberOfCustomers = numberOfCustomers;
      //   state.numberOfInvoices = numberOfInvoices;
      //   state.totalPaidInvoices = totalPaidInvoices;
      //   state.totalPendingInvoices = totalPendingInvoices;
      // });
    }
  }
})

export const { fetch } = cardSlice.actions;
export default cardSlice.reducer;