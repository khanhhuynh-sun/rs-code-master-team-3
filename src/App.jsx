import { Outlet } from "react-router-dom";
import "./App.scss";
import ChatBox from "./components/ChatBox/ChatBox";
import Header from "./components/Header/Header";
import MainChat from "./components/ChatBox/MainChat";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <ChatBox />
      <MainChat />
      <Footer />
    </div>
  );
}

export default App;
