import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SideBar></SideBar>
      </div>
    </BrowserRouter>
  );
}

export default App;
