import React from "react";
import { useCallback, useState } from "react"; 
import Typography from '@mui/material/Typography';
import "./nav.css";

const Navigation = () => {
    const [activeNav, setActiveNav] = useState('#');
  
    return (
      <nav>
        <a href="#"
          onClick={() => setActiveNav('#')}
          className={activeNav === '#' ? 'active' : ''}
        >
          <Typography>
            Home
          </Typography>
        </a>
        <a href="#works"
          onClick={() => setActiveNav('#works')}
          className={activeNav === '#works' ? 'active' : ''}
        >
          <Typography>
            Projects
          </Typography>
        </a>
        <a href="#about"
          onClick={() => setActiveNav('#about')}
          className={activeNav === '#about' ? 'active' : ''}
        >
          <Typography>
            About
          </Typography>
        </a>
        <a href="#contact"
          onClick={() => setActiveNav('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}
        >
          <Typography>
            Contact
          </Typography>
        </a>
      </nav>
    );
  };

  export default Navigation;