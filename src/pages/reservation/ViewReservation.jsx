import { useParams } from "react-router-dom";
import { useReservationById } from "../../hooks/useReservationById";
import { Button, CircularProgress, Typography } from "@mui/material";
import "../../styles/ViewReservation.css";

const ViewReservation = () => {
  const { reservationId } = useParams();
  const { reservation } = useReservationById(reservationId);

  const handleDeleteReservation = () => {
    // Implementáld a törlési műveleteket itt
  };

  const handleUpdateReservation = () => {
    // Implementáld a foglalás frissítését itt
  };

  return reservation ? (
    <div className="reservation-container">
      <img
        src={`../../images/${reservation.roomId}.jpg`}
        alt={`Room ${reservation.roomId}`}
        className="room-image"
      />
      <div className="reservation-details">
        <Typography variant="h4">
          Check-in: {reservation.dateOfCheckIn}
        </Typography>
        <Typography variant="h4">
          Check-out: {reservation.dateOfCheckOut}
        </Typography>
        <Typography variant="h4">Name: {reservation.guestName}</Typography>
        <Typography variant="h4">
          Phone Number: {reservation.phoneNumber}
        </Typography>
        <Typography variant="h4">
          Total Price: {reservation.totalPrice} RON
        </Typography>
        <div className="button-container">
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpdateReservation}
          >
            Update
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDeleteReservation}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <CircularProgress />
  );
};

export default ViewReservation;
