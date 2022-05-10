import { useState, useRef, useCallback } from 'react';
import DiaryTemplate from './components/DiaryTemplate';
import DiaryInsert from './components/DiaryInsert';
import DiaryList from './components/DiaryList';
import Validation from './components/Validation';

const App = () => {
  const [diaries,setDiaries] = useState([])

  

  //고유값으로 사용될 id
  //ref를 사용하여 변수담기
  const nextId = useRef(1); //불필요한 렌더링 x
  
  const onInsert = useCallback(
    text => {
      const diary = {
        id: nextId.current,       
        text,
        opened: false,
      };
    
      if (Validation(diary.text)) {
        setDiaries([...diaries, diary]); 
      
        nextId.current += 1;
      }

    },
    [diaries],
  );

  const onRemove = useCallback(
    id => {
      setDiaries(diaries.filter(diary => diary.id !== id));
    },
    [diaries],
  );

  const handleOpen = useCallback(
    id => {
      setDiaries(
        diaries.map(diary =>
          diary.id === id? { ...diary, opened: !diary.opened} : diary,
        ),
      );
    },
    [diaries],
  );

  

  

  return (
    <DiaryTemplate>
      <DiaryInsert onInsert={onInsert} />
      <DiaryList diaries={diaries} onRemove={onRemove} handleOpen={handleOpen} /> 
    </DiaryTemplate>                           // onToggled로 오타...     
  );                                                                    
};

export default App;
