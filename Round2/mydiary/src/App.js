import { useEffect, useRef } from "react";
import { useState } from "react";
import DiaryUpdateModal from "./Components/DiaryUpdateModal";
import DiaryTemplate from "./Layouts/DiaryTemplate";
import MyDiary from "./Layouts/MyDiary";


function App() {
  
  const nextId = useRef(1);
  const [diary, setDiary] = useState([]);
  

  const onInsert = text => {
    const diaryValue = {
      id: nextId.current,
      text,
      
    }
    setDiary(prev => [...prev,diaryValue])
    nextId.current += 1;
    
  }
  const onRemoveDiary = (id) =>{
    setDiary(prev => prev.filter(item => item.id !== id))
  }


  
  return (
    <>
    
    <MyDiary>
      <DiaryTemplate diary={diary} onInsert={onInsert} onRemoveDiary={onRemoveDiary} setDiary={setDiary}/>
    </MyDiary>
    </>
  );
}

export default App;
