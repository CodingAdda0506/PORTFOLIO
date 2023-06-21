import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <section className="mt-9 flex flex-col justify-center items-center">
            {/* image */}
            <div className="">
                <Image src="https://avatars.githubusercontent.com/u/80524895?v=4" alt="" width={500} height={500} className="w-[315px]" />
            </div>
            {/* Name */}
            <div className="text-white font-bold font-firaCode text-[30px] mt-2k ">
                Aditya Trivedi
            </div>
            {/* Resume Button  */}
            <a href="./adityaResume.pdf" className="text-center w-[200px] font-firaCode bg-[#444c56] text-[#ADBAC7] py-2 rounded-lg border-2 border-[#768390]" target='_blank'>
                Resume
            </a>
        </section>
    )
}

export default About
