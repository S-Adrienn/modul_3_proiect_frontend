import { useState } from 'react';
import AppHeader from './AppHeader';
import MainView from './MainView';
import MenuDrawer from './MenuDrawer';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import AppSnackbar from "../components/AppSnackbar";


function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Grid container spacing={2}>
      <AppSnackbar/>
      <Grid item xs={12}>
        <AppHeader onMenuIconClick={toggleMenu} />
      </Grid>
      <Grid item xs={8}>
        <MenuDrawer open={menuOpen} onClose={toggleMenu} />
      </Grid>
      <Grid item xs={12}>
        <MainView />
      </Grid>
    </Grid>
  );
}

export default Layout;
