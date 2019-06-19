import React from 'react';

const About = ({ match }) => {
    return (
        <div>
            <h1>About</h1> { match.params.username }
        </div>
    );
};

export default About;