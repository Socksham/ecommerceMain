import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import Cart from './pages/Cart';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ItemsShowcase from './pages/ItemsShowcase';
import AddReview from './pages/AddReview';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/account" component={Account} />
                <Route exact path="/cart/:id" component={Cart} />
                <Route exact path="/aboutus" component={AboutUs} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/q/:word" component={ItemsShowcase} />
                <Route exact path="/r/:item/:user" component={AddReview}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
