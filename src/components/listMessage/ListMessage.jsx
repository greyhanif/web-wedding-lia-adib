import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function AlignItemsList() {
  return (
    <List sx={{ width: "100%", maxWidth: 375, bgcolor: "background.paper" }}>
      <ListItem
        component={Paper}
        elevation={1}
        alignItems="flex-start"
        sx={{
          my: 0,
          mx: 0,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 2,
        }}
      >
        <ListItemAvatar>
          <Avatar alt="Hanif" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography sx={{ display: "inline" }} component="span" variant="body3" color="text.secondary">
                Hanif Faiz Hidayat
              </Typography>
              {" — Kota Semarang"}
            </React.Fragment>
          }
          primary="SaMaWa Loremipsum SaMaWa LoremipsumSaMaWa Loremipsum 👍🏻👍🏻😊😊🤲🏻🎉🎊"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
