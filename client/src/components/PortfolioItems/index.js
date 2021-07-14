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
                    <div className='sidenav-routes'>
                        <Router>
                            <SideNav
                                currentComponent={currentComponent}
                                handleComponentChange={handleComponentChange}
                            />
                            <Switch>
                                <Route exact path={'/'} component={Business} />
                                <Route exact path={'/'} component={Philanthropy} />
                                <Route exact path={'/'} component={Awards} />
                            </Switch>
                        </Router>
                    </div>
                    <div className='portfolio-content'>
                        Hi, random text here...
                        {renderComponent()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;