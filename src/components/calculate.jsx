import { useReducer, useState } from "react"

export const Calculate = () => {

    const [num, setNum] = useState(0);
    const initialState = { number: 100 };

    console.log(typeof (num))

    const reducer = (state, action) => {
        if (action.type === 'sum') return { number: state.number + num }
        if (action.type === 'minus') return { number: state.number - num }
        if (action.type === 'multi') return { number: state.number * num }
        if (action.type === 'divide') return { number: state.number / num }
        return state;
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
        setNum(parseInt(e.target.value))
    }

    return (
        <div className="row d-flex justify-content-center">
            <div className="col-12 my-3">
                <h1>{state.number}</h1>
            </div>
            <div className="col-12">
                <button className="btn rounded-0 border" onClick={() => dispatch({ type: 'sum' })} >SUM</button>
                <button className="btn rounded-0 border" onClick={() => dispatch({ type: 'minus' })} >MINUS</button>
                <button className="btn rounded-0 border" onClick={() => dispatch({ type: 'multi' })} >MULTI</button>
                <button className="btn rounded-0 border" onClick={() => dispatch({ type: 'divide' })} >DIVIDE</button>
            </div>
            <div className="col-12 d-flex justify-content-center my-3">
                <input type="number" className="form-control w-25" value={num} onChange={handleChange} />
            </div>
        </div>
    )
}

