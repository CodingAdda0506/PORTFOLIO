import Image from 'next/image';
import About from './components/ProflieSection/About';
import Achivement from './components/ProflieSection/Achivement';
import Experience from './components/ProflieSection/Experience';
import Socials from './components/ProflieSection/Socials';

export default function Home() {
	return (
		<section className="flex justify-center items-center">
			<section className="border-2 border-red-500 w-[30%] h-screen flex flex-col items-center">
				<About />
				<div className="my-3 w-[300px] border-[1px] border-[#768390]"></div>
				<Socials />
				<div className="my-3 w-[300px] border-[1px] border-[#768390]"></div>
				<Achivement />
				{/* <div className=""></div> */}
				{/* <Experience /> */}
			</section>
			<section className="border-2 border-blue-500 w-[70%] h-screen">

			</section>
		</section>
	)
}
