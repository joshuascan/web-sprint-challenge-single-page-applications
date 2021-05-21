import React from 'react'
import { useHistory } from 'react-router-dom'

function PizzaForm(props) {
    const { values, errors, disabled, change, submit } = props

    const history = useHistory()

    const onSubmit = () => {
        history.push()  // Possible error
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    
}
export default PizzaForm