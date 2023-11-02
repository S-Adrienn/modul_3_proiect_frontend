import { Button, CircularProgress } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useReservationById } from "../../hooks/useReservationById";
import { putReservation } from "../../service/ReservationService";
import UpdateReservationForm from "./UpdateReservationForm";
import { openSnackbar } from "../../stores/snackbarSlice";
import { useDispatch } from "react-redux";

const UpdateReservation = () => {
  const { reservationId } = useParams();
  const { reservation } = useReservationById(reservationId);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCancelClick = () => {
    navigate(`/reservations/${reservation.id}`);
  };

  const handleSaveReservation = async (
    dateOfCheckIn,
    dateOfCheckOut,
    guestName,
    phoneNumber,
    totalPrice
  ) => {
    const reservationReq = {
      dateOfCheckIn,
      dateOfCheckOut,
      guestName,
      phoneNumber,
      totalPrice,
      roomId: reservation?.roomId,
    };

    try {
      await putReservation(reservationId, reservationReq);
      dispatch(openSnackbar({ text: "Reservation updated successfully!" }));
    } catch (error) {
      console.error(error);
      dispatch(openSnackbar({ text: error, severity: "warning" }));
    } finally {
      navigate(`/reservations/${reservation.id}`);
    }
  };

  return reservation ? (
    <div>
      <UpdateReservationForm
        formTitle="Update reservation"
        reservation={reservation}
        buttonLabel="Update"
        onSaveReservation={handleSaveReservation}
        isReadOnly={true}
      />
      <Button
        variant="outlined"
        onClick={handleCancelClick}
        sx={{ mt: "16px", borderColor: "#B88B4A", color: "#B88B4A" }}
      >
        Cancel
      </Button>
    </div>
  ) : (
    <CircularProgress />
  );
};

export default UpdateReservation;
