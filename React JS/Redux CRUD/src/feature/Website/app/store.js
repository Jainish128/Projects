import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';           // For Middleware for API Serve
import rootReducer from './rootReducer';

const thunkMiddleware = [reduxThunk];

const store = createStore(rootReducer, applyMiddleware(...thunkMiddleware));

export default store;       