import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import StarBorder from "@mui/icons-material/StarBorder";

import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from "react-router-dom";
// import { Navigate, useNavigate } from "react-router-dom";


const Launchpad = [
    {
      name: "GameFi Launchapd Developemnt",
      path: "/GameFiLaunchapd",
    },
    {
      name: "Lunchpad Development",
      path: "/LunchpadDevelopment",
    },
  ];

export default function Launchapd() {

    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    // const navigate = useNavigate()
    const handleClick = () => {
        setOpen(!open);
    };

    return (
      <List sx={{ paddingBlock: '0px' }}>
          <ListItemButton onClick={handleClick} sx={{ height: '45px' }}>
              {/* <ListItemIcon>
        <KeyboardBackspaceIcon sx={{ color: "white" }} />
      </ListItemIcon> */}

              <ListItemText primary="Launchpad Development " />
              {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>

                  {
                      Launchpad.map((item, index) => {
                          return (


                              <ListItemButton sx={{ pl: 4 }}
                                 onClick={() => navigate(item.path)}
                              >
                                  {/* <PeopleIcon /> */}
                                  {/* <ListItemIcon>
            <StarBorder />
          </ListItemIcon> */}
                                  <ListItemText primary={item.name} />
                              </ListItemButton>

                          )
                      })
                  }

                  

              </List>
          </Collapse>
      </List>
  );
}