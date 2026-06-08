import React, { useState, useEffect, useRef } from "react";
import "./hotel.css";
import { motion, AnimatePresence } from "framer-motion";
import img from "../../assets/carousel/resort.jpg";

const HotelCarousel = () => {
	const hotelList = [
		{
			hotelName: "Hotel Mahabaleshwar",
			img: img,
			price: "₹4000",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
		{
			hotelName: "Hotel ParkYard",
			img: img,
			price: "₹5000",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
		{
			hotelName: "Hotel Vista",
			img: img,
			price: "₹6000",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
		{
			hotelName: "Villa Fiesta",
			img: img,
			price: "₹7000",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
	];

	const extendedList = [
		hotelList[hotelList.length - 1],
		...hotelList,
		hotelList[0],
	];

	const [index, setIndex] = useState(1);
	const [itemWidth, setItemWidth] = useState(0);
	const [isHovered, setIsHovered] = useState(false);

	const carouselRef = useRef();

	const realIndex = (index - 1 + hotelList.length) % hotelList.length;

	const measureWidth = () => {
		if (carouselRef.current) {
			const items = carouselRef.current.children;

			if (items.length > 0) {
				const first = items[0];
				const style = window.getComputedStyle(first);

				const width = first.offsetWidth;
				const gap = parseFloat(
					window.getComputedStyle(carouselRef.current).gap || 0,
				);

				setItemWidth(width + gap);
			}
		}
	};

	useEffect(() => {
		setTimeout(measureWidth, 100);
		window.addEventListener("resize", measureWidth);
		return () => window.removeEventListener("resize", measureWidth);
	}, []);

	// infinite loop fix (NO animation glitch)
	useEffect(() => {
		if (index === 0) {
			setTimeout(() => {
				setIndex(hotelList.length);
			}, 0);
		}

		if (index === hotelList.length + 1) {
			setTimeout(() => {
				setIndex(1);
			}, 0);
		}
	}, [index]);

	// auto slide
	useEffect(() => {
		if (isHovered) return;

		const interval = setInterval(() => {
			setIndex((prev) => prev + 1);
		}, 10000);

		return () => clearInterval(interval);
	}, [isHovered]);

	return (
		<div className="carousel-container">
			<div className="carousel-title-container">
				<motion.div
					className="carousel-title"
					initial={{
						opacity: 0,
						filter: "blur(12px)",
						letterSpacing: "10px",
					}}
					whileInView={{
						opacity: 1,
						filter: "blur(0px)",
						letterSpacing: "0px",
					}}
					viewport={{
						once: true,
						amount: 0.6,
					}}
					transition={{
						duration: 1.4,
						ease: [0.22, 1, 0.36, 1],
					}}
				>
					Your{" "}
					<motion.span
						style={{ color: "#A60807", display: "inline-block" }}
						initial={{
							opacity: 0,
						}}
						whileInView={{
							opacity: 1,
						}}
						viewport={{ once: true }}
						transition={{
							delay: 0.4,
							duration: 0.8,
						}}
					>
						Next Getaway
					</motion.span>{" "}
					Starts Here
				</motion.div>
				<div className="title-text">
					Discover the latest travel experiences curated for you.
				</div>
			</div>

			{/* HOTEL NAMES */}
			<div className="carousel-ticket-container">
				<div className="carousel-hotel-list">
					{hotelList.map((hotel, i) => (
						<div
							key={i}
							className={`hotel-list-name ${i === realIndex ? "active" : ""}`}
							onClick={() => setIndex(i + 1)}
						>
							{hotel.hotelName}
						</div>
					))}
				</div>
			</div>

			{/* CAROUSEL */}
			<div
				className="hotel-ticket-container"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<motion.div
					ref={carouselRef}
					className="hotel-ticket-carousel"
					animate={{
						x: itemWidth
							? `calc(50% - ${itemWidth * index}px - ${itemWidth / 2}px)`
							: 0,
					}}
					transition={{
						type: "spring",
						stiffness: 70,
						damping: 20,
					}}
				>
					{extendedList.map((hotel, i) => (
						<motion.div
							className={`hotel-ticket ${i === index ? "active" : ""}`}
							key={i}
							animate={{
								scale: i === index ? 1 : 0.92,
								opacity: i === index ? 1 : 0.45,
								y: i === index ? 0 : 12,
							}}
							transition={{
								duration: 0.6,
								ease: [0.22, 1, 0.36, 1],
							}}
							whileHover={
								i === index
									? {
											y: -6,
										}
									: {}
							}
						>
							<div className="hotel-image">
								<motion.img
									className="property-img"
									src={hotel.img}
									alt=""
									initial={{ scale: 1.1 }}
									animate={{
										scale: i === index ? 1 : 1.05,
									}}
									transition={{
										duration: 0.8,
									}}
								/>
							</div>

							<AnimatePresence mode="wait">
								<motion.div
									className="ticket-text"
									key={hotel.hotelName}
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
										duration: 0.5,
									}}
								>
									<div className="hotel-title">
										<span className="ticket-hotelName">{hotel.hotelName}</span>
										<span className="ticket-hotelPrice">
											{hotel.price}/- per night
										</span>
									</div>

									<div className="hotel-text">{hotel.text}</div>

									<motion.button
										className="hotelBookBtn"
										whileHover={{
											scale: 1.04,
											y: -2,
										}}
										whileTap={{
											scale: 0.98,
										}}
									>
										Book Now
									</motion.button>
								</motion.div>
							</AnimatePresence>
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* DOTS */}
			<div className="dots">
				{hotelList.map((_, i) => (
					<span
						key={i}
						className={`dot ${i === realIndex ? "active" : ""}`}
						onClick={() => setIndex(i + 1)}
					/>
				))}
			</div>
		</div>
	);
};

export default HotelCarousel;
