import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const ValidationTextField = ({
  label,
  value,
  onChange,
  pattern,
  errorMessage,
  isRequired,
}) => {
  const [error, setError] = useState(false);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    onChange(inputValue);

    const isPatternValid = new RegExp(pattern).test(inputValue);
    const isRequiredValid =
      !isRequired || (isRequired && inputValue.trim() !== "");

    setError(!(isPatternValid && isRequiredValid));
  };

  return (
    <TextField
      variant="outlined"
      label={label}
      value={value}
      onChange={handleInputChange}
      error={error}
      helperText={error ? errorMessage : ""}
    />
  );
};

export default ValidationTextField;
