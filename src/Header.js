import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="main-nav">
            <div className="container nav-flex">
                <div className="logo">eliteoverseas </div>
                
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                    <li><Link to="/products" onClick={toggleMenu}>Products</Link></li>
                    <li><Link to="/export" onClick={toggleMenu}>Export</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contact US</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;