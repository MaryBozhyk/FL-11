import UserData from '../data';

import {
    ACTION_REMOVE,
    ACTION_ADD
} from '../actions/actions';

const defaultState = {
    limit: 5,
    data: UserData
};

function reducer(state = defaultState, action) {
    switch (action.type) {
    case ACTION_REMOVE:
        return {
            ...state,
            limit: state.limit - 1,
            data: state.data.filter((user) => user.id !== action.id)
        };
    case ACTION_ADD:
        return {
            ...state,
            limit:
            (state.limit + 5) < state.data.length
                ? (state.limit + 5)
                : (state.limit = state.data.length)
        };
    default:
        return state;
    }
}
export default reducer;