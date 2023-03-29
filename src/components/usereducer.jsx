import { useReducer } from "react"


function reducer(state, action) {
    switch (action.type) {
        case 'incremental_age': {
            return {
                ...state,
                age: state.age + 1
            }
        }
        case 'changed_name': {
            return {
                ...state,
                name: action.nextName,
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
}

export const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, { name: '', age: 38 }); //dispatch changes state. State has initial value given.

    console.log(state);

    const handleClick = () => {
        dispatch({ type: 'incremental_age' });
    };

    const handleChange = (e) => {
        dispatch({type: 'changed_name', nextName: e.target.value});
    }

    return (
        <div className="my-3">
            <button onClick={handleClick} className="btn rounded-0 border my-2">Increment Age</button>
            <h5>Hello there {state.name}, you're {state.age} years old!</h5>
            <input type="text" className="form-control" value={state.name} onChange={handleChange} />
        </div>
    )

}