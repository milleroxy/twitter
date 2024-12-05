import {CHANGE_STATS} from "../actions/userAction.js";

/*
 stats: {
        followers: 0,
        following: 0
    }
 */

export const statsReducer = (state, action) => {
    let res;
    switch (action.type) {
        case CHANGE_STATS:
            res = state[action.payload.statsType] + action.payload.sum;
            return {
                ...state, [action.payload.statsType]: res >= 0 ? res : 0
            }
        default:
            return state;
        }
    }