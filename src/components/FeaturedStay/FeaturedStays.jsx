import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import './featuredstays.css';

import Hotel from "../../assets/slider/hotel.png";
import Hero from "../../assets/hero/heroimg.png";
import Footer from "../../assets/footer/footer_bg.png";

import arrow_left from "../../assets/slider/arrow_left.png";
import arrow_right from "../../assets/slider/arrow_right.png";

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


const repeatedSlides = Array(200)
  .fill(slides)
  .flat();

const middleIndex =
  Math.floor(repeatedSlides.length / 2);

const FeaturedStays = () => {

  const [index, setIndex] = useState(middleIndex);


  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIndex((prev) => prev - 1);
  };


  const handleAnimationComplete = () => {

    if (
      index < slides.length * 10 ||
      index >
      repeatedSlides.length - (slides.length * 10)
    ) {

      setIndex(middleIndex);

    }

  };

  return (

    <section className='featured-stays-container'>


      <div className="featured-stays-title-container">

        <div className="featured-stays-title">

          <h1>
            <span className="primary-text">
              Handpicked Stays
            </span>

            <br />

            <span className="secondary-text">
              For You
            </span>
          </h1>

        </div>

        <div className="featured-stays-body">
          Stay with trusted hotels known for exceptional comfort, warm hospitality, and memorable experiences—carefully selected to make every journey feel special.
        </div>

      </div>


      <div className="slider-arrows">

        <span onClick={prevSlide}>
          <img src={arrow_left} alt="" />
        </span>

        <span onClick={nextSlide}>
          <img src={arrow_right} alt="" />
        </span>

      </div>


      <div className="slider-window">

        <motion.div
          className="slider-track"

          animate={{
            x: `calc(50% - ${index * 480}px - 225px)`
          }}

          transition={
            hasMounted
              ? {
                type: "spring",
                stiffness: 90,
                damping: 25
              }
              : {
                duration: 0
              }
          }

          onAnimationComplete={handleAnimationComplete}
        >

          {repeatedSlides.map((slide, i) => (

            <div
              className={`slide ${i === index ? "active" : ""
                }`}
              key={`${slide.id}-${i}`}
            >

              <img src={slide.image} alt="" />

              {i === index && (

                <div className="hotel-details">

                  <h3 className="hotel-name">
                    {slide.title}
                  </h3>

                  <h4 className="hotel-type">
                    {slide.subtitle}
                  </h4>

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