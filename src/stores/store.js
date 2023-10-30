import { configureStore } from "@reduxjs/toolkit";
import roomSlice from "./roomSlice";
import reservationSlice from "./reservationSlice";
import snackbarSlice from "./snackbarSlice";

const store = configureStore({
    reducer: {
        roomReducer : roomSlice,
        reservationReducer : reservationSlice,
        snackbarReducer : snackbarSlice,
    },
});

export default store;