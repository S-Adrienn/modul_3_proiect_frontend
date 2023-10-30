import { useDispatch, useSelector } from "react-redux";
import { setRooms } from "../stores/roomSlice";
import { getAvailableRooms } from "../service/ReservationService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { openSnackbar } from "../stores/snackbarSlice";

export const useAvailableRooms = () => {
  const rooms = useSelector((state) => state.roomReducer.rooms);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const getAllAvailableRooms = async (checkIn, checkOut) => {
    try {
        setIsLoading(true);
        const rooms = await getAvailableRooms(checkIn, checkOut);
        console.log(checkIn, checkOut)
        dispatch(setRooms(rooms));
        navigate("/available-rooms");
        // setError(null);
    } catch (e) {
        console.error(e);
        dispatch(
          openSnackbar({text: e, severity: "error"})
          );
        // setError(e);
  
    } finally {
        setIsLoading(false);
    }
  };

  return {rooms, isLoading, getAllAvailableRooms};
};
