import { useState } from 'react';
import './App.css';
import LogoStyle from './components/LogoStyle';

// eslint-disable-next-line react/prop-types
const Modal = ({ id, onClose, children, isOpen }) => {
  const closingModal = () => {
    onClose(id);
  };

  return (
    <div id={id} className="modal" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-content">
        <span className="close" onClick={closingModal}>&times;</span>
        {children}
      </div>
    </div>
  );
};

const App = () => {
  const [openModalId, setOpenModalId] = useState('');

  const openModal = (modalId) => {
    setOpenModalId(modalId);
  };

  const closeModal = (modalId) => {
    console.log("close modal called")
    if (openModalId === modalId) {
      setOpenModalId('');
    }
  };

  return (
    <div className="App">
      <header id="head">
        <nav id="menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <h1>Riyan Mustafa</h1>
        <div className="social-buttons">
          <a href="https://github.com/RiMustafa" target="_blank" rel="noopener noreferrer" className="social-button github"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/riyan-mustafa-ab1207273/" target="_blank" rel="noopener noreferrer" className="social-button linkedin"><i className="fa-brands fa-linkedin"></i></a>
          <a href="/myresume2.pdf" className="social-button linkedin" download ><i className="fa-solid fa-file"></i></a>
        </div>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>I'm a freelance web developer and recent college graduate with a degree in Computer Science! I am passionate about bringing a modern look and improved performance to the web through the use of frameworks like React and Vue. Although my professional focus has tailored toward the web, during my degree I accrued skills that allow me to create applications with a multitude of technologies and languages. Most recently I have been developing games with Python and building full-stack applications with relational based databases (specifically PostgreSQL).</p>
      </section>

<section id="projects">
  <h2>Projects</h2>
  <div className="project-grid">
    <div className="proj-1">
      <div className="overlay">
        <a className="learn-more-btn" onClick={() => openModal('modal1')}>Learn More</a>
      </div>
    </div>
    <div className="proj-2">
      <div className="overlay">
        <a className="learn-more-btn" onClick={() => openModal('modal2')}>Learn More</a>
      </div>
    </div>
    <div className="proj-3">
      <div className="overlay">
        <a className="learn-more-btn" onClick={() => openModal('modal3')}>Learn More</a>
      </div>
    </div>
    <div className="proj-4">
      <div className="overlay">
        <a className="learn-more-btn" onClick={() => openModal('modal4')}>Learn More</a>
      </div>
    </div>
  </div>
</section>


      <Modal id="modal1" onClose={closeModal} isOpen={openModalId === 'modal1'}>
        <p>The Greater Cleveland Partnership (GCP) is an organization dedicated to helping high school and college students prepare for their careers. In line with this mission, they required a job-search tool to assist their students in finding employment opportunities. Previous iterations of the app were primarily focused on Northeast Ohio. However, the main goal of the project was to enhance the searching potential by expanding the tool to include other locations and adding more detailed search parameters. This expansion aimed to provide students with a broader range of job opportunities and better match their skills and preferences with available positions.</p>
      </Modal>

      <Modal id="modal2" onClose={closeModal} isOpen={openModalId === 'modal2'}>
        <p>My personal portfolio website serves as a comprehensive project showcasing information about me and my ongoing and completed projects. It features details about my education, highlighting the schools I attended, as well as my proficiency in various programming languages. Through this platform, I aim to provide visitors with insights into my background, skills, and the projects I &apos; m involved in, creating a centralized hub for my professional endeavors.</p>
      </Modal>

      <Modal id="modal3" onClose={closeModal} isOpen={openModalId === 'modal3'}>
        <p>Project 3 details...</p>
      </Modal>

      <Modal id="modal4" onClose={closeModal} isOpen={openModalId === 'modal4'}>
        <p>My GoLang currency converter efficiently converts between currencies using pre-defined exchange rates. It calculates conversions accurately based on user input, ensuring reliability and precision. Error handling mechanisms are in place to handle any unexpected scenarios, providing a robust user experience. (included in Github)</p>
      </Modal>

      <section id="education">
        <h2>Education</h2>
        <div className="education-item">
          <img src="CSU.png" alt="Cleveland State University Logo"/>
          <div>
            <h3>Bachelors in Computer Science</h3>
            <p>Cleveland State University, 2024</p>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2>My Skills</h2>
        <div className="skills">
          <div className="skill">
              <h1>Web Development</h1>
            <div className="skilllist">
            <LogoStyle 
            faname="fa-brands fa-react"
            name="react" />
            <LogoStyle 
            faname="fa-brands fa-html5"
            name="HTML" />
            <LogoStyle 
            faname="fa-brands fa-js"
            name="JavaScript" />
            <LogoStyle 
            faname="fa-brands fa-css3-alt"
            name="CSS" />
            </div>
          </div>
          <div className="skill">
            <h1>Backend Development</h1>
            <div className="skilllist">
            <LogoStyle 
            faname="fa-brands fa-node"
            name="Node.js" />
            <LogoStyle 
            faname="fa-brands fa-python"
            name="Python" />
            <LogoStyle 
            faname="fa-brands fa-c"
            name="C" />
            <LogoStyle 
            faname="fa-brands fa-java"
            name="Java" />
          </div>
          </div>
          <div className="skill">
            <h1>Database</h1>
            <div className="skilllist">
            <LogoStyle 
            faname="fa-brands fa-docker"
            name="Docker" />
            <LogoStyle 
            faname="fa-solid fa-database"
            name="MySQL" />
          </div>
          </div>
          <div className="skill">
            <h1>Other</h1>
            <div className="skilllist">
            <LogoStyle 
            faname="fa-brands fa-github"
            name="Github" />
             <LogoStyle 
            faname="fa-brands fa-bitbucket"
            name="Bitbucket" />
            <LogoStyle 
            faname="fa-solid fa-code"
            name="VSC" />
            
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit">Submit</button>
        </form>
      </section>

      <footer>
        <p>© 2024 Riyan Mustafa</p>
      </footer>
    </div>
  );
};

export default App;
