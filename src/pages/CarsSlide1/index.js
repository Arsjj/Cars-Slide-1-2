import { useState } from 'react'
import Car from './components/Car';
import './index.css';
import { cars } from './itemList';



function Slide() {
  const [state, setState] = useState(cars)

  const slideChangeHandler = (id) => {
    setState(cars.map(item => item.id === id ? item.class = 'slide active' : item.class = 'slide'))
  }

  return (
    <div>
      <div className="container1">
        {cars.map((item) => {
          return <Car
            clas={item.class}
            url={item.url} key={item.id}
            name={item.name}
            slideChangeHandler={slideChangeHandler}
            id={item.id} />
        })}
      </div>
    </div >
  )
}

export default Slide