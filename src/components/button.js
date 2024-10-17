import React from 'react';
import { YouTube, Mail, GitHub, LinkedIn } from '@mui/icons-material';
import './button.css';

const SocialMediaButtons = () => {
  return (
    <div className="social-media-buttons">
      <a href="https://www.linkedin.com/in/marzhan-nuraly-8495761aa/" target="_blank" rel="noopener noreferrer" className="social-button">
      <LinkedIn />
      </a>
      <a href="https://leetcode.com/u/maraft/" target="_blank" rel="noopener noreferrer" className="social-button">
        <Mail/>
      </a>
      <a href="https://github.com/marara02/" target="_blank" rel="noopener noreferrer" className="social-button">
        <GitHub/>
      </a>
      <a href="https://www.youtube.com/@MarzhanNuraly" target="_blank" rel="noopener noreferrer" className="social-button">
        <YouTube/>
      </a>
    </div>
  );
};

export default SocialMediaButtons;
