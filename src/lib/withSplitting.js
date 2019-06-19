import React, { Component } from 'react';

// 이 함수에서는, 코드 스플리팅 할 때 반복되는 로직을 함수화해줌으로서, 우리가 나중에 코드 스플리팅된 컴포넌트를 렌더링 하는 것 만으로 코드를 불러와서 사용 할 수 있게 해줍니다.

// 더 이상 App 의 state 에 컴포넌트 자체를 담을 필요 없고, 그냥 평상시 하던 것 처럼 조건부로 렌더링만 해도, 자동으로 스플리팅 되는거죠.
const withSplitting = getComponent => {
    // 여기서 getComponent 는 () => import('./SplitMe') 의 형태로 함수가 전달되야합니다.
    class WithSplitting extends Component {
        state = {
            Splitted: null
        };

        constructor(props) {
            super(props);
            getComponent().then(({ default: Splitted }) => {
                this.setState({
                    Splitted
                });
            });
        }

        render() {
            const { Splitted } = this.state;
            if (!Splitted) {
                return null;
            }
            return <Splitted {...this.props} />;
        }
    }

    return WithSplitting;
};

export default withSplitting;