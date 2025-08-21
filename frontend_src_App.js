import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Login from './components/Login';
import Signup from './components/Signup';
import Cart from './components/Cart';
import Order from './components/Order';
import TrackOrder from './components/TrackOrder';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/track/:orderId" element={<TrackOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;