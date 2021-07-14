import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style.css';

// import other components here
import SideNav from './SideNav';
import Business from './Business';
import Philanthropy from './Philanthropy';
import Awards from './Awards';

function Portfolio() {
    return (
        <div className='portfolio'>
            <div className='portfolio-container card'>
                <div className='inner-container card'>
                    <div className='sidenav-routes'>
                        <Router>
                            <SideNav />
                            <Switch>
                                <Route exact path={'/'} component={Business} />
                                <Route exact path={'/'} component={Philanthropy} />
                                <Route exact path={'/'} component={Awards} />
                            </Switch>
                        </Router>
                    </div>
                    <div className='portfolio-content'>
                        Hi, random text here...
                        <Business />
                        <Awards />
                        <Philanthropy />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;