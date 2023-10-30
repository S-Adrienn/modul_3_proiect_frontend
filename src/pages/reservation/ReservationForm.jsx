import { Box, TextField, Button } from "@mui/material";
import { useInput } from "../../hooks/useInput";
import { useSelector } from "react-redux";

const ReservationForm = ({
  reservation,
  formTitle,
  onSaveReservation,
  buttonLabel,
  isReadonly: readOnlyFields,
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
  const [totalPrice, handleTotalPriceChange] = useInput(reservation.totalPrice);
  //   const [phoneNumber, handlePhoneNumberChange] = useInput(reservation.phoneNumber);

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
        disabled={readOnlyFields.includes}
        label="Date Of Check In"
        value={dateOfCheckIn}
        onChange={handleDateOfCheckInChange}
      />
      <TextField
        variant="outlined"
        disabled={readOnlyFields}
        label="Date Of Check Out"
        value={dateOfCheckOut}
        onChange={handleDateOfCheckOutChange}
      />
      <TextField
        variant="outlined"
        disabled={readOnlyFields}
        label="Guest Name"
        value={guestName}
        onChange={handleGuestNameChange}
      />
      <TextField
        variant="outlined"
        disabled={readOnlyFields}
        label="Phone Number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <TextField
        variant="outlined"
        disabled={readOnlyFields}
        label="Total Price"
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
