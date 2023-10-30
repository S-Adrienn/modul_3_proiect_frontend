import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';

const MenuDrawer = ({ open, onClose }) => {
  const menuItems = [
    { text: "Make a reservation", path: "/datepicker" }
  ];

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <div className="drawer-header">
        <IconButton onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <List>
        {menuItems.map(({text, path}) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <Link to={path}>
                <ListItemText primary={text}/>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default MenuDrawer;
  