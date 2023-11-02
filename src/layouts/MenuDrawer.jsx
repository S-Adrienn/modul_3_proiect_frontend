import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: "250px",
    background: "#D7BE82",
  },
}));

const StyledListItemText = styled(ListItemText)({
  color: "#515A47",
});

const StyledListItem = styled(ListItem)({
  "&:hover": {
    background: "#B3A394",
  },
});

const MenuDrawer = ({ open, onClose }) => {
  const menuItems = [
    { text: "Make a reservation", path: "/datepicker" },
    { text: "My reservations", path: "/my-reservations" },
  ];

  return (
    <StyledDrawer anchor="left" open={open} onClose={onClose}>
      <div className="drawer-header">
        <IconButton onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <List>
        {menuItems.map(({ text, path }) => (
          <StyledListItem key={text} disablePadding>
            <ListItemButton component={Link} to={path}>
              <StyledListItemText primary={text} />
            </ListItemButton>
          </StyledListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default MenuDrawer;
