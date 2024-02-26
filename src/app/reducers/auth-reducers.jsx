import { initialState } from "../store";
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, GET_USERPROFILE } from "../actions/type-actions";

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                status: "SUCCEEDED",
                isConnected: true,
                token: action.payload,
                error: null
            }
        case GET_USERPROFILE:
            return {
                ...state,
                user: {
                        ...state.user,
                        firstname: action.payload.firstname,
                        lastname: action.payload.lastname,
                        username: action.payload.username
                    }
            }       
        case LOGIN_FAIL: {
            return {
                ...state,
                status: "FAILED",
                isConnected: false,
                error: action.payload
            }
        }  
        case LOGOUT: {
            return initialState;
        }  
        default:
            return state;
    }
}