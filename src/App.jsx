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

      <section id="about">
        <h2>About Me</h2>
        <p>I'm a freelance web developer and recent college graduate with a degree in Computer Science! I am passionate about bringing a modern look and improved performance to the web through the use of frameworks like React and Vue. Although my professional focus has tailored toward the web, during my degree I accrued skills that allow me to create applications with a multitude of technologies and languages. Most recently I have been developing games with Python and building full-stack applications with relational based databases (specifically PostgreSQL).</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Capstone Project</h3>
          <p>Description of project 1.</p>
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
