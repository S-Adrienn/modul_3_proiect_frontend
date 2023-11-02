import { Box, TextField, Button } from "@mui/material";
import { useInput } from "../../hooks/useInput";
import { useSelector } from "react-redux";
import ValidationTextField from "../../components/ValidationTextField";
import { useState } from "react";

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

  //fields with validation
  const [guestName, setGuestName] = useState(reservation.guestName);
  const [phoneNumber, setPhoneNumber] = useState(reservation.phoneNumber);

  //price calculator
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
      <ValidationTextField
        label="Guest Name"
        value={guestName}
        onChange={setGuestName}
        pattern="^[A-Za-z -]+$"
        errorMessage="Only letters, spaces, and hyphens are allowed"
        isRequired={true} //required field
      />
      <ValidationTextField
        label="Phone Number"
        value={phoneNumber}
        onChange={setPhoneNumber}
        pattern="^[0-9]{10}$"
        errorMessage="Must be a 10-digit number"
        isRequired={true} // r.f.
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
            backgroundColor: "#B88B4A",
            "&:hover": {
              backgroundColor: "#DDCA7D",
            },
          }}
        >
          {buttonLabel}
        </Button>
      )}
    </Box>
  );
};

export default ReservationForm;
