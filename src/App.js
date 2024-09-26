import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom'
import * as yup from 'yup'
import schema from './validation/formSchema'

import Home from './components/Home'
import Form from './components/Form'
import Confirmation from './components/Confirmation'

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

    // const getOrders = () => {
    //     axios.get('https://reqres.in/api/orders')
    //         .then(res => {
    //             setOrders(res.data)
    //             console.log(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    const postNewOrder = newOrder => {
        axios.post('https://reqres.in/api/orders', newOrder)
            .then(res => {
                setOrders([res.data, ...orders])
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setFormValues(initialFormValues)
            })
    }

    const validate = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => setFormErrors({...formErrors, [name]: ''}))
            .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
    }

    const inputChange = (name, value) => {
        validate(name, value)
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
            special: formValues.special.trim()
        }
        postNewOrder(newOrder)
    }

    // useEffect schema
    // useEffect(() => {
    //     getOrders()
    // }, [])

    useEffect(() => {
        schema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])

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
            <Route path='/confirmation' component={Confirmation} />
        </Switch>
    </div>
  );
};
export default App;
