import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom'

import Home from './components/Home'
import Form from './components/Form'

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

    // validate function

    const inputChange = (name, value) => {
        // validate
        setFormValues({...formValues, [name]: value})
    }

    const formSubmit = () => {
        const newOrder = {
            name: formValues.name.trim(),
            size: formValues.size,
            pepperoni: formValues.pepperoni,
            sausage: formValues.sausage,
            fetaCheese: formValues.fetaCheese,
            onions: formValues.onions,
            choppedGarlic: formValues.choppedGarlic,
            roastedRedPeppers: formValues.roastedRedPeppers,
        }
        postNewOrder(newOrder)
    }

    // useEffect schema

  return (
    <div className='app'>
        <nav>
        <h1>Lambda Eats</h1>
        <Link to='/'>Home</Link>
        </nav>

        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/pizza'>
                <Form 
                    values={formValues}
                    errors={formErrors}
                    disabled={disabled}
                    change={inputChange}
                    submit={formSubmit}
                />
            </Route>
        </Switch>
    </div>
  );
};
export default App;
