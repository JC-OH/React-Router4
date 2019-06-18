import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Post } from 'pages';

// 그 다음엔 Posts 페이지 컴포넌트를 만드세요. 이 컴포넌트에 Link 에서 현재 주소 뒤에 id 를 붙여서 이동하도록 설정하세요.
// 그리고 Link 리스트 하단에는 Route 를 통해 조건에 따라 원하는 결과를 보여주도록 설정하겠습니다.


// 상단부터 코드 설명을 하겠습니다. Post 컴포넌트를 불러올때 ‘./Post’ 에서 바로 불러오는게 아닌 ‘pages’ 를 통해 불러왔습니다.
// 지금 상황에서는 상대경로에서 불러오는게 더 자연스러울수도 있긴 합니다. 하지만, 우리는 2장에서 코드스플리팅을 해보게 될 텐데,
// 이 과정에서 페이지를 불러오는 방식이 통일되어야 제대로 작동하므로 pages 에서 불러오도록 설정하였습니다.

// Link 를 설정하는 부분에서는, match.url 이 사용되었는데요, 이 url 은 현재의 라우트의 경로를 알려줍니다.
//
// 이 부분에서는 그냥 to=”/posts/1″ 으로 설정을 해도 됩니다. 하지만, 이렇게 하는 경우에 나중에 현재의 라우트 경로가 바뀌게 되면 자동으로 바뀐다는 장점이 있습니다.

// 하단에 Route 를 설정 할 때 첫번째 라우트는 match.url 로 설정하였습니다. 이 의미는, 포스트의 id 가 주어지지 않았을 때를 의미합니다.
// 그리고 여기서는 component 대신에 render 가 되었지요? 이 render 는 지금처럼 인라인 렌더링을 가능케 해줍니다.

// 두번째 라우트에선 현재 라우트의 주소에 :id 가 붙었을 시에 Post 컴포넌트를 보여주도록 설정했습니다.

const Posts = ({match}) => {
    return (
        <div>
            <h2>Post List</h2>
            <ul>
                <li><Link to={`${match.url}/1`}>Post #1</Link></li>
                <li><Link to={`${match.url}/2`}>Post #2</Link></li>
                <li><Link to={`${match.url}/3`}>Post #3</Link></li>
                <li><Link to={`${match.url}/4`}>Post #4</Link></li>
            </ul>
            <Route exact path={match.url} render={()=>(<h3>Please select any post</h3>)}/>
            <Route path={`${match.url}/:id`} component={Post}/>
        </div>
    );
};

export default Posts;