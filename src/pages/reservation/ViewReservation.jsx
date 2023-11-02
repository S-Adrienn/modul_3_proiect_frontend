import { Link, useNavigate, useParams } from "react-router-dom";
import { useReservationById } from "../../hooks/useReservationById";
import { Button, CircularProgress, Typography } from "@mui/material";
import "../../styles/ViewReservation.css";
import DeleteReservation from "./DeleteReservationDialog";
import { useState } from "react";
import { deleteReservation } from "../../service/ReservationService";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../../stores/snackbarSlice";

const ViewReservation = () => {
  const { reservationId } = useParams();
  const { reservation } = useReservationById(reservationId);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteReservation = async () => {
    try {
      await deleteReservation(reservationId);
      dispatch(openSnackbar({ text: "Reservation deleted successfully" }));
      navigate("/datepicker");
    } catch (error) {
      console.error(error);
      dispatch(
        openSnackbar({ text: "Error deleting reservation", severity: "error" })
      );
    } finally {
      setIsDeleteDialogOpen(false);
    }
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
          <Link to={`/reservations/${reservation.id}/update`}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#B88B4A",
                "&:hover": {
                  backgroundColor: "#DDCA7D",
                },
              }}
            >
              Update
            </Button>
          </Link>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setIsDeleteDialogOpen(true)}
            sx={{
              backgroundColor: "#EF6461",
              "&:hover": {
                backgroundColor: "#DDCA7D",
              },
            }}
          >
            Delete
          </Button>
          <DeleteReservation
            isOpen={isDeleteDialogOpen}
            onClose={() => setIsDeleteDialogOpen(false)}
            onDelete={handleDeleteReservation}
          />
        </div>
      </div>
    </div>
  ) : (
    <CircularProgress />
  );
};

export default ViewReservation;
