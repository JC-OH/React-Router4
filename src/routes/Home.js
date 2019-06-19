import React from 'react';

const Home = ({history}) => {
    return (
        <div>
            <h1>
                Home
                <hr/>
                
                <button onClick={()=>{history.push('/posts')}}> Click</button>
            </h1>
        </div>
    );
};

export default Home;