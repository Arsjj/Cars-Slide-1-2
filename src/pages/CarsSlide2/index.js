import './index.css'
import { useState } from 'react'
import Mainslide from './components/MainSlide'
import SideBar from './components/SideBar'
import Buttons from './components/Buttons'
import { cars, sidebar } from './itemList'



function Slide2() {
    const [current, setCurrent] = useState(0)


    const downHandler = () => {
        setCurrent(prev => prev - 1)
        if (current < 1) {
            setCurrent(cars.length - 1)
        }
    }

    const upHandler = () => {
        setCurrent(prev => prev + 1)
        if ((current === cars.length - 1)) {
            setCurrent(0)
        }
    }


    return (
        <div className='container'>
            <SideBar sidebar={sidebar} current={current} />
            <Mainslide cars={cars} current={current} />
            <Buttons downHandler={downHandler} upHandler={upHandler} />
        </div>
    )
}

export default Slide2