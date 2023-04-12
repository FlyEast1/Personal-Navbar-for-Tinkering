import Home from "./components/Home";
import Department from "./components/Department";
import Contacts from "./components/Contact Us"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Services from "./components/Services";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Arcodial Financial</h1>
      </div>

      <div className="nav-section">
        <Navigation />
      </div>

      <div className="main-sections">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Department" element={<Department />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </div>

    </BrowserRouter>
    // Routes has replaced Switch in the new react dom libary. Element also replaces component
  );
}

export default App;
