import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import FAQs from './pages/FAQs';
import Products from './pages/Products';
import './styles/styles.css';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> {/* Top navigation bar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer /> {/* Bottom footer */}
    </BrowserRouter>
  );
};


export default App;



