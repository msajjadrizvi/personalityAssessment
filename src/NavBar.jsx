import React, { useState } from 'react';
import logo from './loho.png';
import './navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    const [active, setActive] = useState(false);

    const toggleActive = () => {
        setActive(!active);
    };

    return (
        <div>
            <img src={logo} alt="Logo" />
            <nav className="NavigationBar">
                <div className="NavigationBar-toggle" onClick={toggleActive}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={active ? 'active' : 'NavigationBar-menu'}>
                    <li className="NavigationBar-menuItem">
                        <Link to="/" className="NavigationBar-link">
                            Home
                        </Link>
                    </li>
                    <li className="NavigationBar-menuItem">
                        <Link to="/assessment" className="NavigationBar-link">
                            Personality Test
                        </Link>
                    </li>
                    <li className="NavigationBar-menuItem">
                        <Link to="/Soon" className="NavigationBar-link">
                            Emotional Test
                        </Link>
                    </li>
                    <li className="NavigationBar-menuItem">
                        <Link to="/Soon" className="NavigationBar-link">
                            Intelligence Test
                        </Link>
                    </li>
                </ul>
            </nav>
        </div >
    );
}

export default NavBar;
