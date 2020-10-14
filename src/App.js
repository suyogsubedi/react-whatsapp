import React from "react";
import Header from "./Header";
import Phone from "./Phone";
import Chat from "./Chats";
function App() {
  return (
    <div className="App">
      <Phone />
      <Header />
      <Chat />
      <Chat />
      <Chat />
    </div>
  );
}

export default App;
