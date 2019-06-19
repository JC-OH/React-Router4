import React from 'react';
import { Route, Link } from 'react-router-dom';
import Post from './Post';

const Posts = () => {
    return (
        <div>
            <h1>
                Posts
            </h1>
            <ul>
                <li><Link to="/posts/react">React</Link></li>
                <li><Link to="/posts/reducx">Redux</Link></li>
                <li><Link to="/posts/relay">Replay</Link></li>
            </ul>

            <Route path="/posts/:title" component={Post}></Route>
        </div>
    );
};

export default Posts;