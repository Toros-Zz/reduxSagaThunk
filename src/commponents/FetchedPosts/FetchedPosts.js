import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/actions';
import { getPosts, hasLoader } from '../../redux/selectors';
import { Post } from '../Post';
import { Loader } from '../Loader';

export const FetchedPosts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(getPosts);
    const isLoader = useSelector(hasLoader);

    const loadHandler = () => {
        dispatch(fetchPosts());
    };

    if (isLoader) {
        return <Loader />
    }

    if (!posts.length) {
        return (
            <button 
                className="btn btn-primary"
                onClick={loadHandler}
            >
                Load
            </button> 
        );
    }
    
    return (
        <div className="FetchedPosts">
            {
                posts.map(post => (
                    <Post key={post.id} post={post}/>
                ))
            }
        </div>
    );
};