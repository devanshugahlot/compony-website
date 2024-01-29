import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";


import "./Sidebar.css";

import Website from "./Website";
import Software from "./Software";
import Blockchain from "./Blockchain";
import Application from "./Application";
import Metaverse from "./Metaverse";
import Game from "./Game";
import InSights from './InSights'
import { useNavigate } from "react-router-dom";
// import AvatarIcon from './Avatar';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const navigate = {}

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    // setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate();

  const drawer = (
    <div className="sidebar-div">
     

      <List
        sx={{
          color: "white",
          background: "black",
          borderBottom: "1px solid #2E2A2A",
        }}
      >
        <Website />
      </List>
      <List
        sx={{
          color: "white",
          background: "black",
          borderBottom: "1px solid #2E2A2A",
        }}
      >
        <Software />
      </List>
      <List
        sx={{
          color: "white",
          background: "black",
          borderBottom: "1px solid #2E2A2A",
        }}
      >
        <Blockchain />
      </List>
      <List
        sx={{
          color: "white",
          background: "black",
          borderBottom: "1px solid #2E2A2A",
        }}
      >
        <Application />
      </List>
      <List
        sx={{
          color: "white",
          background: "black",
          borderBottom: "1px solid #2E2A2A",
        }}
      >
        <Metaverse />
      </List>
      <List
        sx={{
          color: "white",
          background: "black",
          borderBottom: "1px solid #2E2A2A",
        }}
      >
        <Game />
      </List>

      <List
        sx={{
          color: "white",
          background: "black",
          borderBottom: "1px solid #2E2A2A",
        }}
      >
        <InSights />
      </List>

      <List
        sx={{
          color: "white",
          background: "#000",
          borderBottom: "1px solid #2E2A2A",
        }}
      >
        {["Blogs"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ height: "45px" }}
             onClick={() => navigate('/Blog')}
            >
              {/* <ListItemIcon>
                <MoveUpIcon sx={{ color: "#D8AF72" }} />
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List
        sx={{
          color: "white",
          background: "#000",
          // background: "#161616",
          borderBottom: "1px solid #2E2A2A",
        }}
      >
        {["Case Study"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ height: "45px" }}
              onClick={() => navigate('/CaseStudy')}
            >
              {/* <ListItemIcon>
                <MoveUpIcon sx={{ color: "#D8AF72" }} />
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Toolbar sx={{ background: "#000" }} />
      {/* <Divider /> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          width: {
            sm: `calc(100% - ${drawerWidth}px) },
          ml: { sm: ${drawerWidth}px`,
          },
        }}
      ></AppBar>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          sx={{
            display: "flex",
          }}
        ></Typography>
      </Toolbar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        {/* <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer> */}
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          width: { sm: ` calc(100% - ${drawerWidth}px)` },
          // backgroundColor: "#272727",
        }}
      >
        <Toolbar />
        <Typography>
          {/* {props.outlet} */}
        </Typography>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
