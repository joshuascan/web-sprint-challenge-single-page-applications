import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom'

import Home from './components/Home'
import PizzaForm from './components/PizzaForm'

const initialOrders = []

const initialFormValues = {
    name: '',
    size: '',
    pepperoni: false,
    sausage: false,
    fetaCheese: false,
    onions: false,
    choppedGarlic: false,
    roastedRedPeppers: false,
    special: ''
}

const initialFormErrors = {
    name: '',
    size: '',
    special: ''
}

const initialDisabled = true

const App = () => {

    const [orders, setOrders] = useState(initialOrders)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const postNewOrder = newOrder => {
        axios.post('https://reqres.in/api/orders', newOrder)
            .then(res => {
                setOrders([res.data, ...orders])
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setFormValues(initialFormValues)
            })
    }

  return (
    <div className='app'>
        <nav>
        <h1>Lambda Eats</h1>
        <Link to='/'>Home</Link>
        </nav>

        <Switch>
            <Route path='/' component={Home} />
            <Route path='/pizza' component={PizzaForm}/>
        </Switch>
    </div>
  );
};
export default App;
