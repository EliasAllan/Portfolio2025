import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Cat from './pages/Cat.jsx';
import Navbar from './components/navbar/Navbar.jsx';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cat" element={<Cat />} />
      </Routes>
    </>
  );
}

export default App;

