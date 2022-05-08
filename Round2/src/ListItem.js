import styled from 'styled-components';

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

const ListItem = ({ name, content }) => {
  return (
    <StyleContainer className="ListItem">
      <StyleInfo className="info">
        <span>Title : {name}</span>
        <br />
      </StyleInfo>
      <StyleContent className="content">{content}</StyleContent>
    </StyleContainer>
  );
};

export default ListItem;
