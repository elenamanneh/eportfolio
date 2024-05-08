import { android, c, css, figma, firebase, git, html, java, javascript, jira, mongodb, python, react, tex, asm } from '../img/technologies-icons';
import './technologies.css'


function technologies() {

  return (
    <div className="Technologies">
      <h1>
        TECHNOLOGIES
      </h1>
      <div className="Icon-grid-container">
        <div className="Icon-grid">
          <div className="Icon-item"><img src={c} className="C" alt="c" /> </div>
          <div className="Icon-item"><img src={java} className="Java" alt="java" /> </div>
          <div className="Icon-item"><img src={python} className="Python" alt="python" /> </div>
          <div className="Icon-item"><img src={html} className="Html" alt="html" /> </div>
          <div className="Icon-item"><img src={css} className="Css" alt="css" /> </div>
          <div className="Icon-item"><img src={javascript} className="Javascript" alt="javascript" /> </div>
          <div className="Icon-item"><img src={react} className="React" alt="react" /> </div>
          <div className="Icon-item"><img src={asm} className="ASM" alt="asm" /> </div>
          <div className="Icon-item"><img src={mongodb} className="Mongodb" alt="mongodb" /> </div>
          <div className="Icon-item"><img src={firebase} className="Firebase" alt="firebase" /> </div>
          <div className="Icon-item"><img src={git} className="Git" alt="git" /> </div>
          <div className="Icon-item"><img src={android} className="Android" alt="android" /> </div>
          <div className="Icon-item"><img src={tex} className="Tex" alt="tex" /> </div>
          <div className="Icon-item"><img src={jira} className="Jira" alt="jira" /> </div>
          <div className="Icon-item"><img src={figma} className="Figma" alt="figma" /> </div>
        </div>
      </div>
    </div>
  );
}

export default technologies;

