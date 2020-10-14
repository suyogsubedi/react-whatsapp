import React from "react";

const Chat = () => {
  return (
    <div className="main-container">
      <img
        className="userPhoto"
        src="https://picsum.photos/id/237/200/300"
        alt="User "
      />

      <div className="other-info">
        <div className="name-time">
          <h4 className="name">Slow Coder</h4>
          <small className="time">11:45 AM</small>
        </div>
        <div className="messagePreview">
          <p>Ned: Hi thanks for texting</p>
          <hr />
        </div>
      </div>
    </div>
  );
};
export default Chat;
