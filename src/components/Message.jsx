import React from "react";
import "../Message.css";

function Message({ user, userImage, message, timestamp }) {
  return (
    <div className="message">
      {console.log(user)}
      <img src={userImage} />
      <div className="message__info">
        <h4>
          {user}
          <span className="message__date">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
