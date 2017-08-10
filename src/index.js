import thunkMiddleware from 'redux-thunk'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import { updatePlayers } from './actions'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

store.dispatch(updatePlayers([ { id: 1, name: 'Ari 1' }, { id: 2, name: 'Ari 2' } ]));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
