import React from 'react';

const Post = ( { match } ) => {
    return (
        <div>
            <h2>Post { match.params.title } </h2>
        </div>
    );
};

export default Post;