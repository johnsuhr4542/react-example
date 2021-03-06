import {createStore, applyMiddleware, combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/es/storage';
import ReduxThunk from 'redux-thunk';

import Counter from './Counter';
import Authentication from './Authentication';

const persistConfig = {
  key: 'root',
  storage
}

const reducers = combineReducers({
  Counter,
  Authentication
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));

export const persistor = persistStore(store);