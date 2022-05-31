import React from 'react'
import DiaryListItem from './DiaryListItem'
import '../style/DiaryList.scss'

function DiaryList({
  diaries,
  onRemove,
  setDiaries,
}) {
  return (
    <div className="DiaryList">
      <h2>Diary List</h2>
      <h4>
        The number of your diaries is{' '}
        {diaries.length === 0 ? (
          ``
        ) : (
          <span>{diaries.length}.</span>
        )}
      </h4>
      {diaries.map((diary) => (
        <DiaryListItem
          diary={diary}
          key={diary.id}
          onRemove={onRemove}
          setDiaries={setDiaries}
        />
      ))}
    </div>
  )
}

export default DiaryList
