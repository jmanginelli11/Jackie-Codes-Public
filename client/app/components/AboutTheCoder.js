import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Header from "./Header";

const AboutTheCoder = () => {
  function changeGrayscale(e) {
    e.target.style.filter = "none";
  }

  function changeBack(e) {
    e.target.style.filter = "grayscale(1)";
  }

  return (
    <div>
      <Header />
      <NavBar />
      <div className="about-container">
        <div className="about-content-container">
          <div className="about-image-container">
            <Link
              to="https://www.linkedin.com/in/jackie-manginelli/"
              target="_blank"
            >
              <img
                src="jackie.png"
                className="about-images"
                height="200px"
                width="200px"
                onMouseOver={changeGrayscale}
                onMouseLeave={changeBack}
              />
              <p>LinkedIn</p>
            </Link>
            <Link to="https://github.com/jmanginelli11" target="_blank">
              <img
                src="jackie-bot.png"
                className="about-images"
                height="200px"
                width="200px"
                onMouseOver={changeGrayscale}
                onMouseLeave={changeBack}
              />
              <p>GitHub</p>
            </Link>
          </div>
          <div className="work-container">
            <h2>About The Coder</h2>
            <p className="about-descriptions">
              Jackie Manginelli (they/she) is a Fullstack Software Engineer,
              focusing in frontend development, based in Richmond, Virginia.
              They earned their B.A. in Government and FGSS: Feminist, Gender,
              and Sexuality Studies from Wesleyan University in 2019. They
              graduated from the Grace Hopper Coding Bootcamp at Fullstack
              Academy in December of 2022. In their free time they like
              photography, reading, and book-binding.
            </p>
            <h2>Contact</h2>
            <p className="about-descriptions">
              Phone: 516-300-2651 <br></br> <br></br>Email:
              jmanginelli11@gmail.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutTheCoder;
