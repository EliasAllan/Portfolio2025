import Home from './pages/Home.jsx';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/navbar/Navbar.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default App;

