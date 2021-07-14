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
                    <h1>
                        <Router>
                            <SideNav />
                            <Switch>
                                <Route exact path={'/'} component={Business} />
                                <Route exact path={'/'} component={Philanthropy} />
                                <Route exact path={'/'} component={Awards} />
                            </Switch>
                        </Router>
                        Portfolio here.
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;