import { useState } from 'react';
import './featuredstays.css';
import Hotel from "../../assets/slider/hotel.png";
import Hero from "../../assets/hero/heroimg.png"
import Footer from "../../assets/footer/footer_bg.png"

const images = [Hotel,Hero,Footer];

const FeaturedStays = () => {
  const [index, setIndex] = useState(1);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className='featured-stays-container'>

      <div className="featured-stays-title-container">
        
        <div className="featured-stays-title">
          <h1>
            <span className="primary-text">Handpicked Stays</span> <br />
            <span className="secondary-text">For You</span>
          </h1>
        </div>

        <div className="featured-stays-body">
          Stay with trusted hotels known for exceptional comfort, warm hospitality, and memorable experiences—carefully selected to make every journey feel special.
        </div>

      </div>

      {/* Arrows */}
      <div className="slider-arrows">
        <span onClick={prevSlide}>←</span>
        <span onClick={nextSlide}>→</span>
      </div>

      {/* Image Slider */}
      <div className="img-slider">

        {/* Left */}
        <img 
          src={images[(index - 1 + images.length) % images.length]} 
          className='side-img' 
          alt="left" 
        />

        {/* Center */}
        <div className="main-img">
          <img src={images[index]} alt="main" />
        </div>

        {/* Right */}
        <img 
          src={images[(index + 1) % images.length]} 
          className='side-img' 
          alt="right" 
        />

      </div>

    </section>
  );
};

export default FeaturedStays;