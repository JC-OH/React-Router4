import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>

            <div className="header">
                <Link to="/" className="item">홈</Link>
                <Link to="/about" className="item">소개</Link>
                <Link to="/about/velopert" className="item">소개 - velopert</Link>
                <Link to="/posts" className="item">포스트</Link>
            </div>
            <div className="header">
                <NavLink exact to="/" className="item" activeClassName="active">홈</NavLink>
                <NavLink exact to="/about" className="item" activeClassName="active">소개</NavLink>
                <NavLink exact to="/about/velopert" className="item" activeClassName="active">소개 - velopert</NavLink>
                <NavLink to="/posts" className="item" activeClassName="active">포스트</NavLink>
                <NavLink to="/login" className="item" activeClassName="active">로그인</NavLink>
                <NavLink to="/me" className="item" activeClassName="active">마이페이지</NavLink>
                <NavLink to="/search" className="item" activeClassName="active">검색</NavLink>
                <NavLink exact to="/search?keyword=test" className="item" activeClassName="active">검색 (test)</NavLink>
            </div>
        </div>
    )
}

export default Header;