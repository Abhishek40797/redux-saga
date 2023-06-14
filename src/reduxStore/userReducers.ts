import { IActionProps, usersProps } from "../interfaces"
import { GET_USERS_SUCCESS } from "../constants"

const initialState:usersProps[] = []

export const userReducer = (state=initialState,action:IActionProps):usersProps[]=>{
    switch(action.type) {
        case GET_USERS_SUCCESS :
            return [...state, ...action.users,]
        default :
            return state
    }
}