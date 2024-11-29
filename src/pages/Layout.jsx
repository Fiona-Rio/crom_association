import React from 'react';
import Navbar from '../navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet /> {/* Ici le contenu des autres pages sera rendu */}
            </main>
        </div>
    );
};

export default Layout;
