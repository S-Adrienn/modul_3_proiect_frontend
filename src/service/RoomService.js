import axiosInstance from "../plugins/axiosConfig";

export const getRoomById = async (id) => {
  const { data } = await axiosInstance.get(`/rooms/${id}`);
  return data;
};

export const getPricePerNightByRoomId = async (id) => {
  const { data } = await axiosInstance.get(`/rooms/price-per-night/${id}`);
  return data;
};
