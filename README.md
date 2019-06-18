This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 프로젝트 생성 및 라이브러리 설치
```angular2

$ yarn add react-router-dom
$ yarn add cross-env --dev
$ yarn add query-string
```

> - **react-router-dom**: 브라우저에서 사용되는 리액트 라우터 입니다.
> - **cross-env**: 프로젝트에서 NODE_PATH 를 사용하여 절대경로로 파일을 불러오기 위하여 환경 변수를 설정 할 때 운영체제마다 방식이 다르므로 공통적인 방법으로 설정 할 수 있게 해주는 라이브러리입니다.

## 디렉토리 생성
> - **src/components**: 컴포넌트들이 위치하는 디렉토리입니다.
> - **src/pages**: 각 라우트들이 위치하는 디렉토리 입니다.
> - **src/clien**t: 브라우저 측에서 사용할 최상위 컴포넌트 입니다. 우리가 추후 서버사이드 렌더링을 구현 할 것이기 때문에 디렉토리를 따로 구분하였습니다. (서버사이드 렌더링을 할 때에는 서버 전용 라우터를 써야합니다.) 여기서 라우터를 설정합니다.
> - **src/server**: 서버측에서 사용 할 리액트 관련 코드를 여기에 넣습니다.
> - **src/shared**: 서버와 클라이언트에서 공용으로 사용되는 컴포넌트 App.js 가 여기에 위치합니다.
> - **src/lib**: 나중에 웹 연동을 구현 할 때 사용 할 API와 코드스플리팅 할 때 필요한 코드가 여기에 위치합니다.


## 라우트 파라미터 읽기
라우트의 경로에 특정 값을 넣는 방법을 알아보겠습니다. 방법은 두가지가 있는데요, **params** 를 사용하는 것 과, **query** 를 사용하는 것 입니다.


> - **history** 이 객체를 통해 push, replace 를 통해 다른 경로로 이동하거나 앞 뒤 페이지로 전환 할 수 있습니다.
> - **location** 이 객체는 현재 경로에 대한 정보를 지니고 있고 URL 쿼리 (/about?foo=bar 형식) 정보도 가지고있습니다.
> - **match** 이 객체에는 어떤 라우트에 매칭이 되었는지에 대한 정보가 있고 params (/about/:name 형식) 정보를 가지고있습니다.

### 헷갈리는 값들
라우트가 받는 props 중에서, 상당히 헷갈리는 값들이 있습니다.

> - location.pathname
> - lmatch.path
> - lmatch.url

location.pathname 은 현재 브라우저상의 위치를 알려줍니다. 이 값은 어떤 라우트에서 렌더링하던 동일합니다.
match 관련은 설정한 Route 와 직접적으로 관계된 값만 보여줍니다.
> - Posts 를 보여주는 라우트에선 :id 값을 설정하지 않았으니 path 와 url 이 둘다 /posts 입니다.
> - Post 를 보여주는 라우트에선 path 의 경우엔 라우트에서 설정한 path 값이 그대로 나타납니다. url 의 경우엔 :id 부분에 값이 들어간 상태로 나타납니다.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
