import React from "react";
import Affiche from '/src/assets/img/affiche_6-12.jpg';

const mainCard = () => {
    return (
        <section>
            <div className="bg-neutral-800 text-white selection:bg-yellow-400 selection:text-stone-800 rounded-[18px] p-8 md:m-2 lg:mx-6 md:px-10 md:py-10 md:mb-36 lg:mb-28 lg:py-10 lg:my-0 grid md:grid-cols-10 lg:grid-cols-12 md:gap-x-8 lg:gap-x-0 justify-center items-center">
                <div className="md:col-span-4 lg:col-span-5 lg:ml-20">
                    <img src={Affiche} alt="affiche du 6 décembre 2024" className="justify-self-center max-h-72 md:max-h-128 lg:max-h-128" />
                </div>
                <div className="mt-4 md:col-start-5 md:col-end-11 lg:col-start-6 lg:col-end-13 lg:pl-11">
                    <div className="grid grid-rows-5(auto) gap-y-5 md:gap-y-6 lg:gap-y-10">
                        <div>
                            <h1 className="uppercase text-3xl text-center lg:text-start md:text-4xl lg:text-6xl font-bold text-yellow-400">angers likes metal VIII</h1>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg text-center lg:text-start md:text-lg lg:text-4xl">LE FINALE SHOW
                                •
                                06/12
                                •
                                le Chabada</h2>
                        </div>
                        <div className="row-span-2 text-sm lg:text-md text-justify md:pr-0 lg:pr-24">
                            L’association angevine <strong>CROM</strong> présente la 8ème édition du tremplin <strong>Angers likes métal</strong>. Ce tremplin a pour but de promouvoir la culture musicale Metal à Angers et à Nantes et de valoriser les groupes locaux émergents.
                            <br />
                            <strong>Ten56</strong>. et <strong>Solitaris</strong> sont invités participer à cet évenement majeur dans le paysage du metal angevin. En plus de lots exclusifs venant de nos partenaires comme <strong>Wiseband</strong> et <strong>Dôme Studio</strong>.
                            <br />
                            <strong>Mirizon</strong>, le gagnant du tremplin à l'opportunité de partager la scene emblematique angevine : <strong>Le Chabada</strong>.
                        </div>
                        <div className="grid grid-cols-2 md:grid-col-2 lg:grid-cols-12">
                            <a href="https://www.helloasso.com/associations/crom/evenements/angers-likes-metal-final-show"
                                className="lg:col-span-2  lg:col-start-2 rounded-full border-solid border-2 border-yellow-400 bg-neutral-700 hover:bg-yellow-400 hover:text-neutral-700 hover:scale-105 md:px-10 md:py-2 lg:px-20 lg:py-2 uppercase text-center justify-self-center px-6 py-1 font-bold text-sm md:text-sm md:place-self-center"
                            >
                                billetterie
                            </a>
                            <a href="https://www.facebook.com/events/987891515640210/?acontext=%7B%22event_action_history%22%3A[]%7D"
                                className="lg:col-span-2 md:col-start-2 lg:col-start-7 rounded-full border-solid border-2 border-yellow-400 bg-neutral-700 hover:bg-yellow-400 hover:text-neutral-700 hover:scale-105 md:px-10 md:py-2 lg:px-20 lg:py-2 uppercase text-center justify-self-center px-6 py-1 font-bold text-sm md:text-sm md:place-self-center"
                            >
                                évenement
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default mainCard