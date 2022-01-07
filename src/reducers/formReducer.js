import { initialState } from "./initialState";
import { 
    SET_DATA_FORM_USERCOUNT_SECTION,
    GET_USERS_TOKEN_BEGIN,
    SET_DATA_USER_TO_REDUX,
    GET_USERS_TOKEN_SUCCESS,
    GET_USERS_TOKEN_FAILURE,
    SET_PHONE_TO_REDUX,
    CLEAN_REDUX,
} from "../types/types";


export const formReducer = ( state = initialState.dataFormUserCountSection, action ) => {
    switch (action.type) {
        case SET_DATA_FORM_USERCOUNT_SECTION:
            return {
                ...state,
                userCount: action.payload.userCount
            }
        case SET_PHONE_TO_REDUX:
            return {
                ...state,
                userPhone: action.payload.userPhone
            }
        case SET_DATA_USER_TO_REDUX:
            return {
                ...state,
                userData: action.payload.userData
            }
        case GET_USERS_TOKEN_BEGIN:
            return state;
        case GET_USERS_TOKEN_SUCCESS:
            return{
                ...state,
                token: action.payload.token
            } 
        case GET_USERS_TOKEN_FAILURE:
            return state;
        case CLEAN_REDUX:
            return initialState.dataFormUserCountSection;
    
        default: 
            return state;
    }
}