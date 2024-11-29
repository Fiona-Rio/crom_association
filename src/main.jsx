import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Tremplin from './pages/tremplin';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Layout est utilisé pour garder la Navbar visible sur toutes les pages */}
        <Route path="/" element={<Layout />}>
          {/* Page d'accueil */}
          <Route index element={<Home />} />
          {/* Page Tremplin */}
          <Route path="tremplin" element={<Tremplin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
