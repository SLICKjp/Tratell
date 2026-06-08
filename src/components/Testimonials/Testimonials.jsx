import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Testimonials.css";
import quote from "../../assets/testimonial/quote.png";
import arrow_left from "../../assets/slider/arrow_left.png";
import arrow_right from "../../assets/slider/arrow_right.png";

const testimonials = [
	{
		name: "Ramlata Agarwal",
		role: "Traveller",
		text: "Amazing area of the hotel with a superb garden, great service by the staff and are very very co-operative. The rooms are quite comfortable and affordable. The food is quite good too. Overall, this hotel exceeded our expectations. Highly recommended for a mid-budget staycation.",
		avatar: "https://i.pravatar.cc/100?img=1",
	},
	{
		name: "Amit Sharma",
		role: "Traveller",
		text: "Beautiful experience overall. The ambiance and service made our trip memorable. Would definitely visit again.",
		avatar: "https://i.pravatar.cc/100?img=2",
	},
	{
		name: "Sneha Kapoor",
		role: "Traveller",
		text: "Loved the peaceful environment and attention to detail. Perfect place to relax and unwind.",
		avatar: "https://i.pravatar.cc/100?img=3",
	},
];

export default function Testimonials() {
	const [[index, direction], setIndex] = useState([0, 0]);

	const paginate = (dir) => {
		setIndex(([prev]) => {
			let next = prev + dir;
			if (next < 0) next = testimonials.length - 1;
			if (next >= testimonials.length) next = 0;
			return [next, dir];
		});
	};

	const t = testimonials[index];

	const variants = {
		enter: (dir) => ({ x: dir > 0 ? 50 : -50, opacity: 0 }),
		center: { x: 0, opacity: 1 },
		exit: (dir) => ({ x: dir > 0 ? -50 : 50, opacity: 0 }),
	};

	return (
		<div className="testimonial-container">
			<motion.h2
				className="testimonial-heading"
				initial={{
					opacity: 0,
					filter: "blur(10px)",
					letterSpacing: "8px",
				}}
				whileInView={{
					opacity: 1,
					filter: "blur(0px)",
					letterSpacing: "0px",
				}}
				viewport={{
					once: true,
					amount: 0.7,
				}}
				transition={{
					duration: 1.4,
					ease: [0.22, 1, 0.36, 1],
				}}
			>
				Travel Stories with <span style={{ color: "#A60807" }}>Tratell</span>
			</motion.h2>
			<motion.p
				className="testimonial-sub"
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
				}}
				transition={{
					delay: 0.3,
					duration: 0.8,
				}}
			>
				Experiences that reflect the heart of every journey.
			</motion.p>

			<div className="testimonial-arrows">
				<button onClick={() => paginate(-1)}>
					<img src={arrow_left} alt="" srcset="" />
				</button>
				<button onClick={() => paginate(1)}>
					<img src={arrow_right} alt="" srcset="" />
				</button>
			</div>

			<motion.div
				className="testimonial-content"
				initial={{
					opacity: 0,
					y: 40,
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
					ease: [0.22, 1, 0.36, 1],
				}}
			>
				<motion.span
					className="quote left"
					initial={{
						opacity: 0,
						scale: 0.8,
					}}
					whileInView={{
						opacity: 1,
						scale: 1,
					}}
					viewport={{ once: true }}
					transition={{
						delay: 0.5,
						duration: 1,
					}}
				>
					<img src={quote} />
				</motion.span>
				<motion.span
					className="quote right"
					initial={{
						opacity: 0,
						scale: 0.8,
					}}
					whileInView={{
						opacity: 1,
						scale: 1,
					}}
					viewport={{ once: true }}
					transition={{
						delay: 0.7,
						duration: 1,
					}}
				>
					<img src={quote} />
				</motion.span>

				<AnimatePresence custom={direction} mode="wait">
					<motion.div
						key={index}
						custom={direction}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{ duration: 0.4 }}
					>
						<p className="testimonial-text">{t.text}</p>

						<div className="testimonial-user">
							<p className="name">{t.name}</p>
							<p className="role">{t.role}</p>
						</div>
					</motion.div>
				</AnimatePresence>
			</motion.div>

			<motion.div
				className="testimonial-avatars"
				initial={{
					opacity: 0,
					y: 15,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				viewport={{
					once: true,
				}}
				transition={{
					delay: 0.8,
					duration: 0.8,
				}}
			>
				{testimonials.map((item, i) => (
					<img
						key={i}
						src={item.avatar}
						onClick={() => setIndex([i, i > index ? 1 : -1])}
						className={i === index ? "active" : ""}
					/>
				))}
			</motion.div>
		</div>
	);
}
