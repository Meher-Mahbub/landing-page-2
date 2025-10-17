import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <div>
      <Sidebar />
      <main className="main-content">
        <Header />
      </main>
    </div>
  );
}

export default App;
