import { GET_USERS_FETCH } from "../constants"

export const getUsers = ()=>{
    return {
        type : GET_USERS_FETCH,
    }
}