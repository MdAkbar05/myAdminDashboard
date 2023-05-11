import React from "react";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/SIdebar/Sidebar";
import "./app.css";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <div className="App bg-dark">
      <Topbar />
      <div className="container ">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
