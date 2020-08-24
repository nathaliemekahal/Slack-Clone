import React from "react";
import "../Message.css";

function Message({ user, userImage, message, timestamp }) {
  return (
    <div className="Message">
      {console.log(user)}
      <img src={userImage} />
      <div className="message__info">
        <h4>{user} timestamp...</h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
