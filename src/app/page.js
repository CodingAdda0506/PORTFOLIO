import Image from 'next/image';
import About from './components/ProflieSection/About';
import Achivement from './components/ProflieSection/Achivement';
import ExpSection from './components/ProflieSection/ExpSection';
import Socials from './components/ProflieSection/Socials';

export default function Home() {
	return (
		<section className="flex justify-center items-center">
			<section className="border-2 border-red-500 w-[30%] h-[200vh] flex flex-col items-center">
				<About />
				<div className="my-3 w-[300px] border-[1px] border-[#768390]"></div>
				<Socials />
				<div className="my-3 w-[300px] border-[1px] border-[#768390]"></div>
				<Achivement />
				<div className="my-3 w-[300px] border-[1px] border-[#768390]"></div>
				<ExpSection />
			</section>
			<section className="border-2 border-blue-500 w-[70%] h-[200vh]">

			</section>
		</section>
	)
}
