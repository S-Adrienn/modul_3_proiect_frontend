import { Stack } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";
import CircleBackgroundIcon from "../../components/CircleBackgroundIcon";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function RoomItem({ room, onGetRooms }) {
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState(`../../images/${room.id}.jpg`);

  // const dispatch = useDispatch(); ez a snackbarhoz kell

  const handleImgError = () => {
    setSrc("../../images/no-image.jpg");
  };

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  return (
    <Stack
      direction="column"
      alignItems="center"
      spacing={0.5}
      className="room-image-width"
    >
      <div className="room-image-container">
        <img
          className="room-image room-image-width room-image-height"
          src={src}
          onError={handleImgError}
          loading="lazy"
          alt="Room Image"
        />
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          className="middle"
        >
          <Link to={`/rooms/${room.id}`}>
            <CircleBackgroundIcon icon={VisibilityIcon} color="white"/>
          </Link>
        </Stack>
      </div>
    </Stack>
  );
}
