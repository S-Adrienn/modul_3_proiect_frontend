import { useParams } from "react-router-dom";
import { useRoomById } from "../../hooks/useRoomById";
import { CircularProgress, Button, Typography } from "@mui/material";
import "../../styles/ViewRoom.css";
import { Link } from "react-router-dom";

const ViewRoom = () => {
  const { roomId } = useParams();
  const { room } = useRoomById(roomId);

  const handleSaveRoomPrice = () => {
    localStorage.setItem("roomPricePerNight", room.roomPricePerNight);
  };

  return room ? (
    <div className="view-room-container">
      <img
        src={`../../images/${room.id}.jpg`}
        alt={`Room ${room.id}`}
        className="view-room-image"
      />
      <div className="view-room-details">
        <Typography variant="h4">
          Number of Beds: {room.numberOfBeds}
        </Typography>
        <Typography variant="h4">
          Price per Night: {room.roomPricePerNight} RON
        </Typography>
        <Link to={`/add-new-reservation/${room.id}`}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveRoomPrice}
            sx={{
              backgroundColor: "#B88B4A",
              "&:hover": {
                backgroundColor: "#DDCA7D",
              },
            }}
          >
            Make a reservation
          </Button>
        </Link>
      </div>
    </div>
  ) : (
    <CircularProgress />
  );
};

export default ViewRoom;
