import FeaturedStays from "../../components/FeaturedStay/FeaturedStays.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import HotelCarousel from "../../components/HotelCorousel/HotelCarousel.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Services from "../../components/Services/Services.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";

import "./homepage.css";
const HomePage = () => {
	return (
    <>
		  <Hero/>
			<Services />
			<FeaturedStays />
			<HotelCarousel />
			<Testimonials />
			<Footer />
		</>
	);
};

export default HomePage;
