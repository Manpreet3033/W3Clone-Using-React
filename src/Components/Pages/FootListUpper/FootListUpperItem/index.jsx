import React from 'react'
import './styles.css'

export const FootListUpperItem = ({blog:{title,content,text,bg}}) => {
  return (
    <div className='class'>
    <div className={`blog-item-main bg-${bg}`}>
        <h1>{title}</h1>
        <h5>{content}</h5>
        <a href="#html" className={`btn-black`}>
            {text}
          </a>
    </div>
    </div>
  )
}
