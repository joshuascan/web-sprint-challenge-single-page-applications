import React from 'react'
import { useHistory } from 'react-router-dom'

function Form(props) {
    const { values, errors, disabled, change, submit } = props

    const history = useHistory()

    const onSubmit = () => {
        history.push('/confirmation')
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form className='container' id='pizza-form' onSubmit={onSubmit}>
            <label>Name
                <input
                id='name-input'
                type='text'
                name='name'
                value={values.name}
                onChange={onChange}
                />
            </label>

            <label>Size
                <select
                id='size-dropdown'
                name='size'
                value={values.size}
                onChange={onChange}
                >
                    <option value=''>-- Select a size --</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </label>

            <div className='toppings'>
                <h3>Toppings</h3>
                <label>Pepperoni
                    <input
                    type='checkbox'
                    name='pepperoni'
                    checked={values.pepperoni}
                    onChange={onChange}
                    />
                </label>

                <label>Sausage
                    <input
                    type='checkbox'
                    name='sausage'
                    checked={values.sausage}
                    onChange={onChange}
                    />
                </label>

                <label>Feta Cheese
                    <input
                    type='checkbox'
                    name='fetaCheese'
                    checked={values.fetaCheese}
                    onChange={onChange}
                    />
                </label>

                <label>Onions
                    <input
                    type='checkbox'
                    name='onions'
                    checked={values.onions}
                    onChange={onChange}
                    />
                </label>

                <label>Chopped Garlic
                    <input
                    type='checkbox'
                    name='choppedGarlic'
                    checked={values.choppedGarlic}
                    onChange={onChange}
                    />
                </label>

                <label>Roasted Red Peppers
                    <input
                    type='checkbox'
                    name='roastedRedPeppers'
                    checked={values.roastedRedPeppers}
                    onChange={onChange}
                    />
                </label>
            </div>

            <label>Special Instructions
                <input
                id='special-text'
                type='text'
                name='special'
                value={values.special}
                onChange={onChange}
                />
            </label>

            <div className='submit'>
                <button disabled={disabled} id='order-button'>Place Order</button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
            </div>
        </form>
    )
}
export default Form