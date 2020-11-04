import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './actions';
import './App.css';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      <h3>Valuable information I shouldn't see</h3>
      {isLogged ? <h3>Valuable information</h3> : ''}

    </div>

  );
}

export default App;
