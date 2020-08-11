import React from 'react';
import { Route } from 'react-router-dom';
import {Home, 
    Portfolio, 
    Videos,
    About,
    Contact
} from '../index';

const Routes = () =>{
    return(
        <>
        <Route exact path="/" component={Home} />
        <Route path='/Projects' component={Portfolio} />
        <Route path='/Videos' component={Videos} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
        </>
    )
}

export default Routes;
