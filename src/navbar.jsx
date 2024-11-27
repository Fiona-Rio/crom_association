import React from 'react';
import logoBuffle from '/src/assets/img/buffle_CROM.png';
import logoCROM from '/src/assets/img/logo_CROM_white.png';


const Navbar = () => {
    return (
        <nav className="text-white bg-neutral-950 font-bold  md:text-xs lg:text-lg uppercase grid grid-flow-col items-center sm:py-2 sm:px-2 py-6 px-14">
            <a href="/" className="">
                <img src={logoBuffle} alt="logo buffle" className="sm:max-h-16 md:max-h-12 lg:max-h-24" />
            </a>
            <div className="grid md:grid-cols-4 lg:grid-cols-4 justify-items-center">
                <a href="/tremplin" className="hover:underline underline-offset-4">#ALM-le tremplin</a>
                <a href="/about" className="hover:underline underline-offset-4">évenements</a>
                <a href="/association" className="hover:underline underline-offset-4">l'association</a>
                <a href="/partenaires" className="hover:underline underline-offset-4">nos partenaires</a>
            </div>
            <a href="/" className="place-items-end">
                <img src={logoCROM} alt="logo CROM" className="sm:max-h-8 md:max-h-6 lg:max-h-16 pr-6" />
            </a>
        </nav>
    );
};

export default Navbar;