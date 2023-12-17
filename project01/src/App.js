import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
