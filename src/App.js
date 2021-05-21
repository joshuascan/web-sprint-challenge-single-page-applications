import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom'

import Home from './components/Home'

const App = () => {
  return (
    <div className='app'>
        <nav>
        <h1>Lambda Eats</h1>
        <Link to='/'>Home</Link>
        </nav>

        <Switch>
            <Route path='/' component={Home} />
        </Switch>
    </div>
  );
};
export default App;
