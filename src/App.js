import React from 'react';
import PostForm from './commponents/PostForm/PostForm'
import Posts from './commponents/Posts/Posts';
import { FetchedPosts } from './commponents/FetchedPosts';

export function App() {
  return (
    <div className="container pt-3">
        <div className="row">
          <div className="col">
              <PostForm />
          </div>
        </div>
        <div className="row">
          <div className="col">
              <h2>sync Posts</h2>
              <Posts />
          </div>
          <div className="col">
          <h2>async Posts</h2>
            <FetchedPosts />
          </div>
        </div>
    </div>
  );
};