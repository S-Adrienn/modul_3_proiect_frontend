import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./stores/store";
import ReservationDatePicker from "./pages/reservation/ReservationDatePicker";
import AvailableRoomsList from "./pages/reservation/AvailableRoomList";
import ViewRoom from "./pages/room/ViewRoom";
import CreateReservation from "./pages/reservation/CreateReservation";
import MyReservations from "./pages/reservation/MyReservations";
import ViewReservation from "./pages/reservation/ViewReservation";
import UpdateReservation from "./pages/reservation/UpdateReservation";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/datepicker", element: <ReservationDatePicker /> },
      { path: "/available-rooms", element: <AvailableRoomsList /> },
      { path: "/rooms/:roomId", element: <ViewRoom /> },
      { path: "/add-new-reservation/:roomId", element: <CreateReservation /> },
      { path: "/my-reservations", element: <MyReservations /> },
      { path: "/reservations/:reservationId", element: <ViewReservation /> },
      {
        path: "/reservations/:reservationId/update",
        element: <UpdateReservation />,
      },
    ],
  },
]);

//JSX
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
