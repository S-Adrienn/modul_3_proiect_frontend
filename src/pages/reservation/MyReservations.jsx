import { useState } from "react";
import { getReservationsByGuestName } from "../../service/ReservationService";
import { openSnackbar } from "../../stores/snackbarSlice";
import { useDispatch } from "react-redux";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const ReservationSearch = () => {
  const [searchedName, setSearchedName] = useState("");
  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setSearchedName(e.target.value);
  };

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const reservations = await getReservationsByGuestName(searchedName);
      setReservations(reservations);
    } catch (error) {
      console.error(error);
      dispatch(openSnackbar({ text: error, severity: "info" }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h6">Search Reservations</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <TextField
            type="text"
            label="Search by name"
            fullWidth
            value={searchedName}
            onChange={handleSearchChange}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            fullWidth
            sx={{
              backgroundColor: "#B88B4A",
              "&:hover": {
                backgroundColor: "#DDCA7D",
              },
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      <Box mt={3}>
        {reservations.map((reservation) => (
          <Paper elevation={2} className="paper" key={reservation.id}>
            <Typography variant="subtitle1">
              Reservation: {reservation.id}
            </Typography>
            <Typography variant="subtitle1">
              Guest name: {reservation.guestName}
            </Typography>
            <Link to={`/reservations/${reservation.id}`}>
              <Button>More Info</Button>
            </Link>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default ReservationSearch;
