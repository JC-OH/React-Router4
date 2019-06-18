import React from 'react';
import ReactDOM from 'react-dom';
// 이 컴포넌트는 우리의 웹어플리케이션에 BrowserRouter를 적용합니다. 나중에 리덕스를 적용 하게 될 때, 여기서 Provider 를 통하여 프로젝트에 리덕스를 연결시켜줍니다.
import Root from './client/Root';
//import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';
import './index.css';



ReactDOM.render(<Root />, document.getElementById('root'));
//registerServiceWorker();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();