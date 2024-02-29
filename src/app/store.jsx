
import { combineReducers, configureStore  } from '@reduxjs/toolkit';
import { authReducer } from './reducers/auth-reducers.jsx';
import { userReducer } from './reducers/user-reducers.jsx';



const rootReducer = combineReducers({
   auth: authReducer,
   user: userReducer,
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true 
})

export default store