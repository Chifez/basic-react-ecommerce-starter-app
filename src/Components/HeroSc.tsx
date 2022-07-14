import React from "react";
import HeroOne from "../Assets/images/hero1.webp";
import HeroTwo from "../Assets/images/hero2.webp";
import HeroThree from "../Assets/images/hero3.webp";

const HeroSc = () => {
	return (
		<div className="absolute w-[70vw] h-[61vh] left-[20rem] top-[10rem] ml-[1.5rem] mt-[1.5rem] border">
			<div className="">
				<div className="absolute">
					<img
						src={HeroOne}
						alt="hero"
						className="w-[70vw] h-[61vh] object-cover"
					/>
				</div>
				<div className="absolute">
					<img
						src={HeroTwo}
						alt="hero"
						className="w-[70vw] h-[61vh] object-cover"
					/>
				</div>
				<div className="absolute ">
					<img
						src={HeroThree}
						alt="hero"
						className="w-[70vw] h-[61vh] object-cover"
					/>
				</div>
			</div>
			<div>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	);
};

export default HeroSc;
