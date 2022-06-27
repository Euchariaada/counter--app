
import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <button id="increase-button" onClick={() => setCount(count + 1)}>Click to increament</button>
            <button id="decrease-button" onClick={() => setCount(count - 1)}>Click to decreament</button>
            <button id="reset-button" onClick={() => setCount(0)}>Click to reset</button>
            <p id="counter-value">{count}</p>
        </div>
    )
}
export default Counter;
