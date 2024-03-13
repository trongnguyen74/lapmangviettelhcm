import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatContactButton } from './components/FloatContactButton';
import { Home } from './pages/Home';
import { InternetViettel } from './pages/InternetViettel';
import { NetTruyenHinh } from './pages/NetTruyenHinh';
import { HomeWifi } from './pages/HomeWifi';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="min-h-[100vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/internet-viettel" element={<InternetViettel />} />
          <Route path="/net-truyen-hinh" element={<NetTruyenHinh />} />
          <Route path="/home-wifi" element={<HomeWifi />} />
        </Routes>
      </div>
      <FloatContactButton />
      <Footer/>
    </div>
  );
}

export default App;
