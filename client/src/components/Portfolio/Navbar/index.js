import React, { useState } from 'react';
import './style.css'

// import nav data here
import { NavData } from './NavData';

const Navbar = () => {
    // DEFINE STATES HERE

    // states for fa-icons
    const [clicked, setClicked] = useState(false);

    // function to handle click event for fa-icons 
    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <div className={clicked ? 'portfolio-navbar active' : 'portfolio-navbar'}>
            <nav className='port-nav-container'>
                {/* Nav-menu and nav-items here */}
                <div className='port-nav-menu-icon' onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-eye'}></i>
                </div>
                <ul className={clicked ? 'port-nav-menu active' : 'port-nav-menu'}>
                    {NavData.map((item, index) => {
                        return (
                            <li
                                className='port-nav-menu-item'
                                key={index}
                            >
                                <a
                                    className={item.cName}
                                    href={item.path}
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