import { Outlet } from "react-router-dom";
import "./App.scss";
import ChatBox from "./components/ChatBox/ChatBox";
import Header from "./components/Header/Header";
import MainChat from "./components/ChatBox/MainChat";
import Modal from "./components/modal/Modal";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <ChatBox />
      <MainChat />
    </div>
  );
}

export default App;
