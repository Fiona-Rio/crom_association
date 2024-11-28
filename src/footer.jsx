import React from "react";

const Footer = ({ facebook, instagram, youtube }) => {
    return (
        <div className="bg-neutral-200 px-4 py-2 lg:px-10 lg:py-10">
            <h1 className="uppercase font-extrabold mb-5 lg:text-xl">contact :</h1>
            <div className="grid grid-cols-3 lg:flex lg:justify-evenly text-center">
                <div className="col-span-2 flex flex-auto lg:justify-center">
                    <svg className="place-self-center w-[28px] h-[28px] lg:w-[38px] lg:h-[36px] text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>
                    <a className="justify-self-start text-xs lg:text-xl place-self-center">
                        crom.association@gmail.com
                    </a>
                </div>
                <div className="flex flex-auto lg:justify-center">
                    <a href={instagram}>
                        <svg className="place-self-center w-[32px] h-[32px] lg:w-[38px] lg:h-[36px] text-gray-800 hover:text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
                        </svg>
                    </a>
                    <a href={instagram} className="justify-self-start text-xs lg:text-xl place-self-center">
                        @crom_asso
                    </a>
                </div>
                <div className="col-span-2 flex flex-auto lg:justify-center">
                    <a href={facebook}>
                        <svg className="place-self-center w-[27px] h-[26px] lg:w-[38px] lg:h-[36px] text-gray-800 hover:text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
                        </svg>
                    </a>
                    <a href={facebook} className="justify-self-start text-xs lg:text-xl place-self-center">
                        CROM.association
                    </a>
                </div>
                <div className="flex flex-auto lg:justify-center">
                    <a href={youtube}>
                        <svg className="place-self-center w-[34px] h-[32px] lg:w-[38px] lg:h-[36px] text-gray-800 hover:text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd" />
                        </svg>
                    </a>
                    <a href={youtube} className="justify-self-start text-xs lg:text-xl place-self-center">
                        Cromasso
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;