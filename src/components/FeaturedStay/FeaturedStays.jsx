import { useState } from 'react';
import { motion } from "framer-motion";
import './featuredstays.css';

import Hotel from "../../assets/slider/hotel.png";
import Hero from "../../assets/hero/heroimg.png";
import Footer from "../../assets/footer/footer_bg.png";

const slides = [
  {
    id: 1,
    image: Hotel,
    title: "Parkyard",
    subtitle: "Nature Resort",
    description:
      "Parkyard Nature Resort welcomes you with water breeze fountain & spacious car parking. It is located in the heart of nature for relaxing your mind & body."
  },
  {
    id: 2,
    image: Hero,
    title: "Ocean Bliss",
    subtitle: "Beach Resort",
    description:
      "Relax by the ocean with premium comfort and scenic views."
  },
  {
    id: 3,
    image: Footer,
    title: "Mountain Escape",
    subtitle: "Hill Retreat",
    description:
      "Find peace and tranquility surrounded by mountains."
  }
];

const FeaturedStays = () => {
  const [index, setIndex] = useState(1);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className='featured-stays-container'>


      <div className="featured-stays-title-container">
        <div className="featured-stays-title">
          <h1>
            <span className="primary-text">Handpicked Stays</span><br />
            <span className="secondary-text">For You</span>
          </h1>
        </div>

        <div className="featured-stays-body">
          Stay with trusted hotels known for exceptional comfort, warm hospitality, and memorable experiences—carefully selected to make every journey feel special.
        </div>
      </div>

   
      <div className="slider-arrows">
        <span onClick={prevSlide}>←</span>
        <span onClick={nextSlide}>→</span>
      </div>

   
      <div className="slider-window">
        <motion.div
          className="slider-track"
          animate={{
            x: `calc(50% - ${index * 480}px - 225px)`
          }}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 25
          }}
        >
          {slides.map((slide, i) => (
            <div
              className={`slide ${i === index ? "active" : ""}`}
              key={slide.id}
            >
              <img src={slide.image} alt="" />

              {i === index && (
                <div className="hotel-details">
                  <h3 className="hotel-name">{slide.title}</h3>
                  <h4 className="hotel-type">{slide.subtitle}</h4>
                  <p className="hotel-description">
                    {slide.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default FeaturedStays;