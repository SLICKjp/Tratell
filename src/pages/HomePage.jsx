
import Navbar from '../components/Navbar/Navbar'

import './homepage.css';
const HomePage = () => {
    return (
        <div className='homepage-container'>
            <Navbar />
            <div className='hero-img-container'></div>

        <div className="hero-text-container">
            <h2 className='hero-text-title'>TRATELL</h2>
            <p className='hero-text-subtitle'>Tell Your Travel Story</p>
        </div>                              
        
        </div>
    )
}

export default HomePage