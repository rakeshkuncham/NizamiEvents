import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import './SocialSidebar.css';

const SocialSidebar = () => {
  return (
    <aside className="social-sidebar">
      <ul>
        <li className="whatsapp">
          <a 
            href="https://wa.me/+9191234567890" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            <span>WhatsApp</span>
          </a>
        </li>
        <li className="facebook">
          <a 
            href="https://www.facebook.com/nizamievents" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
            <span>Facebook</span>
          </a>
        </li>
        <li className="twitter">
          <a 
            href="https://twitter.com/nizamievents" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
            <span>Twitter</span>
          </a>
        </li>
        <li className="youtube">
          <a 
            href="https://youtube.com/nizamievents" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} />
            <span>YouTube</span>
          </a>
        </li>
        <li className="instagram">
          <a 
            href="https://instagram.com/nizamievents" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
            <span>Instagram</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SocialSidebar;