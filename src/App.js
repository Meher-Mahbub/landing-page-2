import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Sidebar />
      <div className="main-content">
        <Header />
      </div>
    </div>
  );
}

export default App;
