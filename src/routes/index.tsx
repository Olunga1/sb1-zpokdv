import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Marketplace from '../pages/Marketplace';
import Events from '../pages/Events';
import Resources from '../pages/Resources';
import Profile from '../pages/Profile';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/events" element={<Events />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;