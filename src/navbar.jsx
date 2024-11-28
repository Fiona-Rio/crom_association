import React from 'react';
import logoBuffle from '/src/assets/img/buffle_CROM.png';
import logoCROM from '/src/assets/img/logo_CROM_white.png';


const Navbar = () => {
    return (
        <nav className="text-white bg-neutral-950 font-bold text-xs md:text-sm lg:text-lg uppercase grid grid-flow-col items-center py-4 px-3 lg:py-6 lg:px-14">
            <a href="./index.html" className="">
                <img src={logoBuffle} alt="logo buffle" className="max-h-12 sm:max-h-16 md:max-h-12 lg:max-h-24" />
            </a>
            <div className="grid gap-y-2 md:grid-cols-4 lg:grid-cols-4 justify-items-center">
                <a href="/tremplin" className="hover:scale-105 hover:underline decoration-yellow-400 underline-offset-4">#ALM-le tremplin</a>
                <a href="/about" className="hover:scale-105 hover:underline decoration-yellow-400 underline-offset-4">évenements</a>
                <a href="/association" className="hover:scale-105 hover:underline decoration-yellow-400 underline-offset-4">l'association</a>
                <a href="/partenaires" className=" hover:scale-105 hover:underline decoration-yellow-400 underline-offset-4">nos partenaires</a>
            </div>
            <a className="place-items-end">
                <img src={logoCROM} alt="logo CROM" className="max-h-6 sm:max-h-8 md:max-h-6 lg:max-h-16" />
            </a>
        </nav>
    );
};

export default Navbar;