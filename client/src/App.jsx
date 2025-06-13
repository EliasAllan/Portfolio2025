import Navbar from './components/navbar/Navbar.jsx';
import Home from './pages/Home.jsx';
import Experience from './pages/Experience.jsx';
import Projects from './pages/Projects.jsx';
import Bio from './pages/About.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      <Bio />
      <Footer />
    </>
  );
}

export default App;
