import { useReducer } from 'react';
import './App.css';
import { Custom } from './components/custom';
import { Focus } from './components/useref';

const reducer = (state, action)  => {
  if (action.type === 'buy ingredients') return {money: state.money - 10};
  if (action.type === 'sell_a_meal') return {money: state.money + 10};
  if (action.type === 'celebrity_visit') return {money: state.money + 10000};
  return state;
}


function App() {

  const initialState = {money: 100};
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <div className="App">
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({type: "buy ingredients"})}>Shopping for veggies!</button>
        <button onClick={() => dispatch({type: "sell_a_meal"})}>Serve a meal to the customer</button>
        <button onClick={() => dispatch({type: "celebrity_visit"})}>Celebrity visit!</button>
      </div>
      <Focus />
      <Custom />
    </div>
  );
}

export default App;
