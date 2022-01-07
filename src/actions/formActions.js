import { 
    SET_DATA_FORM_USERCOUNT_SECTION,
    SET_DATA_USER_TO_REDUX,
    CLEAN_REDUX,
    GET_USERS_TOKEN_BEGIN,
    GET_USERS_TOKEN_SUCCESS,
    GET_USERS_TOKEN_FAILURE,
    SET_PHONE_TO_REDUX,
} from "../types/types";

export const setDataFomrFirstSectionToRedux = (userCount) => ({
    type: SET_DATA_FORM_USERCOUNT_SECTION,
    payload: {
        userCount
    }
})
export const setPhoneToRedux = (userPhone) => ({
    type: SET_PHONE_TO_REDUX,
    payload: {
        userPhone
    }
})
export const setUserDataToRedux = (userData) => ({
    type: SET_DATA_USER_TO_REDUX,
    payload: {
        userData
    }
})

export const userGetTokenBegin = () => ({
    type: GET_USERS_TOKEN_BEGIN,
});

export const userGetTokenSuccess = (token) => ({
    type: GET_USERS_TOKEN_SUCCESS,
    payload: {
        token
    }
});

export const userGetTokenFailure = () => ({
    type: GET_USERS_TOKEN_FAILURE,
});


export function userGetToken(email, password){
    return (dispatch) => {
        dispatch(userGetTokenBegin());
        return fetch(`https://frontend-recruiting.100ladrillos.com/api/signUp`,
        {
            headers: {"Content-Type": "application/json"},
            method: 'POST',
            body: JSON.stringify({
                password,
                email,
            }),
        }
        )
        .then( response => {
            if (response.status !==  200 || response.status !==  200) throw response.status;
            return response.json()
        }).then(data => {
            console.log(data);
            dispatch(userGetTokenSuccess(data));
        })
        .catch(err => {
        return dispatch(userGetTokenFailure(err));
        })
    };
}

export const cleanRedux = () => ({
    type: CLEAN_REDUX
})
