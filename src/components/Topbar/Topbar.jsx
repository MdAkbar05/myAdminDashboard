import React from "react";

import "./topbar.css";
import akbar from "../Topbar/img/MdAkbar.png";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        {/* Left Topbar  */}
        <div className="topLeft">
          <span className="logo">SamratPanel</span>
        </div>
        {/* Right Topbar  */}
        <div className="topRight">
          <div className="topbarIconsContainer">
            <NotificationsNone />
            <div className="topIconBadge">3</div>
          </div>
          <div className="topbarIconsContainer">
            <Language />
            <div className="topIconBadge">3</div>
          </div>
          <div className="topbarIconsContainer">
            <Settings />
          </div>
          <img src={akbar} alt="MdAkbar" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
