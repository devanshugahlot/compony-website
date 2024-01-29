import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import Company from "./InsightsCompany/Company";

export default function InSights() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List sx={{ paddingBlock: '0px' }}>
      <ListItemButton onClick={handleClick} sx={{ height: '45px' }}>
        {/* <ListItemIcon>
          <KeyboardBackspaceIcon sx={{ color: "white" }} />
        </ListItemIcon> */}

        <ListItemText primary="Insights " />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2 }} >
            {/* <PeopleIcon />
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon> */}
            {/* <ListItemText primary="All Deposite" /> */}
 <Company/>            
            
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} 
           onClick={() => navigate("/ContectUsForm")}
          >
            {/* <PeopleIcon />
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon> */}
            <ListItemText
              primary="
              Contact us"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} 
           onClick={() => navigate("/News")}
           >
            {/* <PeopleIcon />
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon> */}
            <ListItemText
              primary="
              News"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} 
           onClick={() => navigate("/InsightsFAQ")}
          
          >
            {/* <PeopleIcon />
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon> */}
            <ListItemText
              primary="FAQ"
            />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}