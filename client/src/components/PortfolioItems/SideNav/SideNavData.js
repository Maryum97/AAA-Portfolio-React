import React from 'react';

// import icons here
import * as FaIcons from 'react-icons/fa';

export const SideNavData = [
    {
        title: 'Business',
        path: '#business',
        icon: <FaIcons.FaBusinessTime />,
        cName: 'sidenav-text'
    },
    {
        title: 'Philanthropy',
        path: '#philanthropy',
        icon: <FaIcons.FaHandsHelping />,
        cName: 'sidenav-text'
    },
    {
        title: 'Awards',
        path: '#awards',
        icon: <FaIcons.FaAward />,
        cName: 'sidenav-text'
    }
]