import { useReducer } from "react"


function reducer(state, action) {
    switch(action.type) {
        case 'incremental_age': {
            return {
                name: state.name,
                age: state.age + 1
            }
        }
        case 'changed_name': {
            return {
                name: action.nextName,
                age: state.age
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
}

export const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, { age: 38 }); //dispatch changes state. State has initial value given.

    console.log(state);

    const handleClick = () => {
        dispatch({type: 'incremental_age'});
    }

    return (
        <div className="my-3">
            <button onClick={handleClick} className="btn rounded-0 border my-2">Increment Age</button>
            <h5>Hello there, you're {state.age} years old!</h5>
        </div>
    )

}