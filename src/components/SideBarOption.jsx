import React from "react";
import "../SideBarOption.css";
import { useHistory } from "react-router-dom";
import db from "../firebase";

function SideBarOption({ Icon, title, id, addChannelOption }) {
  const history = useHistory();
  const addChannel = () => {
    const channelName = prompt("please enter channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  const selectChannel = () => {
    if (id) {
      history.push(`/room${id}`);
    } else {
      history.push(title);
    }
  };
  return (
    <div
      className="sidebaroption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash"># </span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SideBarOption;
