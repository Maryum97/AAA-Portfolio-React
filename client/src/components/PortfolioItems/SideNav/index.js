import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

// import sidenav data here
import { SideNavData } from './SideNavData';

const SideNav = () => {
    // define states here
    const [sidebar, setSidebar] = useState(false);

    // define function here to show sidebar when icon is clicked on
    const handleClick = () => {
        setSidebar(!sidebar);
    }

    return (
        <div className={sidebar ? 'sidenav active' : 'sidenav'}>
            <Link to='#' className='menu-bars' onClick={handleClick}>
                <i className={sidebar ? 'fas fa-times' : 'fas fa-bars'}></i>
            </Link>
            <nav className={sidebar ? 'sidenav-menu active' : 'sidenav-menu'}>
                <ul className={sidebar ? 'sidenav-menu-items active' : 'sidenav-menu-items'}>
                    {SideNavData.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className={item.cName}
                            >
                                <Link to={item.path} className='link'>
                                    <span className='item-icon'>
                                        {item.icon}
                                    </span>
                                    <span> </span>
                                    <span className='item-title'>
                                        {item.title}
                                    </span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default SideNav;