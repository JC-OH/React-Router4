import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from 'pages';

// 지금의 경우에는 개발서버쪽에서 historyApiFallback 설정을 통하여 어떤 요청으로 들어오던
// 저희 어플리케이션이 불러와져있는 index.html 을 보여주도록 설정하기 때문입니다.
//
// 링크를 이렇게 직접 입력해서 들어갈 때에는, 서버라우트를 한번 타게 됩니다.
// 그러면 서버쪽에서 리액트앱으로 연결시켜줘야하죠.
// 실제 서버에서는, 우리가 설정한 라우트에 들어왔을때 리액트 앱이 보여지는 페이지를 보여주게 하거나,
// 혹은 API 등 사전 준비된 라우트를 제외한 모든 요청을 리액트 앱쪽으로 연결시켜주는 작업을 해야합니다.
// 그렇게 하지 않으면 서버측에서는 연결 할 라우트가 없어서 404 Not Found 페이지만 뜰 것입니다.

class App extends Component {
    render() {
        return (
        <div>
            {/*라우트를 설정 할 때에는 Route 컴포넌트를 사용하고, 경로는 path 값으로 설정합니다.*/}
            {/*첫번째 라우트 / 의 경우에는 Home 컴포넌트를 보여주게 했고, 두번째 라우트 /about 에서는 About 컴포넌트를 보여주게 했습니다.*/}
            {/*첫번째 라우트의 경우엔 exact 가 붙어있지요? 이게 붙어있으면 주어진 경로와 정확히 맞아 떨어져야만 설정한 컴포넌트를 보여줍니다.*/}
            <Route exact path="/" component={Home}/>
            {/*두 컴포넌트가 같이 보여졌죠? exact 를 하지 않으면, /about 에도 / 가 있기 때문에, 매칭이 되어서 보여지는거랍니다. 확인을 하셨다면 다시 exact 를 적으세요.*/}
            {/*<Route path="/about" component={About}/>*/}
            {/*URL 쿼리의 경우엔 컴포넌트 내에서 동적으로 사용 할 수 있고, params 의 경우엔 사용하기 전에 꼭 라우트에서 지정을 해주어야합니다.*/}
            {/*App 컴포넌트에서 다음과 같이 /about/:name 라우트를 추가하세요.*/}
            {/*About 컴포넌트가 중복됐군요.어떻게 해결해야할까요? 네. exact 를 사용하면 되겠죠? */}
            {/*<Route path="/about/:name" component={About}/>*/}
            <Switch>
                {/*주의 하실 점은, 먼저 비교 할 라우트를 위에 작성하셔야 한다는 점 입니다. 만약에 /about 을 /about/:name 보다 위에 넣어준다면, name 을 입력해주어도 나타나지 않을거에요.*/}
                <Route path="/about/:name" component={About}/>
                <Route path="/about" component={About}/>
            </Switch>

        </div>
    );
    }
}

export default App;