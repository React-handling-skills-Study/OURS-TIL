import { useState, useRef } from 'react';
import styled from 'styled-components';

const ListItem = ({ name, content, id, remove, edit }) => {

  const editArea = useRef();

  const [isEdit, setIsEdit] = useState(false);
  const [editAreaContent, setEditAreaContent] = useState(content);

  const changeIsEdit = () => setIsEdit(!isEdit);


  const cancleEdit = () => {
    setIsEdit(false);
    setEditAreaContent(content);
  };

  const confirmEdit = () => {
    if (editAreaContent.length < 5) {
      alert('Please write the comments at least 5 words!')
      editAreaContent.current.focus();
      return;
    }

    if (window.confirm('You really want to edit?')) {

      edit(id, editAreaContent);
      changeIsEdit();
    }
  };


  const handleRemove = () => {
    if (window.confirm('You really want to remove this?')) {
      remove(id);
    }
  }

  return (
    <StyleContainer className="ListItem">
      <StyleInfo className="info">
        <span>Title : {name}</span>
        <br />
      </StyleInfo>
      <StyleContent className="content">
        {isEdit ? (
          <>
            <textarea ref={editArea} value={editAreaContent} onChange={e => setEditAreaContent(e.target.value)} />
          </>)
          : (<>{content}</>)}
      </StyleContent>
      {isEdit ? (
        <div>
          <StyleButton onClick={confirmEdit}>apply</StyleButton>
          <StyleButton onClick={cancleEdit}>cancle</StyleButton>
        </div>) :
        (<div >
          <StyleButton onClick={handleRemove}>remove</StyleButton>
          <StyleButton onClick={changeIsEdit}>edit</StyleButton>
        </div>)
      }
    </StyleContainer >
  );
};




const StyleContainer = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #badedb;
  background-color: #ECFBF5;
  margin-bottom 20px;
  color: gray;
  min-width: 300px;
`;

const StyleInfo = styled.div`
  border-bottom: 1px solid gray;
  width: 100%;
  padding-bottom: 10px;
  margin: 10px;
`;

const StyleContent = styled.div`
  font-weight: bold;
  margin: 10px 0;
  color: gray;
`;

const StyleButtonDiv = styled.div`
display: flex;
`

const StyleButton = styled.button`
  width: 60px;
  padding: 5px;
  cursor: pointer;
  align-items: center;
  border-color: #A7C4A0;
  color: #353D2F;
  box-shadow: 0 0 10px 10px #E6EFE9 inset, 0 0 0 0 #E6EFE9;
  transition: all 0.3s ease;
  margin: 20px 10px 0;
  &:hover {
    box-shadow: 0 0 20px 20px #D7CEB2 inset, 0 0 0 2px #D7CEB2;
    background-color: #66635B;
    color: #4C5760;
  }
`












export default ListItem;
