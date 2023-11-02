import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";

const DeleteReservation = ({ isOpen, onClose, onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Confirm Delete?</DialogTitle>
      <DialogContent>
        <Typography>{`Are you sure you want to delete this reservation?`}</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          sx={{ borderColor: "#B88B4A", color: "#B88B4A" }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleDelete}
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#EF6461",
            "&:hover": {
              backgroundColor: "#DDCA7D",
            },
          }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteReservation;
