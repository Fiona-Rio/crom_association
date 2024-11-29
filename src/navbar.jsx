import React from 'react';
import { Link } from "react-router-dom";
import logoBuffle from '/src/assets/img/buffle_CROM.png';
import logoCROM from '/src/assets/img/logo_CROM_white.png';


const Navbar = () => {
    return (
        <nav className="text-white bg-neutral-950 font-bold text-xs md:text-sm lg:text-lg uppercase grid grid-flow-col items-center py-4 px-3 lg:py-6 lg:px-14">
            <Link to={"/"}>
                <img src={logoBuffle} alt="logo buffle" className="max-h-12 sm:max-h-16 md:max-h-12 lg:max-h-24" />
            </Link>
            <div className="grid gap-y-2 md:grid-cols-4 lg:grid-cols-4 justify-items-center">
                <ul>
                    <li className="hover:scale-105 hover:underline decoration-yellow-400 underline-offset-4">
                        <Link to={"/tremplin"}>#ALM-le tremplin</Link>
                    </li>

                    <li className="hover:scale-105 hover:underline decoration-yellow-400 underline-offset-4">
                        <Link to={""}>évenements</Link>
                    </li>

                    <li className="hover:scale-105 hover:underline decoration-yellow-400 underline-offset-4">
                        <Link to={""}>l'association</Link>
                    </li>

                    <li className=" hover:scale-105 hover:underline decoration-yellow-400 underline-offset-4">
                        <Link to={""}>nos partenaires</Link>
                    </li>
                </ul>
            </div>
            <a className="place-items-end">
                <img src={logoCROM} alt="logo CROM" className="max-h-6 sm:max-h-8 md:max-h-6 lg:max-h-16" />
            </a>
        </nav>
    );
};

export default Navbar;