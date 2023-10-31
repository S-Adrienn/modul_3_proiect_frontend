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
    return Promise.reject(error.response?.data?.message || "Unknown error");
  }
};

export const postReservation = async (reservation) => {
  const { data } = await axiosInstance.post("/reservations", reservation);
  return data;
};

export const getReservationsByGuestName = async (guestName) => {
  try {
    const response = await axiosInstance.get(
      `/reservations/guest-reservations/${guestName}`
    );
    return response.data;
  } catch (error) {
    return Promise.reject(error.response?.data?.message || "Unknown error");
  }
};

export const getReservationById = async (id) => {
  const { data } = await axiosInstance.get(`/reservations/${id}`);
  return data;
};
