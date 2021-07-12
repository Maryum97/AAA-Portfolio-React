import React from 'react';
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
    return (
        // Navbar starts here
        <div className='navbar' style={myStyles.navbar}>
            <nav>
                {/* Asad Ansari logo here */}
                <h1 className='navbar-header'>
                    <a href='/' className='navbar-logo'>
                        <b style={{ color:'skyblue' }}>Asad</b>Ansari
                    </a>
                </h1>

                {/* Nav-menu and nav-items here */}
                <div className='menu-icon'>

                </div>
                <ul>
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