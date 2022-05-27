import styled from '@emotion/styled';
import React from 'react';


const Wrapper = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);

`



const Help = () => {
  // 검색 키워드를 state로 관리

  return (
    <Wrapper>

      Help Desk
      <form action="">
        {/* input value를 state에 입력 */}
        {/* onchange로 target value 관리 */}
        Search Member<input type="text" />
        {/* history push로 URL 검색명을 입력한다..  */}
        {/* URL만 변경됨... 검색명은 변수로 담아 useEffect에 담음.. */}
        {/* 그리고 useLocation을 사용... */}
        {/* location.search로 검색 결과를 따옴 */}
        {/* history.state로 검색결과 적립 후 추출 */}
        <button>검색</button>
      </form>
    </Wrapper>

  );
};

export default Help;