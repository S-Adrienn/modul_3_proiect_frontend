import { createSlice } from "@reduxjs/toolkit";

const reservationSlice = createSlice({
  name: "reservation",
  initialState: {
    reservation: [],
  },
  reducers: {
    setReservations: (state, action) => {
      state.reservation = action.payload;
    },
  },
});

export default reservationSlice.reducer;
export const { setReservations } = reservationSlice.actions;
