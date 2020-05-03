import React from 'react';
import { Route } from 'react-router-dom';
import {Home, 
    Portfolio, 
    Services,
    About,
    Contact
} from '../index';

const Routes = () =>{
    return(
        <>
        <Route exact path="/" component={Home} />
        <Route path='/Portfolio' component={Portfolio} />
        <Route path='/Services' component={Services} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
        </>
    )
}

export default Routes;
