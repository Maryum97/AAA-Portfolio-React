import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style.css';

// import other components here
import SideNav from './SideNav';
import Business from './Business';
import Philanthropy from './Philanthropy';
import Awards from './Awards';

const Portfolio = () => {
    // define states here
    const [currentComponent, setCurrentComponent] = useState('')

    // define function to change component state
    const handleComponentChange = (component) => {
        setCurrentComponent(component);
    }

    // define function to change component
    const renderComponent = () => {
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
                        <Switch className='switch'>
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
                    </Router>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;