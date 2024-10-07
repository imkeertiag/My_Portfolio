import './Footer.css'
// all the images are in the assests and imported as path to a variable give below
import footlogo1 from "../assets/Footlogo1.png" ;
import footlogo2 from "../assets/Footlogo2.png" ;
import footlogo3 from "../assets/Footlogo3.png" ;
import footlogo4 from "../assets/Footlogo4.png" ;
import logo from "../assets/Logo.svg"
import rec1 from "../assets/Rectangle1.jpg" ;
import rec2 from "../assets/Rectangle2.png" ;
import rec3 from "../assets/Rectangle3.png" ;
import linkedin from "../assets/LinkedIn.jpg" ;
import instagram from "../assets/Instagram.jpg" ;
import facebook from "../assets/Facebook.jpg" ;


export const Footer = () => {
  return (
    <>
    {/* this is the footer which will be visible in every page and hence is responsive */}
    <div className="footer">
    <footer className="footer-container">
      <div className="footer-logo">
        <img src={footlogo1} alt="footer logo" />
        <img src={footlogo3} alt="footer logo" />
        <img src={footlogo2} alt="footer logo" />
        <img src={footlogo4} alt="footer logo" />
      </div>

      <div className="logo"><img src={logo} alt="Logo" /></div>

      <div className="footer-content">
        
        <div className="footercol1">
          <div className="rating-item">
            <img src= {rec1} alt="Rating 1" />
            <p>4.5/5 Rating on Lorem</p>
          </div>
          <div className="rating-item">
            <img src={rec2} alt="Rating 2" />
            <p>9/10 Rating on Ipsum</p>
          </div>
          <div className="rating-item">
            <img src={rec3} alt="Rating 3" />
            <p>4.5/5 Rating on Dorel</p>
          </div>
        </div>

        <div className="footer-links">
          <div className="quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Skills</li>
              <li>Education</li>
              <li>Projects</li>
              <li>Recommendations</li>
            </ul>
          </div>

          <div className="portfolio-links">
            <h4>Portfolio</h4>
            <ul>
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Website Design</li>
              <li>Machine Learning</li>
              <li>Problem Solving & DSA</li>
            </ul>
          </div>

          <div className="connect-links">
            <h4>Connect</h4>
            <ul>
              <li> <img src={linkedin} alt="Linked In" /></li>
              <li><img src={instagram} alt="Instagram" /></li>
              <li><img src={facebook} alt="Facebook" /></li>
            </ul>
          </div>
        </div>
      </div>


      <div className="footer-bottom">
        <p>© 2024 Copyright, All Rights Reserved</p>
      </div>
    </footer>
    </div>
    </>
  );
};