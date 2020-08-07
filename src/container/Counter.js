import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAsync, decrementAsync } from '../store/Counter';

const Counter = () => {
  const dispatch = useDispatch();
  const Counter = useSelector(state => state.Counter, []);
  const increase = () => dispatch(incrementAsync());
  const decrease = () => dispatch(decrementAsync());
  return (
    <div>
      <h2>count : {Counter.count}</h2>
      <button className="btn btn-primary" onClick={increase}>increase</button>
      <button className="btn btn-primary" onClick={decrease}>decrease</button>
    </div>
  );
}

export default Counter;