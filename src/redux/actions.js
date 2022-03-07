import { CREATE_POST, REQUEST_POSTS, SET_LOADER } from './types';

export const createPost = (payload) => ({ type: CREATE_POST, payload });

export const fetchPosts = () => {
    return {
        type: REQUEST_POSTS,
    }

    // return async dispatch => {
    //     try {
    //         dispatch(showLoader());
    //         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    //         const json = await response.json();
    //         dispatch ({ type: FETCH_POST, payload: json});
    //         dispatch(hideLoader());
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
};

export const showLoader = () => ({ type: SET_LOADER, payload: true });
export const hideLoader = () => ({ type: SET_LOADER, payload: false });