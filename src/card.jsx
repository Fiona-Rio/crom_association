import React, { useState } from "react";

const card = ({ name, genre, description, image_promo, image_logo, facebook, instagram, youtube }) => {
    const [showMore, setShowMore] = useState(false);

    const toggleDescription = () => {
        setShowMore(!showMore);
    }

    return (

        <div className="box-border lg:h-min-[530px] lg:w-[690px] grid grid-rows-3(auto) bg-neutral-100">
            <div className='relative flex justify-center px-4 lg:px-10'>
                <img className="max-h-80 mx-4 my-3 rounded-[30px]" src={image_promo} alt={name} />
                <div className="absolute inset-0 flex items-end justify-center">
                    <p className="text-neutral-100 text-5xl lg:text-8xl uppercase font-bold lg:translate-y-1 drop-shadow-lg">
                        {name}
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-4 mt-3">
                <div className='mx-1 p-4 lg:mx-8 lg:p-2'>
                    <img className="h-auto" src={image_logo} />
                </div>
                <div className="col-span-3 pr-8 lg:pr-20 text-xs lg:text-md">
                    <p
                        className={`text-justify ${showMore ? "line-clamp-none" : "line-clamp-6"
                            }`}
                        style={{
                            display: showMore ? "block" : "-webkit-box",
                            WebkitLineClamp: showMore ? "none" : 5,
                            WebkitBoxOrient: "vertical",
                        }}
                    >
                        {description}
                    </p>
                    <button
                        onClick={toggleDescription}
                        className="text-neutral-900 underline"
                    >
                        {showMore ? "Lire moins" : "Lire plus"}
                    </button>
                </div>
            </div>
            <div className='flex flex-row justify-end items-center pb-2 pr-2'>
                <a href={youtube}>
                    <svg className="w-[34px] h-[34px] text-gray-800 hover:text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd" />
                    </svg>
                </a>
                <a href={instagram}>
                    <svg className="w-[29px] h-[29px] text-gray-800 hover:text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
                    </svg>
                </a>
                <a href={facebook}>
                    <svg className="w-[26px] h-[26px] text-gray-800 hover:text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>

    );
};

export default card;