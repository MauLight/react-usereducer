import { useState } from "react";

export const Custom = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }
    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment} className="btn border rounded-0">Plus 1!</button>
            <button onClick={decrement} className="btn border rounded-0">Minus 1!</button>
        </div>
    )
}