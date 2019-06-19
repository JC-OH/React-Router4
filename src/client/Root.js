import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from 'shared/App';
import Home from 'routes/Home';
import About from 'routes/About';
import Posts from 'routes/Posts';
import Login from 'routes/Login';
import MyPage from 'routes/MyPage';
import Search from 'routes/Search';
import NoMatch from 'routes/NoMatch';

import Header from 'components/Header'

// 이 컴포넌트는 우리의 웹어플리케이션에 BrowserRouter를 적용합니다. 나중에 리덕스를 적용 하게 될 때, 여기서 Provider 를 통하여 프로젝트에 리덕스를 연결시켜줍니다.
const Root = () => (
    <Router>
        <App/>
        <div>
            <Header/>
            <div>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/about/:username" component={About}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route path="/posts" component={Posts}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/me" component={MyPage}></Route>
                    <Route path="/search" component={Search}></Route>
                    <Route component={NoMatch}></Route>
                </Switch>
            </div>
        </div>
    </Router>
);

export default Root;