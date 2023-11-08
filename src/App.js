import React from 'react';
import { Link, Element } from 'react-scroll';


import './App.css';

function App() {
  return (
    <div className="portfolio">
      <header>
        <h1>Ankit Roy Chowdhury</h1>
        <p>BTech 3rd year Student</p>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="about" spy={true} smooth={true} duration={500}>About</Link>
          </li>
          <br></br>
          <br></br>
          <li>
            <Link to="projects" spy={true} smooth={true} duration={500}>Projects</Link>
          </li>
          <br></br>
          <br></br>
          <li>
            <Link to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
          </li>
          <br></br>
          <br></br>
        </ul>
      </nav>


      <Element name="about" className="about-section">
      <h2>About Me</h2>
      <p>I am a passionate and dedicated third-year B.Tech student at Vellore Institute of Technology (VIT), Bhopal, with a fervor for making a meaningful impact in the world of technology. My journey through the realm of academia has been an exciting one, driven by my love for data science, image processing, and OpenCV projects.

As a data science enthusiast, I find solace in the realm of numbers, patterns, and the hidden stories that data can tell. My fascination with this field has led me to explore intricate datasets, dissect complex problems, and derive actionable insights. I believe that data science is not just a tool but a bridge to uncover solutions that can drive change and innovation in various domains.

My journey in the realm of image processing and OpenCV has further ignited my creativity and problem-solving skills. I have had the privilege of working on projects that harness the power of visual data to make a tangible difference. From enhancing image quality to implementing object detection, my exploration in this space has been both exhilarating and enlightening.

Yet, beyond my technical pursuits, I am driven by a deeper purpose. I firmly believe in the potential of technology to address the challenges faced by our society. With a keen interest in developing solutions that serve a larger purpose, I aspire to harness my skills to create something valuable for the betterment of our community.

My journey as a student has been marked by a relentless pursuit of knowledge and a commitment to creating change. I look forward to the countless opportunities and challenges that lie ahead, ready to embrace them with enthusiasm, innovation, and a heart eager to make a difference.

Let's embark on this exciting journey of exploration, learning, and transformation together.</p>
      </Element>

      <Element name="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project">
        <h3>Project 1</h3>
        <p>VR Gaming</p>
        <p>This is a project if a code that is designed to make gaming more interesting. 
           We can use hand gestures to move the car in the straight, backward, left and right direction.
           This is built using open cv, mediapipe, pyautogui and some others modules. Hope you enjoy your racing experience.</p>
           <img src={require('./maxresdefault.jpg')} alt="Project 1" style={{ maxWidth: '300px', height: 'auto' }} />
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>Distributive e-learning</p>
        <p>This project contains the codes for a web development project on Distributive e-learning.
           In this project one can share their notes and can also download the notes shared by other users. A user can also share blogs and articles, which can be read by other users.
           If the usrs find a difficulty in solving any question they can access LearnBot.</p>
        <img src={require('./download.png')} alt="Project 2" style={{ maxWidth: '500px', height: 'auto' }} />

      </div>
      
      <div className="project">
        <h3>Project 3</h3>
        <p>Eye tracking System Using open cv and Mediapipe</p>
        <p>This project contains an eye tracking system implemented with OpenCV and MediaPipe.
           The system utilizes computer vision techniques to detect and track the movement of the user's left eye, providing insights into visual attention distribution.</p>
        <img src={require('./origin.jpg')} alt="Project 3" style={{ maxWidth: '300px', height: 'auto' }} />

      </div>
      </Element>

      <Element name="contact" className="contact-section" style={{ minHeight: '30vh'}}>
      <h2>Contact Me</h2>
      <p>email: ankit2@gmail.com</p>
      <p>Phone no.: 1234567890</p>
      </Element>



      
      <footer>
        <p>&copy; {new Date().getFullYear()} Animesh Banerjee</p>
      </footer>
    </div>
  );
}

export default App;
