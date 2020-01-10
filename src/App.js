import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Home} from "./pages/Home.page";
import {About} from "./pages/About.page";
import {Navbar} from "./components/Navbar.component";
import {Alert} from "./components/Alert.component";
import AlertState from "./context/alert/alert.state";

const App = () => {
    return (
        <AlertState>
            <BrowserRouter>
                <Navbar/>
                <div className='container pt-4'>
                    <Alert/>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/about' component={About}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </AlertState>
    );
};

export default App;
