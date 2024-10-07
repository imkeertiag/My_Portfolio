import '../pages/Home.css'
import { useLocation } from 'react-router-dom';
import image1 from "../assets/Image1.jpg";
import image2 from "../assets/Image2.jpg";
import image3 from "../assets/Image3.jpg";
import image4 from "../assets/Image4.jpg";
import image5 from "../assets/Image5.jpg";
import image6 from "../assets/Image6.jpg";
export const Projects = () => {
  
// using location & isProjectPage operator to give space to the '/project' route so that content do not hide in the navbar and space is only visible to project page not the project section of the home page
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects';
  
  return (
    <>
    <div className="projects" >
    <div className={`projects-content ${isProjectsPage ? 'projects-page' : ''}`}>
      
    <h2>Projects</h2>
    <p>Results-driven full-stack developer with a track record of building scalable, efficient and </p> <p>user-friendly applications that drive user engagement.</p>
    <div className="project-grid">


       {/* Project 1 */}
       <div className="project-card">
        <div className="image-container">
          <img src={image1} alt="Project 1" className="project-image" />
        </div>
        <div className="project-info">
          <h3>How To Make Flyer Design</h3>
          <p>Lorem Ipsum Dolor Sit Amet, Consec Adipisicing Elit Awd And Lorem Ipsum...</p>
          <div className="tech-stack">
            <span className="tech">Typescript</span>
            <span className="tech">ReactJs</span>
            <span className="tech">NextJs</span>
            <span className="tech">CSS</span>
            <span className="tech">HTML</span>
            <span className="tech">MongoDB</span>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="project-card">
        <div className="image-container">
          <img src={image2} alt="Project 2" className="project-image" />
        </div>
        <div className="project-info">
          <h3>How To Make Flyer Design</h3>
          <p>Lorem Ipsum Dolor Sit Amet, Consec Adipisicing Elit Awd And Lorem Ipsum...</p>
          <div className="tech-stack">
            <span className="tech">Typescript</span>
            <span className="tech">ReactJs</span>
            <span className="tech">NextJs</span>
            <span className="tech">CSS</span>
          
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="project-card">
        <div className="image-container">
          <img src={image3} alt="Project 3" className="project-image" />
        </div>
        <div className="project-info">
          <h3>How To Make Flyer Design</h3>
          <p>Lorem Ipsum Dolor Sit Amet, Consec Adipisicing Elit Awd And Lorem Ipsum...</p>
          <div className="tech-stack">
            <span className="tech">Typescript</span>
            <span className="tech">ReactJs</span>
            <span className="tech">NextJs</span>
            <span className="tech">CSS</span>
            <span className="tech">HTML</span>
            <span className="tech">MongoDB</span>
          </div>
        </div>
      </div>

      {/* Project 4 */}
      <div className="project-card">
        <div className="image-container">
          <img src={image4} alt="Project 4" className="project-image" />
        </div>
        <div className="project-info">
          <h3>How To Make Flyer Design</h3>
          <p>Lorem Ipsum Dolor Sit Amet, Consec Adipisicing Elit Awd And Lorem Ipsum...</p>
          <div className="tech-stack">
            <span className="tech">Typescript</span>
            <span className="tech">ReactJs</span>
            <span className="tech">NextJs</span>
            <span className="tech">CSS</span>
            <span className="tech">HTML</span>
            <span className="tech">MongoDB</span>
          </div>
        </div>
      </div>

      {/* Project 5 */}
      <div className="project-card">
        <div className="image-container">
          <img src={image5} alt="Project 5" className="project-image" />
        </div>
        <div className="project-info">
          <h3>How To Make Flyer Design</h3>
          <p>Lorem Ipsum Dolor Sit Amet, Consec Adipisicing Elit Awd And Lorem Ipsum...</p>
          <div className="tech-stack">
            <span className="tech">Typescript</span>
            <span className="tech">ReactJs</span>
            <span className="tech">NextJs</span>
            <span className="tech">CSS</span>
            <span className="tech">HTML</span>
            <span className="tech">MongoDB</span>
          </div>
        </div>
      </div>

      {/* Project 6 */}
      <div className="project-card">
        <div className="image-container">
          <img src={image6} alt="Project 6" className="project-image" />
        </div>
        <div className="project-info">
          <h3>How To Make Flyer Design</h3>
          <p>Lorem Ipsum Dolor Sit Amet, Consec Adipisicing Elit Awd And Lorem Ipsum...</p>
          <div className="tech-stack">
            <span className="tech">Typescript</span>
            <span className="tech">ReactJs</span>
            <span className="tech">NextJs</span>
            <span className="tech">CSS</span>
            <span className="tech">HTML</span>
            <span className="tech">MongoDB</span>
          </div>
        </div>
      </div>
    </div>
    </div>
   </div>
    </>
  );
};