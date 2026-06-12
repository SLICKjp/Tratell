import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./featuredstays.css";

import Hotel from "../../assets/slider/hotel.png";
import Hero from "../../assets/hero/heroimg.png";
import Footer from "../../assets/footer/footer_bg.png";

import arrow_left from "../../assets/slider/arrow_left.png";
import arrow_right from "../../assets/slider/arrow_right.png";

const slides = [
	{
		id: 1,
		image: Hotel,
		title: "Parkyard",
		subtitle: "Nature Resort",
		description:
			"Parkyard Nature Resort welcomes you with water breeze fountain & spacious car parking. It is located in the heart of nature for relaxing your mind & body.",
	},
	{
		id: 2,
		image: Hero,
		title: "Ocean Bliss",
		subtitle: "Beach Resort",
		description: "Relax by the ocean with premium comfort and scenic views.",
	},
	{
		id: 3,
		image: Footer,
		title: "Mountain Escape",
		subtitle: "Hill Retreat",
		description: "Find peace and tranquility surrounded by mountains.",
	},
];


const SLIDE_WIDTH = 480; 
const HALF_WINDOW = 4; 

// Maps any (possibly negative or huge) position to the matching real slide.
const slideAt = (p) => slides[((p % slides.length) + slides.length) % slides.length];

const FeaturedStays = () => {
	const [index, setIndex] = useState(0);

	const nextSlide = () => setIndex((prev) => prev + 1);
	const prevSlide = () => setIndex((prev) => prev - 1);

	
	const positions = [];
	for (let p = index - HALF_WINDOW; p <= index + HALF_WINDOW; p++) {
		positions.push(p);
	}

	return (
		<section className="featured-stays-container">
			<motion.div
				className="featured-stays-title-container"
				initial={{
					opacity: 0,
					y: 30,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				viewport={{
					once: true,
				}}
				transition={{
					duration: 1,
				}}
			>
				<div className="featured-stays-title">
					<h1>
						<span className="primary-text">Handpicked Stays</span>

						<br />

						<span className="secondary-text">For You</span>
					</h1>
				</div>

				<div className="featured-stays-body">
					Stay with trusted hotels known for exceptional comfort, warm
					hospitality, and memorable experiences—carefully selected to make
					every journey feel special.
				</div>
			</motion.div>

			<div className="slider-arrows">
				<span onClick={prevSlide}>
					<img src={arrow_left} alt="" />
				</span>

				<span onClick={nextSlide}>
					<img src={arrow_right} alt="" />
				</span>
			</div>

			<div className="slider-window">
				<motion.div
					className="slider-track"
					initial={false}
					animate={{
						x: `calc(50% - ${index * SLIDE_WIDTH}px - 225px)`,
					}}
					transition={{
						type: "spring",
						stiffness: 90,
						damping: 25,
					}}
				>
					{positions.map((p) => {
						const slide = slideAt(p);
						return (
							<div
								className={`slide ${p === index ? "active" : ""}`}
								key={p}
								style={{ left: `${p * SLIDE_WIDTH}px` }}
							>
								<motion.img src={slide.image} alt="" />

								<AnimatePresence mode="wait">
									{p === index && (
										<motion.div
											className="hotel-details"
											key={slide.id}
											initial={{
												opacity: 0,
												y: 20,
											}}
											animate={{
												opacity: 1,
												y: 0,
											}}
											exit={{
												opacity: 0,
												y: 20,
											}}
											transition={{
												duration: 0.4,
											}}
										>
											<h3 className="hotel-name">{slide.title}</h3>

											<h4 className="hotel-type">{slide.subtitle}</h4>

											<p className="hotel-description">{slide.description}</p>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
};

export default FeaturedStays;
