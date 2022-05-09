import ListItem from './ListItem';
import styled from 'styled-components';


const TextList = ({ textList, remove, edit }) => {
  return (
    <StyleContainer className="TextList" style={StyleListItem}>
      {textList.map((item) => (
        <ListItem key={item.id} {...item} remove={remove} edit={edit} />
      ))}
    </StyleContainer>
  );
};
TextList.defaultProps = {
  textList: [],
};


const StyleContainer = styled.div`
  padding: 20px;
  margin-top: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyleListItem = {
  textAlign: 'center',
};

export default TextList;
