import React, { useRef } from "react";
import "./hero.css";
import Navbar from "../Navbar/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
	const heroRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"],
	});

	const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

	const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.97]);

	const searchScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

	return (
		<div className="homepage-container" ref={heroRef}>
			<Navbar />

			<div className="hero-img-container"></div>

			<motion.div
				className="hero-text-container"
				style={{
					opacity: heroOpacity,
					scale: heroScale,
				}}
			>
				<motion.h2
					className="hero-text-title"
					initial={{
						opacity: 0,
						filter: "blur(12px)",
						letterSpacing: "24px",
					}}
					animate={{
						opacity: 1,
						filter: "blur(0px)",
						letterSpacing: "8px",
					}}
					transition={{
						duration: 1.8,
						ease: [0.22, 1, 0.36, 1],
					}}
				>
					TRATELL
				</motion.h2>

				<motion.p
					className="hero-text-subtitle"
					initial={{
						opacity: 0,
						y: 10,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						delay: 0.4,
						duration: 1.2,
					}}
				>
					Tell Your Travel Story
				</motion.p>

				<motion.div
					className="search-container"
					style={{
						scale: searchScale,
					}}
					initial={{
						opacity: 0,
						filter: "blur(8px)",
						scale: 0.95,
					}}
					animate={{
						opacity: 1,
						filter: "blur(0px)",
						scale: 1,
					}}
					transition={{
						delay: 0.8,
						duration: 1.4,
						ease: [0.22, 1, 0.36, 1],
					}}
				>
					<motion.div
						className="search-box"
						animate={{
							y: [0, -4, 0],
						}}
						transition={{
							duration: 8,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					>
						<div className="field">
							<label>Destination</label>
							<select>
								<option>Select</option>
								<option>Paris</option>
								<option>Dubai</option>
							</select>
						</div>

						<div className="field">
							<label>Category</label>
							<select>
								<option>Select</option>
								<option>Adventure</option>
								<option>Luxury</option>
							</select>
						</div>

						<div className="field">
							<label>Price</label>
							<select>
								<option>Select</option>
								<option>$500 - $1000</option>
								<option>$1000+</option>
							</select>
						</div>

						<div className="field">
							<label>Date</label>
							<input type="date" />
						</div>

						<motion.button
							className="search-btn"
							whileHover={{
								scale: 1.03,
								y: -2,
							}}
							whileTap={{
								scale: 0.98,
							}}
						>
							View Offers
						</motion.button>
					</motion.div>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Hero;
