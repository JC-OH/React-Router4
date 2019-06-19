// 이 컴포넌트를 불러와서 한 파일로 내보낼 수 있도록 인덱스를 만들어주세요.

import withSplitting from 'lib/withSplitting';


// export { default as Home } from './Home';
// export { default as About } from './About';
// export { default as Posts } from './Posts';
// export { default as Post } from './Post';

export const Home = withSplitting(() => import('./Home'));
export const About = withSplitting(() => import('./About'));
export const Posts = withSplitting(() => import('./Posts'));
export const Post = withSplitting(() => import('./Post'));