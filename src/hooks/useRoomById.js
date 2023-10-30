import { useEffect, useState } from "react";
import { getRoomById } from "../service/RoomService";

export const useRoomById = (id) => {
  const [room, setRoom] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getRoom = async () => {
      try {
        setIsLoading(true);
        const room = await getRoomById(id);
        setRoom(room);
        setIsError(false);
      } catch (e) {
        console.error(e);
        setIsError(e);
      } finally {
        setIsLoading(false);
      }
    };

    getRoom();
  }, [id]);

  return { room, isLoading, isError };
};
