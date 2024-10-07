import './Recommendation.css';
import '../pages/Home.css'
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import pro from '../assets/Profile.jpg';
import pro2 from '../assets/Profile2.jpg';

export const Recommendation = () => {
const [currentIndex, setCurrentIndex] = useState(0);
// using location & isProjectPage operator to give space to the '/recommendations' route so that content do not hide in the navbar 
const location = useLocation();
const isProjectsPage = location.pathname === '/recommendations';

  const slides = [
    {
      id: 1,
      title: "Great Quality!",
      text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
      name: "James Gouse",
      role: "Graphic Designer",
      image: pro,
    },
    {
      id: 2,
      title: "Amazing Work!",
      text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
      name: "Tiana Philips",
      role: "Photographer",
      image: pro2,
    },
    {
      id: 3,
      title: "Great Quality!",
      text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
      name: "Talan Westervelt",
      role: "Business Man",
      image: pro,
    },
    {
      id: 4,
      title: "Fantastic Experience!",
      text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
      name: "Lara James",
      role: "Software Engineer",
      image: pro2,
    },
    {
      id: 5,
      title: "Excellent Service!",
      text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
      name: "Adam Cole",
      role: "Web Developer",
      image: pro,
    },
    {
        id: 6,
        title: "Nice Service!",
        text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
        name: "Knale Cole",
        role: "Android Developer",
        image: pro2,
      }
  ];

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <>
    <div className="projects">
    <div className={`projects-content ${isProjectsPage ? 'projects-page' : ''}`}> 
    <h2>Recommendations</h2>
    <p>Results-driven full-stack developer with a track record of building scalable, efficient and </p> <p>user-friendly applications that drive user engagement.</p>
    </div>
    </div>
    <div className="slider">

    <div className="carousel-container">   
      <div className="carousel-slides" style={{ transform: `translateX(-${currentIndex * 100 / 4.5}%)` }}>
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={slide.id}>
            <div className="carousel-content">
              <div className="stars">★ ★ ★ ★ ★</div>
              <h3>{slide.title}</h3>
              <p>{slide.text}</p>
              <div className="profile">
                <img src={slide.image} alt={slide.name} className="profile-img" />
                <div className="profile-name">
                  <h4>{slide.name}</h4>
                  <span>{slide.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left and right buttons */}
      <button className="left-arrow" onClick={goToPrevious}>❮</button>
      <button className="right-arrow" onClick={goToNext}>❯</button>

      {/* Dots */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
    </div>
    </>
    
  );
};

