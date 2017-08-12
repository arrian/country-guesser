import thunkMiddleware from 'redux-thunk'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import { updateWorld } from './actions'
import io from 'socket.io-client'

var socket = io();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware.withExtraArgument(socket))));//composeWithDevTools(applyMiddleware(thunkMiddleware.withExtraArgument(socket))));

socket.on('update', world => store.dispatch(updateWorld(world)));
// store.dispatch(updatePlayers([ { id: 1, name: 'Ari 1' }, { id: 2, name: 'Ari 2' } ]));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
