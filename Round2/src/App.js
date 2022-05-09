import Editer from './Editer';
import TextList from './TextList';
import { useRef, useState } from 'react';

const StyleApp = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);
  const create = (name, content) => {
    const newItem = {
      name,
      content,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const remove = (targetId) => {
    const list = data.filter((item) => item.id !== targetId);
    setData(list);
  };

  const edit = (targetId, editContent) => {
    setData(
      data.map((item) => (item.id === targetId ? { ...item, content: editContent } : item))
    );
  }



  return (
    <div className="App" style={StyleApp}>
      <Editer create={create} />
      <TextList remove={remove} edit={edit} textList={data} />
    </div>
  );
}

export default App;
