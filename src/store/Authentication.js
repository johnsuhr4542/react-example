import { createAction, handleActions } from 'redux-actions';

const CHECK_AUTH = 'CHECK_AUTH';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const checkAuth = createAction(CHECK_AUTH);
const login = createAction(LOGIN);
const logout = createAction(LOGOUT);

const check = () => Promise.resolve('ROLE_MEMBER');

export const checkAuthAsync = () => async (dispatch) => {
  setTimeout(
    () => dispatch(checkAuth()),
    500
  );
}

export const loginAsync = ({ username, password }) => async (dispatch) => {
  console.log(username);
  console.log(password);
  setTimeout(
    () => dispatch(login()),
    500
  );
}

export const logoutAsync = () => async (dispatch) => {
  setTimeout(
    () => dispatch(logout()),
    500
  );
}

const handlers = {
  [CHECK_AUTH]: (state, action) => {
    console.log(state);
    console.log(action);
    return state;
  },
  [LOGIN]: (state, action) => {
    console.log(state);
    console.log(action);
    return state;
  },
  [LOGOUT]: (state, action) => {
    console.log(state);
    console.log(action);
    return state;
  }
}

const initialState = {
  authenticated: false,
  username: '',
  authorities: []
}

export default handleActions(handlers, initialState);