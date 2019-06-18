import React from 'react';
import { Link, NavLink  } from 'react-router-dom';

const Menu = () => {

    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };

    return (
        <div>
            {/*새로고침을 하기 위해선, 리액트 라우터에 있는 Link 컴포넌트를 사용해야합니다. 이 컴포넌트를 사용하면 페이지를 새로 불러오는걸 막고, 원하는 라우트로 화면 전환을 해줍니다.*/}
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/about/foo">About Foo</Link></li>
            </ul>
            <hr/>
            {/*NavLink 컴포넌트는 Link 랑 비슷한데요, 만약에 설정한 URL 이 활성화가 되면, 특정 스타일 혹은 클래스를 지정 할 수 있습니다.*/}
            <ul>
                {/*Route 를 지정 할 때 처럼, 중첩될수도 있는 라우트들은 exact 로 설정을 하셔야 합니다. 만약에 활성화 되었을 때 특정 클래스를 설정하고 싶다면 activeClassName 을 설정하시면 됩니다.*/}
                <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
                <li><NavLink to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink></li>
                <li><NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;