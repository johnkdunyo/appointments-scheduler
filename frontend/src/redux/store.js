import { createStore, combineReducers } from 'redux';
import reducers from './reducers/reducers.js'

// export const store = createStore(
//     combineReducers({
//         state: reducers
//     }),  /* preloadedState, */
//     +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export const store = createStore( reducers ,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())