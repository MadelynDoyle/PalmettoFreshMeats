import { Link } from 'react-router-dom';
import '../styles/styles.css';
import Logo from '../assets/images/logo.jpg';

const Navbar = () => (
  <header className="main-header">
    <div className="header-top">
      <section className="header-logo">
        <img src={Logo} alt="Palmetto Fresh Meats Logo" className="logo" />
      </section>
      <section className="header-name">
        <h1>Palmetto Fresh Meats</h1>
      </section>
    </div>
    <nav className="main-nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
