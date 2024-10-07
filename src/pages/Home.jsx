import './Home.css';
import { Recommendation } from "../Components/Recommendation";
import { Projects } from '../Components/Projects';
import Homeimg from "../assets/Heroimg.jpg";
import { Contact } from '../Components/Contact';
export const Home = () => {
    return (
        <>
        {/* This the home page or landing page of my portfolio where navbar , footer , project , contact and recommendation all are visible as components ,, the navbar and footer is attached in every page so not included in this file */}
            <div className="home">
                <section className="main">
                    <div className="columns">
                        <div className="left-content">
                            <p>
                                <div className="tag-line">
                                    <h1>I'm Keerti Agarwal </h1>
                                    <h1><span className="yellow-heading">Front-end</span> Developer</h1>
                                </div>
                            </p>
                            <p>
                                <div className="para">
                                    Transforming designs into interactive experiences, I craft responsive interfaces with HTML/CSS, JavaScript, React and Next, delivering seamless interactions.
                                </div>

                            </p>
                            <div className="btn">
                                <a href="/contact">
                                    <button className="btn">HIRE ME<span>&#8594;</span></button>
                                </a>
                            </div>

                        </div>

                        <div className="right-content">
                            <img src={Homeimg} alt="Image" />
                        </div>
                    </div>
                </section>
            </div>


            {/* Projects */}
            <Projects />
            {/* Recommendation */}
            <Recommendation />
            {/* Contact */}
            <Contact />

        </>
    );
};

