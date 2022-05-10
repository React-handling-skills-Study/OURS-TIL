import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';


// styling - emotion 사용 !

const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 1rem;
  /* 기존 Sass의 문법도 사용이 가능합니다! */
  input{
    border: 1px solid teal;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
 
  }  
`;

const ButtonWrapper = styled(InputWrapper)`
  button {
    background-color: orange;
    border: 0;
    border-radius: 10px;
    padding: 0.2rem 0.5rem;
    color: white;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: orange;
      background-color: aliceblue;
      border: 1px solid orange;
    }
  }
`;

const FocusInput = styled.input`
  &:focus {
    border: 0;
    outline: 1px solid orangered;
  }
`;

const Wrapper = styled.div`
  max-width: 520px;
  margin: 10rem auto;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
border-radius: 20px;
border: 1px solid burlywood;
padding: 2rem 0rem;
`
const Userlist = styled.ul`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  gap:10px;
  margin: 1rem; 
  padding: 1rem;
  border: 3px solid #b52;
  border-radius: 20px;
`

const SignupForm = () => {

  //useref는 element를 직접 조작하기 위해 사용합니다.
  const focusInput = useRef();


  // 저장된 input value를 하나의 list로 만들기 위한 state입니다
  const [userlist, setUserlist] = useState([]);

  //map함수를 돌 때, 키값으로 주기 위한 Index입니다.
  // map함수에서 제공하는 index는 성능이슈로 쓰이지 않기에 따로 키값을 설정하였습니다.
  //map함수가 제공하는 index의 결점과 key에 대해 추가공부를 하면 좋을 것 같습니다!
  const [userIndex, setUserIndex] = useState(0);


  //state는 하나의 값을 저장할 수도 있지만, 여러개의 값을 저장할 수도 있어요.
  const [inputValue, setInputValue] = useState({
    username: '',
    email: '',
    id: '',
    password: '',
    passwordConfirmation: '',
  });
  const { username, email, id, password, passwordConfirmation } = inputValue;
  

  // 5개의 input value를 관리해요. 모두 하나의 함수를 사용하고 있습니다.
  const handleInputValue = (e) => {
    // 전개연산자를 쓰는 이유는 인풋에서 다른 인풋으로 변경될 때 그 값을 기억하기 위함입니다.
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };


  //enter키로 submit할 수 있게합니다. html form tag를 사용해서 input과 button을 감싸면 자동으로 입력되긴 합니다.
  const handleSubmitForm =  (e) => {
    if (e.key === 'Enter') {
      onClickSubmitForm();
    }
  };
  
  
  // 버튼이 클릭됐을때의 이벤트입니다.
  const onClickSubmitForm =  () => {
    // userlist에 값을 담아주기 위한 객체입니다.
    const user = {
      // 프로퍼티 키와 벨류가 같으면 축약해서 사용할 수 있습니다
      username,
      email,
      id,
      password,
      passwordConfirmation,
      userIndex,
    };
    // 인풋값이 제출되었을때, userIndex의 값도 1씩 올라갑니다.
    setUserIndex((prev) => (prev += 1));

    // 전개연산자를 통해 기존의 userlist 전체를 담고, 새로 생성된 user를 삽입한다.
    setUserlist([...userlist, user]);

    alert(`${username}님 환영합니다. 아이디 ${id}로 가입 되셨습니다.`);

    // 폼 제출 이후 인풋의 값을 비워줍니다
    setInputValue({
      username: '',
      email: '',
      id: '',
      password: '',
      passwordConfirmation: '',
    });
    focusInput.current.focus();
  };


  useEffect(() => {
    //userlist를 활용하는 어떤 함수. 여기서는 console.log로 대체.
    //useEffect로 감싸주지 않으면 계속 랜더링이 되는 현상이 발생한다.
    console.log(userlist);

    //cleanup function.  lifycecle - componentWillUnmount 컴포넌트가 사라지고 나서 실행.
    //주의할점은 re-rendering이 되고, 이전의 effect가 clean-up 함수로부터 삭제되고, new effect가 실행된다.
    return console.log(userlist);    


    //의존성 배열만 넣었을때, lifecycle - componentdidmount와 비슷하게 렌더링 될 때 한번 실행. 이때 예전 값을 참조한다.(업데이트되는 값을 참조하지 않음)
    //의존성 배열에 값을 때, lifecycle - componentdidupdate와 비슷하게 컴포넌트의 변경사항이 있을때마다실행.
  }, [userlist]);

  return (
    <>
    {/* 노란색 컴포넌트는 emotion에 의한 스타일드 컴포넌트입니다. */}
    <Wrapper>
      <header>
        <h1>회원가입</h1>
      </header>
      <InputWrapper>
      {/* 인풋들이 사용하는 어트리뷰트를 잘 봐주세요 */}
        <FocusInput
          type="text"
          name="username"
          value={username || ''}
          placeholder="사용자명"
          onChange={handleInputValue}
          ref={focusInput}
        />
        <input
          type="email"
          name="email"
          value={email || ''}
          placeholder="이메일"
          onChange={handleInputValue}
        />
        <input
          type="address"
          name="id"
          value={id || ''}
          placeholder="아이디"
          onChange={handleInputValue}
        />
        <input
          type="password"
          name="password"
          value={password || ''}
          placeholder="비밀번호"
          onChange={handleInputValue}
        />
        {/* 하나의 인풋에 2개의 이벤트를 부착할 수도 있어요! */}
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="비밀번호재확인"
          onChange={handleInputValue}
          value={passwordConfirmation || ''}
          onKeyUp={handleSubmitForm}
        />
      </InputWrapper>
      <ButtonWrapper>
        <button onClick={onClickSubmitForm}>가입하기</button>
      </ButtonWrapper>
      
      <section>
      <h3>회원목록</h3>
        {/* map 함수로 데이터를 뿌려줍니다. */}
        {userlist?.map((user) => (
          <Userlist key={user.userIndex}>
            <li>고객성함 : {user.username}</li>
            <li>아이디 : {user.id}</li>
            <li>e-mail : {user.email}</li>
          </Userlist>
        ))}
        
      </section>
      </Wrapper>
      </>
  );
};

export default SignupForm;