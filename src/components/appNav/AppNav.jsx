import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import ThemeLiaAdib from "../../";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./appNav.css";

const AppNav = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={ThemeLiaAdib}>
          <AppBar color="seconday" position="fixed" sx={{ top: "auto", bottom: 0 }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 12 }}>
                <h6 className="nav-name">Liaa & Adib</h6>
              </Typography>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Akad</Button>
              <Button color="inherit">Resepsi</Button>
              <Button color="inherit">RSVP</Button>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </Box>
    </div>
  );
};

export default AppNav;
