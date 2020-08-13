import React from "react";
import "../SideBarOption.css";

function SideBarOption({ Icon, title }) {
  return (
    <div className="sidebaroption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash"># {title}</span>
        </h3>
      )}
    </div>
  );
}

export default SideBarOption;
