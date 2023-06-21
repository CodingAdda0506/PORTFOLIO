import Image from 'next/image';
import AboutMe from './components/MainSection/AboutMe';
import IntroBanner from './components/MainSection/IntroBanner';
import About from './components/ProflieSection/About';
import Achivement from './components/ProflieSection/Achivement';
import ExpSection from './components/ProflieSection/ExpSection';
import Socials from './components/ProflieSection/Socials';

export default function Home() {
	return (
		<section className="flex justify-center items-center">
			<section className="border-r-2 border-[#768390] w-[30%] h-[250vh] flex flex-col items-center ">
				<About />
				<div className="my-3 w-[300px] border-[1px] border-[#768390]"></div>
				<Socials />
				<div className="my-3 w-[300px] border-[1px] border-[#768390]"></div>
				<Achivement />
				<div className="my-3 w-[300px] border-[1px] border-[#768390]"></div>
				<ExpSection />
			</section>
			<section className="border-2 border-blue-500 w-[70%] h-[250vh] flex flex-col items-center">
				<IntroBanner />
				<div className="my-4 w-[878px] border-[1px] border-[#768390]"></div>
				<AboutMe />
			</section>
		</section>
	)
}
