import { useParams } from "react-router-dom";
import { useRoomById } from "../../hooks/useRoomById";
import { CircularProgress, Button, Typography } from "@mui/material";
import "../../styles/ViewRoom.css";
import { Link } from "react-router-dom";
// import { useState } from "react";

const ViewRoom = () => {
  const { roomId } = useParams();
  const { room } = useRoomById(roomId);
  //   const [isBooking, setIsBooking] = useState(false);

  // const handleBookRoom = () => {
  //   window.location.href = "/add-new-reservation";
  // };

  return room ? (
    <div className="room-container">
      <img
        src={`../../images/${room.id}.jpg`}
        alt={`Room ${room.id}`}
        className="room-image"
      />
      <div className="room-details">
        <Typography variant="h4">
          Number of Beds: {room.numberOfBeds}
        </Typography>
        <Typography variant="h4">
          Price per Night: {room.roomPricePerNight} RON
        </Typography>
        <Link to={`/add-new-reservation/${room.id}`}>
          <Button variant="contained" color="primary">
            Foglalás
          </Button>
        </Link>
      </div>
    </div>
  ) : (
    <CircularProgress />
  );
};

export default ViewRoom;
