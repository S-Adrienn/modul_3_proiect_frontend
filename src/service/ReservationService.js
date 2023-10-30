import axiosInstance from "../plugins/axiosConfig";

export const getAvailableRooms = async (dateOfCheckIn, dateOfCheckOut) => {
  try {
    const requestData = {
      dateOfCheckIn,
      dateOfCheckOut,
    };
    const response = await axiosInstance.post(
      "/reservations/free-period",
      requestData
    );
    return response.data;
  } catch (error) {
    return Promise.reject(error.response?.data?.message || "U.E.");
  }
};

export const postReservation = async (reservation) => {
  const { data } = await axiosInstance.post("/reservations", reservation);
  return data;
};
