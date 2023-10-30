import { styled } from "@mui/system";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useAvailableRooms } from "../../hooks/useAvailableRooms";
import { Button } from "@mui/material";
import { useDateSelection } from "../../hooks/useDateSelection";

const ViewStyled = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  gap: "50px",
}));

const DatePickerContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const DatePickerLabel = styled("div")({
  minWidth: "100px",
  marginRight: "8px",
});

function ReservationDatePicker() {
  const { checkIn, checkOut, handleCheckInChange, handleCheckOutChange } = useDateSelection();
  const { getAllAvailableRooms } = useAvailableRooms();

  function formatDateToApiFormat(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const handleSendDates = async () => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);

      const formattedCheckIn = formatDateToApiFormat(checkInDate);
      const formattedCheckOut = formatDateToApiFormat(checkOutDate);

      localStorage.setItem("checkInDate", formattedCheckIn);
      localStorage.setItem("checkOutDate", formattedCheckOut);

      console.log("Formatted Check In:", formattedCheckIn);
      console.log("Formatted Check Out:", formattedCheckOut);

      await getAllAvailableRooms(formattedCheckIn, formattedCheckOut);
    } else {
      console.error("Hiba: Kérlek válassz ki mindkét dátumot.");
    }
  };

  return (
    <ViewStyled>
      <DatePickerContainer>
        <DatePickerLabel>Check In:</DatePickerLabel>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={checkIn}
            onChange={(newDate) => handleCheckInChange(newDate)}
          />
        </LocalizationProvider>
      </DatePickerContainer>
      <DatePickerContainer>
        <DatePickerLabel>Check Out:</DatePickerLabel>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={checkOut}
            onChange={(newDate) => handleCheckOutChange(newDate)}
          />
        </LocalizationProvider>
      </DatePickerContainer>
      <Button variant="contained" color="primary" onClick={handleSendDates}>
        Send dates
      </Button>
    </ViewStyled>
  );
}

export default ReservationDatePicker;
