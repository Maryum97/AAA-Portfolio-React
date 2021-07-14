import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './style.css';

// import other components here
import SideNav from './SideNav';
import Business from './Business';
import Philanthropy from './Philanthropy';
import Awards from './Awards';
import Welcome from './Welcome';

const Portfolio = () => {
    // define states here
    const [currentComponent, setCurrentComponent] = useState('Welcome')

    // define function to change component state
    const handleComponentChange = (component) => {
        setCurrentComponent(component);
    }

    // define function to change component
    const renderComponent = () => {
        if (currentComponent === 'Welcome') {
            return <Welcome />
        }
        if (currentComponent === 'Business') {
            return <Business />
        }
        else if (currentComponent === 'Philanthropy') {
            return <Philanthropy />
        }
        else if (currentComponent === 'Awards') {
            return <Awards />
        }
    }

    return (
        <div className='portfolio'>
            <div className='portfolio-container card'>
                <div className='inner-container card'>
                    <Router className='router'>
                        <SideNav
                            currentComponent={currentComponent}
                            handleComponentChange={handleComponentChange}
                        />
                        <AnimatePresence
                            exitBeforeEnter
                            className='animate-presence'
                        >
                            <Switch>
                                <Route exact path={'/'} conponent={Welcome}>
                                    {renderComponent()}
                                </Route>
                                <Route exact path={'/'} component={Business}>
                                    {renderComponent()}
                                </Route>
                                <Route exact path={'/'} component={Philanthropy}>
                                    {renderComponent()}
                                </Route>
                                <Route exact path={'/'} component={Awards}>
                                    {renderComponent()}
                                </Route>
                            </Switch>
                        </AnimatePresence>
                    </Router>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;