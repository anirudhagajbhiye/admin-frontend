import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SideBar></SideBar>
        <div className="SideContent" style={{ width: "calc(100% - 150px)" }}>
          <Header></Header>
          <MainContent></MainContent>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
