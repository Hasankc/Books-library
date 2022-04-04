import { Actions, User } from "./action"

type InitialState = {
    isAuthenticated: boolean
    user: User | null
}
const initialState = {
    isAuthenticated: false,
    user: null,
}

const authReducer = (state = initialState, actions: Actions) =>{
    switch(actions.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                user: actions.payload,
            }
            case 'LOGOUT':
            return {
                ...state
                isAuthenticated: false,
                user: null,
            }

            default:
                break
    }
}
export default authReducer