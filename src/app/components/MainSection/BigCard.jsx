import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const BigCard = ({ title, description }) => {
    return (
        <div className="py-3 px-3 text-white text-center font-firacode w-[300px] bg-[#444c56] rounded-lg flex flex-col justify-center items-center">
            <div className="text-[20px] font-bold">
                YOUTUBE CLONE
            </div>
            <div className="text-[14px]">
                This React JS app hosted on Netlify allows users to search and explore videos by content creators, genres, and types, leveraging Rapid API&apos;s V3 YouTube API for a diverse viewing experience.
            </div>
            <div className="mt-1 flex justify-center items-center">
                <a href="/" className="px-2 py-1 mr-3 uppercase text-[14px] bg-[#2563eb] flex justify-center items-center w-[102px] rounded-lg hover:bg-[#1F54C8]">
                    <span>GitHub</span> <BsFillArrowRightCircleFill className="ml-2 text-[14px]" />
                </a>
                <a href="/" className="px-2 py-1 ml-3 uppercase text-[14px] bg-[#2563eb] flex justify-center items-center w-[102px] rounded-lg hover:bg-[#1F54C8]">
                    <span>Demo</span> <BsFillArrowRightCircleFill className="ml-2" />
                </a>
            </div>
        </div>
    )
}

export default BigCard
