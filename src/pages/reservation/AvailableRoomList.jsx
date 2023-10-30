import { useAvailableRooms } from "../../hooks/useAvailableRooms";
import RoomItem from "../room/RoomItem";
import "../../styles/RoomsList.css";
import { Box, Stack } from "@mui/system";
import { CircularProgress } from "@mui/material";

const AvailableRoomsList = () => {
  const { rooms, getAllAvailableRooms } = useAvailableRooms();

  return (
    <Stack
      direction="row"
      sx={{
        flexWrap: "wrap",
        gap: "3rem",
      }}
    >
      {rooms.length === 0 ? (
        <Box className="center-flex-container">
          <CircularProgress />
        </Box>
      ) : (
        rooms.map((room) => (
          <RoomItem
            room={room}
            key={room.id}
            onGetRooms={getAllAvailableRooms}
          />
        ))
      )}
    </Stack>
  );
};

export default AvailableRoomsList;
