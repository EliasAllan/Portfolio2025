import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SuccessStories from './pages/SuccessStories';
import BookSession from './pages/BookSession';
import Services from './pages/Services';
import Pricing from './pages/Pricing';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stories" element={<SuccessStories />} />
        <Route path="/book" element={<BookSession />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}


export default App;
