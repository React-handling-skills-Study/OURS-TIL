import ListItem from './ListItem';
import styled from 'styled-components';

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

const TextList = ({ textList }) => {
  return (
    <StyleContainer className="TextList" style={StyleListItem}>
      {textList.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
    </StyleContainer>
  );
};
TextList.defaultProps = {
  textList: [],
};

export default TextList;
