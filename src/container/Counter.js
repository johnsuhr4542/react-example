import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { incrementAsync, decrementAsync } from '../store/Counter';

import auth from '../api/authentication';

const Counter = () => {
  const history = useHistory();

  useEffect(() => {
    // check authentication
    (async() => {
      try {
        const userInfo = await auth.login('system', 'system');
        console.log(userInfo);
      } catch (e) {
        alert(e.message);
        history.push('/');
      }
    })();
  }, [history]);

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