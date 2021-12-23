import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import FavoriteIcon from "@mui/icons-material/Favorite";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import MessageIcon from "@mui/icons-material/Message";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

function BottomNav() {
  // const [value, setValue] = React.useState(0);

  return (
    <div>
      <Box>
        <Paper className="index-bottomNav force-left" sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={7}>
          <BottomNavigation
            showLabels
            // value={value}
            // onClick={(event, newValue) => {
            //   setValue(newValue);
            // }}
          >
            <BottomNavigationAction href="#section-hero" label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction href="#section-pengantin" label="Pengantin" icon={<FavoriteIcon />} />
            <BottomNavigationAction href="#section-tanggal-lokasi" label="Tanggal" icon={<EventIcon />} />
            <BottomNavigationAction href="#section-jumbotron" label="Galeri" icon={<PhotoLibraryIcon />} />
            <BottomNavigationAction href="#section-pesan-doa" label="Pesan" icon={<MessageIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </div>
  );
}
export default BottomNav;
