import FeaturedStays from "../../components/FeaturedStay/FeaturedStays.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import HotelCarousel from "../../components/HotelCorousel/HotelCarousel.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Services from "../../components/ServicesSection/Services.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";

import "./homepage.css";
const HomePage = () => {
	return (
		<div className="homepage-container">
			<Navbar />
			<div className="hero-img-container"></div>

			<div className="hero-text-container">
				<h2 className="hero-text-title">TRATELL</h2>
				<p className="hero-text-subtitle">Tell Your Travel Story</p>
			</div>
			<Services />
			<FeaturedStays />
			<HotelCarousel />
			<Testimonials />
			<Footer />
		</div>
	);
};

export default HomePage;
