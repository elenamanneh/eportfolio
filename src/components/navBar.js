import { linkedin, github, mail, resume } from '../img/button-icons';
import './navBar.css';


function navBar() {

  return (
    <div className="Nav-bar">
      <a
        className="Resume-link"
        href="https://drive.google.com/file/d/1xIB3RPfpL3rR0Ct2C1vzoq8ZQqdIsFiW/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={resume} className="Resume-button" alt="resume-button" />
      </a>
      <a
        className="Mail-link"
        href="mailto:elenamanneh@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={mail} className="Mail-button" alt="mail-button" />
      </a>
      <a
        className="Linkedin-link"
        href="https://www.linkedin.com/in/elenamanneh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} className="Linkedin-button" alt="linkedin-button" />
      </a>
      <a
        className="Github-link"
        href="https://github.com/elenamanneh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} className="Github-button" alt="github-button" />
      </a>
    </div>
  );
}

export default navBar;