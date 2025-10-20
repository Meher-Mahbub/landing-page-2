import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Sidebar />
      <main className="main-content">
        <Header />
        <div className="landing">
          <Hero />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
