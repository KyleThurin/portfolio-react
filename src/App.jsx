import { BrowserRouter, Routes, Link, Route} from 'react-router-dom'
import ProjectView from './views/ProjectView/ProjectView';
import ResumeView from './views/ResumeView/ResumeView';
import AboutView from './views/AboutView/AboutView';
import HomeView from './views/HomeView/HomeView';
import './App.css'



// Component to handle the navigation buttons using useNavigate
function NavButtons() {
  //TODO: Use links directly and then style them like buttons in App.css?

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
      <NavButtons /> 
      <Routes>
        <Route path='/' element={<HomeView />}/>
        <Route path='/about' element={<AboutView /> }/>
        <Route path='/projects' element={<ProjectView /> }/>
        <Route path='/resume' element={<ResumeView /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
