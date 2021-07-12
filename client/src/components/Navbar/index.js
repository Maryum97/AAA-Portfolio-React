import React, { useState } from 'react';
import './style.css';

// import menu-items here as a separate component
import { MenuItems } from './MenuItems';

// define styles here
const myStyles = {
    navbar: {
        zIndex: '1',
        position: 'fixed',
        marginTop: '-8px'
    }
}

const Navbar = () => {
    // DEFINE STATES HERE

    // states for fa-icons
    const [clicked, setClicked] = useState(false)

    // states for navbar color-change
    const [navbar, setNavbar] = useState(false)

    // DEFINE FUNCTIONS HERE

    // function to handle click event for fa-icons 
    const handleClick = () => {
        setClicked(!clicked);
    }

    // function to change navbar color
    const changeNavbarColor = () => {
        if (window.scrollY >= 140) {
            setNavbar(true);
        }

        else {
            setNavbar(false);
        }
    }

    // change color ON SCROLL
    window.addEventListener('scroll', changeNavbarColor);

    return (
        // Navbar starts here
        <div
            className={navbar ? 'navbar active' : 'navbar'}
            style={myStyles.navbar}
        >
            <nav>
                {/* Asad Ansari logo here */}
                <h1 className='navbar-header'>
                    <a href='/' className='navbar-logo'>
                        <b style={{ color: 'teal' }}>Asad</b>Ansari
                    </a>
                </h1>

                {/* Nav-menu and nav-items here */}
                <div className='menu-icon' onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a
                                    className={item.cName}
                                    href={item.url}
                                >
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;