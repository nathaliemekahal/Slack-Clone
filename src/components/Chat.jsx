import React, { useState, useEffect } from "react";
import "../Chat.css";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "../firebase";
import Message from "../components/Message";
function Chat() {
  const { roomId } = useParams();
  console.log(roomId);
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState(null);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  console.log(roomId);
  console.log("roomMsgs", roomMessages);
  return (
    <div className="Chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon />
            Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages &&
          roomMessages.map(({ message, user, timestamp, userImage }) => (
            <Message
              message={message}
              user={user}
              timestamp={timestamp}
              userImage={userImage}
            />
          ))}
      </div>
    </div>
  );
}

export default Chat;
