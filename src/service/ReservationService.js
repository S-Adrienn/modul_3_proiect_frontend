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
  try {
    const { data } = await axiosInstance.post("/reservations", reservation);
    return data;
  } catch (error) {
    const errorMessage = error.response.data.errors.find(
      (error) => error.defaultMessage
    );
    return Promise.reject(errorMessage.defaultMessage || "Unknown error");
  }
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

export const deleteReservation = async (id) => {
  const { data } = await axiosInstance.delete(`/reservations/${id}`);
  return data;
};

export const putReservation = async (id, reservation) => {
  try {
    const { data } = await axiosInstance.put(
      `/reservations/${id}`,
      reservation
    );
    return data;
  } catch (error) {
    const errorMessage = error.response.data.errors.find(
      (error) => error.defaultMessage
    );
    return Promise.reject(errorMessage.defaultMessage || "Unknown error");
  }
};
