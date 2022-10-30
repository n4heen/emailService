import { Button } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from "./SidebarOption";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebarCompose"
      >
        Compose
      </Button>
      <SidebarOption Icon={<InboxIcon/>} title="Inbox" number={64}/>
    </div>
  );
};

export default Sidebar;
