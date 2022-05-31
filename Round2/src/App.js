import React, {
  useCallback,
  useRef,
  useState,
} from 'react'
import DiaryTemplate from './components/DiaryTemplate'
import DiaryInsert from './components/DiaryInsert'
import DiaryList from './components/DiaryList'

function App() {
  const [diaries, setDiaries] = useState([])

  // ref를 사용하여 변수 담기
  const nextId = useRef(4)

  // onInsert 함수를 App.js에서 만드는 이유?
  const onInsert = useCallback(
    (text) => {
      const diary = {
        id: nextId.current,
        text,
        created_date: new Date().getTime(),
      }
      setDiaries(diaries.concat(diary))
      nextId.current += 1
    },
    [diaries],
  )

  const onRemove = useCallback(
    (id) => {
      setDiaries(
        diaries.filter(
          (diary) => diary.id !== id,
        ),
      )
    },
    [diaries],
  )

  // const onEdit = useCallback(
  //   (changeId, newText) => {
  //     todos.map((todo) =>
  //       todo.id === changeId
  //         ? { ...todo, text: newText }
  //         : todo,
  //     )
  //   },
  //   [todos],
  // )

  return (
    <DiaryTemplate>
      <DiaryInsert onInsert={onInsert} />
      <DiaryList
        diaries={diaries}
        setDiaries={setDiaries}
        onRemove={onRemove}
        // onEdit={onEdit}
      />
    </DiaryTemplate>
  )
}

export default App
