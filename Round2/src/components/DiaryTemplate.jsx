import React from 'react'
import '../style/DiaryTemplate.scss'

function DiaryTemplate({ children }) {
  return (
    <div className="DiaryTemplate">
      <div className="app-title">
        Today's Diary
      </div>
      <div className="content">{children}</div>
    </div>
  )
}

export default DiaryTemplate
