import Image from 'next/image'
import React from 'react'

const IntroBanner = () => {
    return (
        <section className="mt-[36px]">
            <div className="">
                <span className="font-bold font-firaCode text-white text-[30px]" >Hey 👋,</span>
                <Image src="/githubBanner.png" alt="" width={500} height={500} className="w-[700px]" />
            </div>
        </section>
    )
}

export default IntroBanner
