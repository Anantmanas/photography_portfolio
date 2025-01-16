import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TileHome from './pages/TileHome';
import TileGallery from './pages/TileGallery';
import TileContact from './pages/TileContact';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './App.css';


const App: React.FC = () => {
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: 0.1,
        multiplier: 1,
        class: 'is-reveal',
      }}
    >
      <div className="App">
        <Router>

          <Routes>
            <Route path="/" element={<TileHome />} />
            <Route path="/gallery" element={<TileGallery />} />
            <Route path="/contact" element={<TileContact />} />
          </Routes>
        </Router>
      </div>
    </LocomotiveScrollProvider>
  );
};

export default App;