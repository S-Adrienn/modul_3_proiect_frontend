import axiosInstance from "../plugins/axiosConfig";

export const getRoomById = async (id) => {
    const { data } = await axiosInstance.get(`/rooms/${id}`);
    return data;
  };