import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <h1>Riyan Mustafa</h1>
        <p>Aspiring Software Engineer</p>
      </section>

      <section>       
         <div className="social-buttons">
          <a href="https://github.com/RiMustafa" target="_blank" rel="noopener noreferrer" className="social-button github">
            <img src={githubLogo} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/riyan-mustafa-ab1207273/" target="_blank" rel="noopener noreferrer" className="social-button linkedin">LinkedIn</a>
        </div>
        </section>

      <section id="about">
        <h2>About Me</h2>
        <p>I'm a freelance web developer and recent college graduate with a degree in Computer Science! I am passionate about bringing a modern look and improved performance to the web through the use of frameworks like React and Vue. Although my professional focus has tailored toward the web, during my degree I accrued skills that allow me to create applications with a multitude of technologies and languages. Most recently I have been developing games with Python and building full-stack applications with relational based databases (specifically PostgreSQL).</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Capstone Project</h3>
          <p>In a recent project, I collaborated with the Greater Cleveland Partnership (GCP) to bolster the career readiness of high school and college students. GCP, an organization dedicated to economic development in the Cleveland area, sought to provide students with a job-search tool tailored to their needs. Previous iterations of the tool had been confined to Northeast Ohio, prompting our efforts to expand its reach and functionality. Our primary goal was to enhance the tool's efficacy by incorporating additional geographical areas and refining search parameters. This expansion aimed to empower students with a comprehensive platform to navigate their career paths effectively, aligning with GCP's mission to foster growth and opportunity in the region.</p>
        </div>
        <div className="project">
          <h3>TBD</h3>
          <p>Description of project TBD</p>
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
