import {Store, Middleware, createStore, applyMiddleware } from 'redux'
import RootReducer from './reducers/RootReducer'
import thunk from 'redux-thunk'

const middlwares: Middleware[] = [thunk]  

const store : Store = createStore(RootReducer, applyMiddleware(...middlwares))


export default store