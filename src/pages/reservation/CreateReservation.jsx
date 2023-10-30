// import { useNavigate } from "react-router-dom";
import { postReservation } from "../../service/ReservationService";
import ReservationForm from "./ReservationForm";
import { openSnackbar } from "../../stores/snackbarSlice";
import { useDispatch } from "react-redux";

const CreateReservation = () => {
  const initialReservation = {
    dateOfCheckIn: localStorage.getItem("checkInDate"),
    dateOfCheckOut: localStorage.getItem("checkOutDate"),
    guestName: "",
    phoneNumber: "",
    totalPrice: "",
  };

  //   const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddReservation = async (
    dateOfCheckIn,
    dateOfCheckOut,
    guestName,
    phoneNumber,
    totalPrice
  ) => {
    const reservation = {
      dateOfCheckIn: dateOfCheckIn,
      dateOfCheckOut: dateOfCheckOut,
      guestName: guestName,
      phoneNumber: phoneNumber,
      totalPrice: totalPrice,
    };

    try {
      await postReservation(reservation);
      dispatch(openSnackbar({ text: "Reservation added successfully" }));
      //   navigate("/books");
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  return (
    <ReservationForm
      formTitle="Add reservation"
      reservation={initialReservation}
      buttonLabel="Add"
      onSaveReservation={handleAddReservation}
    />
  );
};

export default CreateReservation;
