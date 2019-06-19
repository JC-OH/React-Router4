import React from 'react';
import queryString from 'query-string';

// const About = ({match}) => {
//     return (
//         <div>
//             {/*우리가 name 이라는 params 를 만들었으니, 이 값은 match.params.name 을 통하여 확인 할 수 있습니다.*/}
//             <h2>About {match.params.name}</h2>
//         </div>
//     );
// };

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    console.log(query);

    // 이제 ?detail=true 가 주소 뒤에 붙어야만, ‘detail: blahblah’ 문자열이 나타나게 됩니다.
    // URL 쿼리를 만들 때 주의하실 점은, 받아오는 값들은 모두 문자열이라는 것 입니다.
    // 따라서 비교를 해야 할 땐 boolean 을 불러오던 숫자를 불러오던, 문자열 형태로 비교를 하거나, 알맞는 형태로 변환을 시킨다음에 비교를 하세요.
    const detail = query.detail === 'true';

    return (
        <div>
            <h2>아바웃 {match.params.name}</h2>
            {detail && 'detail: blahblah'}
        </div>
    );
};

export default About;