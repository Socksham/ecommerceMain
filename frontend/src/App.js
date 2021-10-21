import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import Cart from './pages/Cart';
import AboutUs from './pages/AboutUs';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/account" component={Account} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/aboutus" component={AboutUs} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
