import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Tremplin from './pages/tremplin'; // Assurez-vous d'importer correctement le composant Tremplin
import reportWebVitals from './reportWebVitals';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Route principale avec Layout */}
                <Route path="/" element={<Layout />}>
                    {/* Route d'index pour la page d'accueil */}
                    <Route index element={<Home />} /> {/* Home est la page par défaut */}
                    {/* Page Tremplin */}
                    <Route path="tremplin" element={<Tremplin />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

// Rendu de l'application avec React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Mesurer les performances
reportWebVitals();
