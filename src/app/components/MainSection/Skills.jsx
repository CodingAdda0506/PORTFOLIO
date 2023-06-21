import Image from 'next/image';
import React from 'react';
import skill from '../Skill.json';

const Skills = () => {
    return (
        <section className="w-[700px]">
            <div className="font-bold text-white font-firaCode text-[30px]">
                ⚙Tech Stack,
            </div>
            <div className=" flex flex-wrap justify-center items-center">
                {
                    skill.Skills.map((skills) => (
                        <Image src={skills.path} key={skills.id} alt="" width={500} height={500} className="w-[54px] mx-1 my-1" />
                    ))
                }
            </div>
        </section>
    )
}

export default Skills
