import React from 'react';
import "./hero.css";
import Navbar from "../Navbar/Navbar";
const Hero = () => {
    return (
        <div className="homepage-container">
            <Navbar />
            <div className="hero-img-container"></div>

            <div className="hero-text-container">
                <h2 className="hero-text-title">TRATELL</h2>
                <p className="hero-text-subtitle">Tell Your Travel Story</p>

                <div className="search-container">
                    <div className="search-box">

                        <div className="field">
                            <label>Destination</label>
                            <select>
                                <option>Select</option>
                                <option>Paris</option>
                                <option>Dubai</option>
                            </select>
                        </div>

                        <div className="field">
                            <label>Category</label>
                            <select>
                                <option>Select</option>
                                <option>Adventure</option>
                                <option>Luxury</option>
                            </select>
                        </div>

                        <div className="field">
                            <label>Price</label>
                            <select>
                                <option>Select</option>
                                <option>$500 - $1000</option>
                                <option>$1000+</option>
                            </select>
                        </div>

                        <div className="field">
                            <label>Date</label>
                            <input type="date" />
                        </div>

                        <button className="search-btn">View Offers</button>

                    </div>
                </div>


            </div>
        </div>

    );
}

export default Hero;