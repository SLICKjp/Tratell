import React from "react";
import "./Services.css";
import ticket from "../../assets/services/Ticket.png";
import Car from "../../assets/services/Car.png";
import Hotel from "../../assets/services/Hotel.png";
import Bus from "../../assets/services/Bus.png";

const Services = () => {
	return (
		<div className="services-section">
			<div className="service-header">
				<span className="service-main">
					Travel Planning
					<span style={{ color: "#A60807" }}> Made Simple </span>
				</span>
				<span className="service-sub">
					We take care of the details so you can focus on the experience.
				</span>
			</div>
			<div className="service-container">
				<div className="service">
					<img className="service-icon" src={ticket} />
					<div className="service-heading">TOUR BOOKING</div>
					<div className="service-text">
						Run your tours like you’re always on vacation. Our tour operator
						comes with a full range of features that help you take bookings and
						provide our guests the freedom to book in their time zone.
					</div>
				</div>
				<div className="service">
					<img className="service-icon" src={Bus} />
					<div className="service-heading">BUS BOOKING</div>
					<div className="service-text">
						Now your bus booking is one call away with Travel Genie. We provide
						bus booking for all major and minor routs in India with AC, Non-Ac,
						Sleeper Coach, Volo, Mercedes Benz.
					</div>
				</div>
				<div className="service">
					<img className="service-icon" src={Hotel} />
					<div className="service-heading">HOTEL BOOKING</div>
					<div className="service-text">
						Tratell makes hotel booking easier and simpler. Browse widest
						selection of domestic properties & get the best deals on cheap,
						budget & star hotels.
					</div>
				</div>
				<div className="service">
					<img className="service-icon" src={Car} />
					<div className="service-heading">CAR RENTAL</div>
					<div className="service-text">
						With our 24/7 support, you may avail of our economical car rental
						services anytime anywhere as per your convenience. Rent a car from
						planning a trip outside the city to moving around inside.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
