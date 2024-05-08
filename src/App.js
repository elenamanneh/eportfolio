import Announcements from './components/announcements.js';
import NavBar from './components/navBar.js';
import Header from './components/header.js';
import Timeline from './components/timeline.js';
import Technologies from './components/technologies.js'
import Projects from './components/projects.js';
import './App.css';


function App() {

  return (
    <div className="App">

      <NavBar />

      <Announcements />

      <Header />

      <Timeline />

      <Technologies />

      <Projects />

    </div>

  );
}

export default App;
