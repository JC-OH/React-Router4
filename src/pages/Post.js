import React from 'react';
// react-router 가 버전 4로 업데이트 되면서 달라진 점 중 하나는, Route 내부에 Route 를 설정하는 방식이 달라졌다는 것 입니다.

// Foo 컴포넌트에서 props.children 의 자리에 Bar 컴포넌트가 들어가는 형식이였습니다. 그래서 모든 라우트는 최상위에서 정해주어야 했죠.
// 하지만 이제는 다릅니다. v4 에서는, props.children 을 사용하지 않고 라우트에서 보여주는 컴포넌트 내부에 또 Route 를 사용 할 수 있게 됐습니다. 한번 해볼까요?
// 먼저 Post 라는 페이지 컴포넌트를 만드세요. 이 컴포넌트에서는 params.id 를 받아와서 렌더링해줍니다.
const Post = ({match}) => {
    return (
        <div>
            포스트 {match.params.id}
        </div>
    );
};

export default Post;