import { useState } from 'react';

export const useDateSelection = () => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const handleCheckInChange = (date) => {
    setCheckIn(date);
  };

  const handleCheckOutChange = (date) => {
    setCheckOut(date);
  };

  return { checkIn, checkOut, handleCheckInChange, handleCheckOutChange };
};
