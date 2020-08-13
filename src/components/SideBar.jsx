import React from "react";
import "../components/SideBar";
import "../SideBar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SideBarOption from "./SideBarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Nathalie's Clone</h2>
          <h3>
            <FiberManualRecordIcon />
            Nathalie
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SideBarOption Icon={InsertCommentIcon} title="Threads" />
      <SideBarOption title="redux" />
    </div>
  );
}

export default SideBar;
