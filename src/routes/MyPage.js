import React from 'react';
import { Redirect } from 'react-router-dom';

const logged = true;

const MyPage = () => {
    return (
        <div>
            {
                !logged && <Redirect to="/login"/>
            }
            <h1>
                My Page
            </h1>
        </div>
    );
};

export default MyPage;