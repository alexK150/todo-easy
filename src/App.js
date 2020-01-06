import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Home} from "./pages/Home.page";
import {About} from "./pages/About.page";
import {Navbar} from "./components/Navbar.component";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className='container pt-4'>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/about' component={About}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
