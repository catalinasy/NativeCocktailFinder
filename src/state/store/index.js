import { createStore, combineReducers } from 'redux';
import drinksReducer from '../Drinks/reducer';

const rootReducer = combineReducers({ drinks: drinksReducer });

const configureStore = () => createStore(rootReducer);

export default configureStore;