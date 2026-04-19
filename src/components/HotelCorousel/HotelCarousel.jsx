import React, { useState, useEffect, useRef } from "react";
import "./hotel.css";
import { motion } from "framer-motion";
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

	// measure distance between items
	const measureWidth = () => {
		if (carouselRef.current) {
			const items = carouselRef.current.children;

			if (items.length > 1) {
				const first = items[0].getBoundingClientRect();
				const second = items[1].getBoundingClientRect();

				setItemWidth(second.left - first.left);
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
				<div className="carousel-title">
					Your <span style={{ color: "#A60807" }}> Next Getaway </span> Starts
					Here
				</div>
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
							? `calc(50% - ${index * itemWidth}px - ${itemWidth / 2}px)`
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
								opacity: i === index ? 1 : 0.5,
							}}
							transition={{ duration: 0.4 }}
						>
							<div className="hotel-image">
								<img className="property-img" src={hotel.img} alt="" />
							</div>

							<div className="ticket-text">
								<div className="hotel-title">
									<span className="ticket-hotelName">{hotel.hotelName}</span>
									<span className="ticket-hotelPrice">
										{hotel.price}/- per night
									</span>
								</div>

								<div className="hotel-text">{hotel.text}</div>

								<button className="hotelBookBtn">Book Now</button>
							</div>
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
