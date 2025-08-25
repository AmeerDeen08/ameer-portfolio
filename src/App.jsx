import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage'
import ProjectContent from './components/ProjectContent'

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
       <Route path="/project/:projectId" element={<ProjectContent />} />
 
      </Routes>
    </Router>
  )
}

export default App
