import React from "react";
import "./Services.css";
import { motion } from "framer-motion";

import ticket from "../../assets/services/Ticket.png";
import Car from "../../assets/services/Car.png";
import Hotel from "../../assets/services/Hotel.png";
import Bus from "../../assets/services/Bus.png";

const cardVariants = {
	hidden: {
		opacity: 0,
		y: 40,
	},
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			delay: i * 0.15,
			ease: [0.22, 1, 0.36, 1],
		},
	}),
};

const Services = () => {
	const services = [
		{
			icon: ticket,
			title: "TOUR BOOKING",
			text: "Run your tours like you're always on vacation. Our tour operator comes with a full range of features that help you take bookings and provide guests the freedom to book in their time zone.",
		},
		{
			icon: Bus,
			title: "BUS BOOKING",
			text: "Now your bus booking is one call away with Travel Genie. We provide bus booking for all major and minor routes in India with AC, Non-AC, Sleeper Coach and luxury options.",
		},
		{
			icon: Hotel,
			title: "HOTEL BOOKING",
			text: "Tratell makes hotel booking easier and simpler. Browse a wide selection of domestic properties and get the best deals on budget and premium hotels.",
		},
		{
			icon: Car,
			title: "CAR RENTAL",
			text: "With our 24/7 support, you may avail economical car rental services anytime anywhere as per your convenience.",
		},
	];

	return (
		<section className="services-section">
			<motion.div
				className="service-header"
				initial={{
					opacity: 0,
					y: 20,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				viewport={{
					once: true,
					amount: 0.4,
				}}
				transition={{
					duration: 1,
				}}
			>
				<motion.span
					className="service-main"
					initial={{
						opacity: 0,
						letterSpacing: "12px",
						filter: "blur(8px)",
					}}
					whileInView={{
						opacity: 1,
						letterSpacing: "0px",
						filter: "blur(0px)",
					}}
					viewport={{ once: true }}
					transition={{
						duration: 1.4,
						ease: [0.22, 1, 0.36, 1],
					}}
				>
					Travel Planning
					<span style={{ color: "#A60807" }}> Made Simple</span>
				</motion.span>

				<motion.span
					className="service-sub"
					initial={{
						opacity: 0,
					}}
					whileInView={{
						opacity: 1,
					}}
					viewport={{ once: true }}
					transition={{
						delay: 0.3,
						duration: 1,
					}}
				>
					We take care of the details so you can focus on the experience.
				</motion.span>
			</motion.div>

			<div className="service-container">
				{services.map((service, index) => (
					<motion.div
						key={service.title}
						className="service"
						custom={index}
						variants={cardVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{
							once: true,
							amount: 0.25,
						}}
						whileHover={{
							y: -12,
							scale: 1.02,
						}}
					>
						<motion.img
							className="service-icon"
							src={service.icon}
							alt={service.title}
							animate={{
								y: [0, -6, 0],
							}}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
								delay: index * 0.3,
							}}
						/>

						<div className="service-heading">{service.title}</div>

						<div className="service-text">{service.text}</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Services;
