import './footer.css';
const footer_copyright_year=new Date().getFullYear();
const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className="footer-above">
            <div>
                <h3 className='footer-column-header'>About Us</h3>
                <p className='footer-aboutus-text'>Tratell is authorised agent for Hotel, Bus, Train, Flight booking in Mumbai. Our vision is to give a new face to the tourisum industry. Since our inception traveller comfort was our top priority. We are authorised booking agents of previlage hotels and travel agencies.</p>
            </div>
            <div>
                <h3 className='footer-column-header'>Tratell</h3>
                <ul>
                    <li>About Us</li>
                    <li>Our Offer</li>
                    <li>Customer Protection</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <h3 className='footer-column-header'>Helpful Links</h3>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                    <li>Disclaimer</li>
                    <li>Trademark</li>
                </ul>
            </div>
            <div className='footer-column-header'>
                <h3>Contact Us</h3>
                <p className='footer-contact-text'>Our support team is ready to help you 24 X 7 for any Tariff, Packages, Booking, Payments or other queries.</p>
                <p className='footer-contact-no'>+91 9820 233745</p>
                <p className='footer-contact-email'>support@travelgenie.biz</p>
            </div>
            </div>
            <div className="footer-bottom">
                <p>© {footer_copyright_year} Tratell. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer