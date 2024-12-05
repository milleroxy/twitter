import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/userAction.js";

// const defaultState = {
//     name: 'Monster',
//     avatar: 'https://gravatar.com/avatar/000?d=monsterid'
// }

export const userReducer = (state, action) => {
    switch(action.type) {
        case CHANGE_NAME:
            return {
                ...state, name: action.payload || state.user.name || state.name
            }
        case CHANGE_AVATAR:
            return {
                ...state, avatar: action.payload || state.user.avatar
            }
        default:
            return state;
    }
}