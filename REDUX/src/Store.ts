import {configureStore, combineReducers} from '@reduxjs/toolkit';

import Reducers from './reducers/index'

const rootReducer = combineReducers({

})

const store = configureStore({
    reducer: rootReducer
});
export default store



