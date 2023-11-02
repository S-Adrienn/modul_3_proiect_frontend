import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";

const AppHeaderStyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#A27035",
}));

const appTitleStyle = {
  fontSize: "24px",
};

function AppHeader({ onMenuIconClick }) {
  return (
    <AppHeaderStyled position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onMenuIconClick}
        >
          <MenuIcon />
        </IconButton>
        <span style={appTitleStyle} className="app-title">
          GuestJoy
        </span>
      </Toolbar>
    </AppHeaderStyled>
  );
}

export default AppHeader;
