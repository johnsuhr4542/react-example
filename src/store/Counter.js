import { createAction, handleActions } from 'redux-actions';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

export const incrementAsync = () => dispatch => {
  setTimeout(
    () => dispatch(increment()),
    1000
  );
}

export const decrementAsync = () => dispatch => {
  setTimeout(
    () => dispatch(decrement()),
    1000
  )
}

const handlers = {
  [INCREMENT]: (state, _) => ({ count: state.count + 1 }),
  [DECREMENT]: (state, _) => ({ count: state.count - 1 })
}

const initialState = {
  count: 0
}

export default handleActions(handlers, initialState);