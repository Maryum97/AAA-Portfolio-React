import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

// import icons here
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

const SideNav = () => {
    // define states here
    const [sidebar, setSidebar] = useState(false);

    // define function here to show sidebar when icon is clicked on
    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
        <div className='sidenav'>
            <Link to='#' className='menu-bars'>
                <FaIcons.FaBars
                    style={{ color: 'cyan' }}
                    onClick={showSidebar}
                />
            </Link>
            <nav className={sidebar ? 'sidenav-menu active' : 'sidenav-manu'}>
                <ul className='sidenav-menu-items'>
                    <li className='sidenav-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideNav;