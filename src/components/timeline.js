import { circle } from '../img/style';
import './timeline.css';

function timeline() {

  return (
    <div className="Timeline">
      <div className="Timeline-left">
        <h2>
          WORK EXPERIENCE
        </h2>
        <h3>
          Quality Assurance Analyst @ theScore
        </h3>
        <li>
          Conducted cross-platform testing and managed defect tracking, enhancing product launch efficiency.
        </li>
        <li>
          Authored comprehensive test documentation; executed verification and validation tests across applications.
        </li>
        <li>
          Collaborated with cross-functional teams; led functional, regression, and smoke testing initiatives.
        </li>
      </div>
      <div className="Timeline-line">
        <div className="Timeline-circles">
          <img src={circle} className="Timeline-cricle" alt="timeline-cricle" />
          <div className="Timeline-line-space" alt="space">

          </div>
          <img src={circle} className="Timeline-cricle" alt="timeline-cricle" />
        </div>
      </div>
      <div className="Timeline-right">
        <h2>
          EDUCATION
        </h2>
        <h3>
          University of Toronto Scarborough
        </h3>
        <li>
          HBSc Computer Science, Information Systems Specialist
        </li>
      </div>
    </div>
  );
}

export default timeline;