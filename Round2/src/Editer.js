import { useState, useRef } from 'react';
import styled from 'styled-components';

const StyleContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const StyleInput = styled.input`
  margin-bottom: 20px;
  width: 300px;
  padding-bottom: 10px;
  border: 2px solid #3498db;
`;

const StyleTextarea = styled.textarea`
  padding-bottom: 10px;
  width: 300px;
  height: 150px;
  margin-bottom: 15px;
  border: 2px solid #3498db;
`;
const StyleButton = styled.button`
  width: 300px;
  padding: 10px 0;
  cursor: pointer;
  border-color: #3498db;
  color: #fff;
  box-shadow: 0 0 20px 20px #3498db inset, 0 0 0 0 #3498db;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 15px 10px #3498db inset, 0 0 0 2px #3498db;
    background-color: #3498db;
    color: #000;
  }
`;

const Editer = ({ create }) => {
  const nameInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    name: '',
    content: '',
  });
  const handleState = (e) => {
    console.log(e.target.name, e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    if (state.name.length < 1) {
      alert('Please write the title at least 1 word!');
      nameInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      alert('Please write the comments at least 5 words!');
      contentInput.current.focus();
      return;
    }

    create(state.name, state.content);

    setState({
      name: '',
      content: '',
    });
    alert('- - SaVeD - -');
  };

  return (
    <StyleContainer>
      <h2>To do list & Diary</h2>
      <div>
        <StyleInput ref={nameInput} name="name" value={state.name} onChange={handleState} placeholder="Write Title" />
      </div>
      <div>
        <StyleTextarea ref={contentInput} name="content" value={state.content} onChange={handleState} placeholder="Write Comments"></StyleTextarea>
      </div>
      <div>
        <StyleButton onClick={handleSubmit}>!!!!SAVE!!!!</StyleButton>
      </div>
    </StyleContainer>
  );
};
export default Editer;
