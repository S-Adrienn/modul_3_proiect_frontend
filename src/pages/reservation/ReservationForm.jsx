import { Box, TextField, Button } from "@mui/material";
import { useInput } from "../../hooks/useInput";
import { useSelector } from "react-redux";

const ReservationForm = ({
  reservation,
  formTitle,
  onSaveReservation,
  buttonLabel,
  isReadOnly,
}) => {
  const [dateOfCheckIn, handleDateOfCheckInChange] = useInput(
    reservation.dateOfCheckIn
  );
  const [dateOfCheckOut, handleDateOfCheckOutChange] = useInput(
    reservation.dateOfCheckOut
  );
  const [guestName, handleGuestNameChange] = useInput(reservation.guestName);

  const [phoneNumber, handlePhoneNumberChange] = useInput(
    reservation.phoneNumber
  );

  const calculateTotalPrice = () => {
    const pricePerNightString = localStorage.getItem("roomPricePerNight");
    const pricePerNight = parseInt(pricePerNightString);

    const dateOfCheckInTimestamp = Date.parse(dateOfCheckIn);
    const dateOfCheckOutTimestamp = Date.parse(dateOfCheckOut);

    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const daysBetween = Math.ceil(
      (dateOfCheckOutTimestamp - dateOfCheckInTimestamp) / millisecondsPerDay
    );

    return daysBetween * pricePerNight;
  };
  const calculatedPrice = calculateTotalPrice();
  const [totalPrice, handleTotalPriceChange] = useInput(calculatedPrice);

  const reservations = useSelector(
    (state) => state.reservationReducer.reservation
  );
  console.log(reservations);

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItem: "center",
        justifyContent: "center",
      }}
    >
      <h1>{formTitle}</h1>
      <TextField
        variant="outlined"
        disabled={isReadOnly.dateOfCheckIn}
        label="Date Of Check In"
        value={dateOfCheckIn}
        onChange={handleDateOfCheckInChange}
      />
      <TextField
        variant="outlined"
        disabled={isReadOnly.dateOfCheckOut}
        label="Date Of Check Out"
        value={dateOfCheckOut}
        onChange={handleDateOfCheckOutChange}
      />
      <TextField
        variant="outlined"
        disabled={isReadOnly.guestName}
        label="Guest Name"
        value={guestName}
        onChange={handleGuestNameChange}
      />
      <TextField
        variant="outlined"
        disabled={isReadOnly.phoneNumber}
        label="Phone Number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <TextField
        variant="outlined"
        disabled={isReadOnly.totalPrice}
        label="Total Price in RON"
        value={totalPrice}
        onChange={handleTotalPriceChange}
      />
      {!!buttonLabel && (
        <Button
          variant="contained"
          onClick={() =>
            onSaveReservation(
              dateOfCheckIn,
              dateOfCheckOut,
              guestName,
              phoneNumber,
              totalPrice
            )
          }
          sx={{
            maxWidth: "100px",
          }}
        >
          {buttonLabel}
        </Button>
      )}
    </Box>
  );
};

export default ReservationForm;
