import React from 'react'
import { useHistory } from 'react-router-dom'

function Home() {

    const history = useHistory()

    const routeToOrder = () => {
        history.push('/pizza')
    }

    return (
        <div className='home-wrapper'>
            <img
                className='home-image'
                src='https://www.purpleorchid.com/wp-content/uploads/2019/07/pizza-in-livermore-1500x609.jpg'
                alt='Pizza banner'
            />
            <button
                onClick={routeToOrder}
                id='order-pizza'
            >
                Order now!
            </button>
        </div>
    )
}
export default Home