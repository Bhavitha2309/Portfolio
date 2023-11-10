import React from 'react';
import './App.css'; // Import the CSS file for styling

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>Bhavitha C</h1>
        <p>+91 9390240039| bhavithachakati@gmail.com</p>
      </header>

      <section className="education">
        <h2>EDUCATION</h2>
        <ul>
          <li>
            VELLORE INSTITUTE OF TECHNOLOGY
            <ul>
              <li>Btech in Computer Science</li>
              <li>Chennai, Tamil Nadu</li>
              <li>College of Engineering</li>
              <li>CGPA: 8.64</li>
            </ul>
          </li>
          <br/>
          <li>
            Sri Chaithanya
            <ul>
              <li>Percentage: 97.8%</li>
              <li>Andhra Pradesh, India</li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="education">
        <h2>COURSEWORK</h2>
        <h3>UG</h3>
            <ul>
              <li>Data Structure and Algorithms</li>
              <li>Design and Analysis of Algorithms</li>
              <li>Software Engineering</li>
              <li>Operating System</li>
              <li>Database Management System</li>
              <li>Compiler Design</li>
              <li>Information Security Analysis and Audit</li>
              <li>Computer Architecture and Organization</li>
              <li>Computer Networks</li>
            </ul>
      </section>
      <section className="education">
        <h2>Area of Intrest</h2>
            <ul>
              <li>Data Science</li>
              <li>Networking/Cyber-Sec.</li>
              <li>App Development</li>
              <li>Full-Stack(FrontEnd & BackEnd)</li> 
            </ul>
      </section>
      <section className="education">
        <h2>SKILLS</h2>
            <ul>
              <li>Java</li>
              <li>C,C++</li>
              <li>Python</li>
              <li>Javascript</li>
              <li>Html , Css</li>
              <li>postgre sql </li>
              <li>React,MongoDB,node,Angular,Express</li>
            </ul>
        <section className="education">
          
      </section>
      </section>
      <section className="education">
        <h2>Hobbies</h2>
            <ul>
              <li>Excercise</li>
              <li>Games</li>
              <li>Music</li>
              <li>Walking</li>
              <li>Cooking</li>
              
            </ul>
      </section>
      <section className="education">
        <h2>Languages Known</h2>
            <ul>
              <li>Telugu</li>
              <li>English</li>
            </ul>
      </section>
     
    </div>
  );
};

export default Portfolio;
