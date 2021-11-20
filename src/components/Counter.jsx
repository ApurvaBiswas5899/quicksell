import React, {useState} from 'react'
import loading from '../assets/loading.png'
import './Counter.css'

export default function Counter() {
  const [count, setCount] = useState(1);

  return (
    <div style={{ backgroundColor: 'white', width: '30%', padding: '10px'}}>
      <div className="heading">
        <img src={loading} style={{ height: 15, with: 15, paddingRight: '5px'}}/>
        <p style={{ fontSize: '10px', fontWeight: 500}}>
          Saving Counter Value
        </p>
      </div>
      <div className="button">
        <div className="minus" onClick={() => {setCount(count - 1)}}>
          -
        </div>
        <div className="count">
          {count}
        </div>
        <div className="plus" onClick={() => {setCount(count + 1)}}>
          +
        </div>
      </div>
      <div className="value">
        <p style={{ fontSize: '10px', fontWeight: 500}}>
          Counter value: {count}
        </p>
      </div>
    </div>
  )
}


