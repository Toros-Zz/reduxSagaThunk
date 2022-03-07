import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../redux/actions';

const PostForm = ({ createPost }) => {
    const [title, setTitle] = useState('');

    const inputsReset = () => {
        setTitle('');
    };
    
    const submitHandler = (event) => {
        event.preventDefault();
        
        const newPost = {
            title,
            id: Date.now().toString(),
        };

        if (newPost.title.trim()) {
            createPost(newPost);
        }
        inputsReset();
    };

    const inputHandler = (event) => {
        const { id, value } = event.currentTarget;

        switch (id) {
            case 'title': 
                setTitle(value);
                break;
            default:
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Post title
                </label>
                <input 
                    type="text" 
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={inputHandler}
                />
            </div>
            <button className="btn btn-success" type="submit">Create</button>
        </form>
    );
};

const mapDispatchToProps = {
    createPost,
}

export default connect(null, mapDispatchToProps)(PostForm)