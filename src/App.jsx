import { BrowserRouter, Routes, Link, Route} from 'react-router-dom'
import ProjectView from './views/ProjectView/ProjectView';
import ResumeView from './views/ResumeView/ResumeView';
import AboutView from './views/AboutView/AboutView';
import HomeView from './views/HomeView/HomeView';
import './App.css'

//TODO: Add a background, so you do not just have the white. 
//  -Maybe soften the color palet a bit (lue on black is a bit tough on the eyes)

//TODO: Add a "CONTACT ME" button at the top
//  -Have an option for people to email you directly or fill out a contact sheet for you to reach them directly

// Component to handle the navigation buttons (useNavigate)
function NavButtons() {

  return (
    <nav className="main-nav">
      <Link to="/"><button>Home</button></Link>
      <Link to="/about"><button>About</button></Link>
      <Link to="/projects"><button>Projects</button></Link>
      <Link to="/resume"><button>Resume</button></Link>
    </nav>
  );
}

function App() {

  return (
    <BrowserRouter>
      <h1>Kyle Thurin's Portfolio Site</h1>
      <NavButtons /> 
      <Routes>
        <Route path='/' element={<HomeView />}/>
        <Route path='/about' element={<AboutView /> }/>
        <Route path='/projects' element={<ProjectView /> }/>
        <Route path='/resume' element={<ResumeView /> }/>
      </Routes>
      <footer className="main-footer">
        &copy; 2025. All rights reserved.
      </footer>
    </BrowserRouter>
  )
}

export default App
