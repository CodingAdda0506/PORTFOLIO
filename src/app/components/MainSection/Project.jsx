import React from 'react';
import BigCard from './BigCard';

const Project = () => {
    return (
        <section className="w-[700px]">
            <div className="font-bold text-white font-firaCode text-[30px]">
                💻Projects,
            </div>
            <div className="grid grid-cols-2 gap-4">
                <BigCard title="" description="" />
                <BigCard title="" description="" />
                <BigCard title="" description="" />
                <BigCard title="" description="" />
            </div>
        </section>
    )
}

export default Project
