import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './reducer';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Inc</button>
      <button onClick={() => dispatch(decrement())}>Dec</button>
    </div>
  );
};

export default Counter;

