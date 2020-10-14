import React from "react";
import "./main.css";

const Header = () => {
  return (
    <div className="main">
      <div className="top">
        <div className="logo">
          <h3 className="Logo">WhatsApp</h3>
        </div>
        <div className="actionIcons">
          <i className="fas fa-search"></i>
          <i className="far fa-comment-dots"></i>
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>
      <div className="info">
        <p>CALLS</p>

        <p>CHATS</p>

        <p>CONTACT</p>
      </div>
      <hr className="underline" />
    </div>
  );
};

export default Header;
