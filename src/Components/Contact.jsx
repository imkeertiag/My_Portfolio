import React from "react";
import { useLocation } from 'react-router-dom';
import "./Contact.css";
import loc from "../assets/location.png";
import mob from "../assets/mobile.jpg";
import ema from "../assets/email.jpg";

export const Contact = () => {
    // using location & isContactPage operator to give space to the '/contact' route so that content do not hide in the navbar 
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

    return (
        <>

        <div className={`contacts-content ${isContactPage ? 'contactspace' : ''}`}>

        <div className="contact-page">
            <div className="form-box">
                <h2 className="page-heading">Leave ME Your Info</h2>
                <div className="form-container">
                    <form>
                        <div className="input-group">
                            <label>Your Full Name (Required)</label>
                            <input type="text" required />
                        </div>
                        <div className="input-group">
                            <label>Your Email (Required)</label>
                            <input type="email" required />
                        </div>
                        <div className="input-group">
                            <label>Subject</label>
                            <input type="text" />
                        </div>
                        <div className="input-group">
                            <label>Your Message</label>
                            <textarea rows="5"></textarea>
                        </div>
                        <button className="form-btn" type="submit">SEND MESSAGE</button>
                    </form>
                </div>
            </div>

            <div className="contact-container">
                <div className="contact-heading">
                    <h2>Contact Information</h2>
                    <div className="info-cards">
                        <div className="info-card">
                            <div className="icon">
                                <div className="circle">
                                    <img src={loc} alt="location" />
                                </div>
                            </div>

                            <div className="info-text">
                                <p>
                                    <span className="left">Country: </span>
                                    <span className="right">Bangladesh</span>
                                </p>

                                <p>
                                    <span className="left">City:</span>
                                    <span className="right">Dhaka</span>
                                </p>

                                <p>
                                    <span className="left">Street:</span>
                                    <span className="right">35 Vhatara, Badda</span>
                                </p>

                            </div>
                        </div>
                        <div className="info-card">
                        <div className="icon">
                                <div className="circle">
                                    <img src={mob} alt="location" />
                                </div>
                            </div>
                            <div className="info-text">
                                <p>
                                    <span className="left">Email:</span>
                                    <span className="right">Youremail@Gmail.Com</span>

                                </p>

                                <p>
                                    <span className="left">Skype:</span>
                                    <span className="right"> @Yourusername</span>

                                </p>
                                <p>
                                    <span className="left">Telegram:</span>
                                    <span className="right">@Yourusername</span>

                                </p>
                            </div>
                        </div>
                        <div className="info-card">
                        <div className="icon">
                                <div className="circle">
                                    <img src={ema} alt="location" />
                                </div>
                            </div>
                            <div className="info-text">
                                <p>
                                    <span className="left">Support Services:</span>
                                    <span className="right">15369</span>
                                </p>
                                <p>
                                    <span className="left">Office:</span>
                                    <span className="right">+58 (021)356 587 235</span>
                                </p>
                                <p>
                                    <span className="left">Personal:</span>
                                    <span className="right">+58 (021)356 587 235</span>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        </>
    );
};

