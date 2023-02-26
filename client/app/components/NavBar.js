import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <h1>Jackie Manginelli, Software Engineer</h1>
      <h2>
        <Typewriter
          words={[
            'Hello Friend',
            'Howdy Partner',
            'Welcome Comrade',
            'Ahoy Matey',
            'Salutations Nerd',
            'Hello World',
          ]}
          loop={3}
          cursor
          cursorStyle="|"
          cursorBlinking
          typeSpeed={150}
          deleteSpeed={150}
          delaySpeed={1000}
        />
      </h2>
      <nav className="navigations">
        <ul>
          <Link to="/">Projects</Link>
          <Link to="/about">About the Coder</Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
