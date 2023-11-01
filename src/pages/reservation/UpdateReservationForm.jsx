import { Box, TextField, Button } from "@mui/material";
import { useInput } from "../../hooks/useInput";
import { useSelector } from "react-redux";
import { getPricePerNightByRoomId } from "../../service/RoomService";
import { useEffect, useState } from "react";

const UpdateReservationForm = ({
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

  const [pricePerNight, setPricePerNight] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getPricePerNightByRoomId(reservation.roomId)
      .then((price) => setPricePerNight(price))
      .catch((error) => {
        console.error("error", error);
      });
  }, [reservation.roomId]);

  // calculate the total price
  useEffect(() => {
    const dateOfCheckInTimestamp = Date.parse(dateOfCheckIn);
    const dateOfCheckOutTimestamp = Date.parse(dateOfCheckOut);

    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const daysBetween = Math.ceil(
      (dateOfCheckOutTimestamp - dateOfCheckInTimestamp) / millisecondsPerDay
    );
    const calculatedPrice = daysBetween * pricePerNight;
    setTotalPrice(calculatedPrice);
  }, [dateOfCheckIn, dateOfCheckOut, pricePerNight]);

  const reservations = useSelector(
    (state) => state.reservationReducer.reservation
  );

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
        label="Date Of Check In"
        value={dateOfCheckIn}
        onChange={handleDateOfCheckInChange}
      />
      <TextField
        variant="outlined"
        label="Date Of Check Out"
        value={dateOfCheckOut}
        onChange={handleDateOfCheckOutChange}
      />
      <TextField
        variant="outlined"
        label="Guest Name"
        value={guestName}
        onChange={handleGuestNameChange}
      />
      <TextField
        variant="outlined"
        label="Phone Number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <TextField
        variant="outlined"
        disabled={isReadOnly}
        label="Price/night in RON"
        value={pricePerNight}
      />
      <TextField
        variant="outlined"
        disabled={isReadOnly}
        label="Total Price in RON"
        value={totalPrice}
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

export default UpdateReservationForm;
