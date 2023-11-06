import React from 'react'
import './styles.css'

export const FootListItem = ({blog:{id,title,bg}}) => {
  return (
    <div className='class'>
    <div className={`blog-item bg-${bg}`}>
        <h1 id='title-text'>{title}</h1>
    </div>
    </div>
  )
}
