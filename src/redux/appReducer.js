import { SET_LOADER } from './types';

const initialState = {
    loader: false,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADER:
            return { ...state, loader: action.payload };

        default:
        return state;
    }
};