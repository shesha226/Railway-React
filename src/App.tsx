import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import SideBar from './Components/sideBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Media from './Pages/Meadia';
import Contact from './Pages/Contact';
import Bokkings from './Pages/Booking';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar />

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:block fixed top-16 left-0 h-screen w-40 bg-gray-100">
          <SideBar />
        </div>

        {/* Page content */}
        <div className="flex-1 pt-16 md:ml-50 min-h-screen ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/booking" element={<Bokkings />} />

            <Route
              path="*"
              element={<h1 className="text-center mt-20">404 Not Found</h1>}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
