import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Testimonials.css";
import quote from "../../assets/testimonial/quote.png";

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
			<h2 className="testimonial-heading">
				Travel Stories with <span style={{ color: "#A60807" }}>Tratell</span>
			</h2>
			<p className="testimonial-sub">
				Experiences that reflect the heart of every journey.
			</p>

			<div className="testimonial-arrows">
				<button onClick={() => paginate(-1)}>←</button>
				<button onClick={() => paginate(1)}>→</button>
			</div>

			<div className="testimonial-content">
				<span className="quote left">
					<img src={quote} />
				</span>
				<span className="quote right">
					<img src={quote} />
				</span>

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
			</div>

			<div className="testimonial-avatars">
				{testimonials.map((item, i) => (
					<img
						key={i}
						src={item.avatar}
						onClick={() => setIndex([i, i > index ? 1 : -1])}
						className={i === index ? "active" : ""}
					/>
				))}
			</div>
		</div>
	);
}
