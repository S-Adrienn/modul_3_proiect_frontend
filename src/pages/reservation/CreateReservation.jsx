import { useNavigate } from "react-router-dom";
import { postReservation } from "../../service/ReservationService";
import CreateReservationForm from "./CreateReservationForm";
import { openSnackbar } from "../../stores/snackbarSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const CreateReservation = () => {
  const { roomId } = useParams();

  const initialReservation = {
    dateOfCheckIn: localStorage.getItem("checkInDate"),
    dateOfCheckOut: localStorage.getItem("checkOutDate"),
    guestName: "",
    phoneNumber: "",
    totalPrice: "",
    roomId: "",
  };

  const navigate = useNavigate();
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
      roomId: roomId,
    };

    try {
      await postReservation(reservation);
      dispatch(openSnackbar({ text: "Reservation added successfully" }));
      navigate("/my-reservations");
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const readOnlyFields = {
    dateOfCheckIn: true,
    dateOfCheckOut: true,
    totalPrice: true,
  };

  return (
    <CreateReservationForm
      formTitle="Add reservation"
      reservation={initialReservation}
      buttonLabel="Add"
      onSaveReservation={handleAddReservation}
      isReadOnly={readOnlyFields}
    />
  );
};

export default CreateReservation;
