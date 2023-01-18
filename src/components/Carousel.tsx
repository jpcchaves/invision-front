import Lottie from 'lottie-react';
import { useState } from 'react';
import { BsDot } from 'react-icons/bs';
import { MdHorizontalRule } from 'react-icons/md';
import { Outlet } from 'react-router-dom';
import businessTeamAnimation from '../assets/business-team.json';
import { dataSliderPlaceholder } from '../utils/data/dataSliderPlaceholder';

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = (slideId: number) => {
		setCurrentIndex(slideId);
	};

	return (
		<div className="w-full h-full flex items-center justify-center">
			<div className="w-[50%] h-screen bg-[#A9C5BA]">
				<div className="h-[50%]">
					<Lottie animationData={businessTeamAnimation} className="h-[100%]" />
				</div>
				<div className="mt-20">
					<div className=" w-full h- relative text-center tracking-widest text-white">
						<div className="w-full h-full rounded">
							<h3 className="pb-3 duration-500">
								{dataSliderPlaceholder[currentIndex].title}
							</h3>
							<p>{dataSliderPlaceholder[currentIndex].body}</p>
							<div className="flex items-center justify-center py-4">
								{currentIndex === 0 ? (
									<MdHorizontalRule size={30} className="cursor-pointer" />
								) : (
									<BsDot
										size={30}
										className="cursor-pointer "
										onClick={() => nextSlide(0)}
									/>
								)}
								{currentIndex === 1 ? (
									<MdHorizontalRule className="cursor-pointer " size={30} />
								) : (
									<BsDot
										size={30}
										className="cursor-pointer "
										onClick={() => nextSlide(1)}
									/>
								)}
								{currentIndex === 2 ? (
									<MdHorizontalRule className="cursor-pointer " size={30} />
								) : (
									<BsDot
										size={30}
										className="cursor-pointer "
										onClick={() => nextSlide(2)}
									/>
								)}
								{currentIndex === 3 ? (
									<MdHorizontalRule className="cursor-pointer " size={30} />
								) : (
									<BsDot
										size={30}
										className="cursor-pointer "
										onClick={() => nextSlide(3)}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Outlet />
		</div>
	);
};

export default Carousel;
