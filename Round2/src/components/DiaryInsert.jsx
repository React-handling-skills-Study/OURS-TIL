import React, {
  useCallback,
  useRef,
  useState,
} from 'react'
import { MdAdd } from 'react-icons/md'
import '../style/DiaryInsert.scss'

function DiaryInsert({ onInsert }) {
  const [value, setValue] = useState()

  const valueInput = useRef()

  const onChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      if (value === undefined || value === '') {
        valueInput.current.focus()
        return
      } else {
        // 입력 받은 값을 인수로 전달
        // 인풋 빈칸으로 만들어줌
        onInsert(value)
        setValue('')
      }
    },
    [onInsert, value],
  )

  return (
    <form
      className="DiaryInsert"
      onSubmit={onSubmit}
    >
      <textarea
        ref={valueInput}
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  )
}

export default DiaryInsert
