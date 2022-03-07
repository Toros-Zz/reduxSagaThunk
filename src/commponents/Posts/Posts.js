import React from 'react';
import { connect } from 'react-redux';
import { Post } from './../Post';

const Posts = ({ posts }) => {
    if (!posts.length) {
        return (
            <span>No posts yet</span>
        );
    }

    return posts.map(post => (
        <div key={post.id}>
            <Post post={post} />
        </div>
    ));
};

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
    }
}

export default connect(mapStateToProps, null)(Posts)